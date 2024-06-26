import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import dayjs from 'dayjs';
import { v1 as uuid } from 'uuid';
import { getAncestorProtection } from '@/app/(defaultLayout)/simulator/_lib/ancestorProtection';
import {
  getAdvancedRefiningPercent,
  getExpIncrement,
} from '@/app/(defaultLayout)/simulator/_lib/refiningPercent';
import {
  getAuxiliaryMaterial,
  getRefiningMaterials,
} from '@/app/(defaultLayout)/simulator/_lib/materials';
import { EquipmentType } from '@/app/_type/equipment';
import {
  AdvancedRefiningAuxiliaryRequirements,
  AdvancedRefiningCost,
  AdvancedRefiningLevel,
  AdvancedRefiningMaterial,
  AdvancedRefiningRequirements,
  AdvancedRefiningSimulationHistory,
  AncestorProtection,
  AncestorProtectionCount,
  UsingAuxiliary,
} from '@/app/_type/advancedRefining';
import { AuxiliaryMaterial } from '@/app/_type/material';

type AdvancedRefiningSimulatorState = {
  equipmentType: EquipmentType;
  targetLevel: AdvancedRefiningLevel;
  exp: number;
  usingAuxiliary: UsingAuxiliary;
  ancestorProtectionCount: number;
  isFree: boolean;
  history: AdvancedRefiningSimulationHistory[];
  accumulatedCost: AdvancedRefiningRequirements &
    AdvancedRefiningAuxiliaryRequirements & { trials: number };
};
type AdvancedRefiningSimulatorAction = {
  setEquipmentType: (equipmentType: EquipmentType) => void;
  setTargetLevel: (targetLevel: AdvancedRefiningLevel) => void;
  setExp: (exp: number) => void;
  levelUp: () => void;
  isMaxLevel: () => boolean;
  toggleAuxiliary: (auxiliary: AuxiliaryMaterial) => void;
  refine: () => void;
  reset: (equipmentType?: EquipmentType) => void;
};

const defaultState: AdvancedRefiningSimulatorState = {
  equipmentType: '무기',
  targetLevel: 1,
  exp: 0,
  usingAuxiliary: {
    ['태양의 축복']: false,
    ['태양의 은총']: false,
    ['태양의 가호']: false,
  },
  ancestorProtectionCount: 0,
  isFree: false,
  history: [],
  accumulatedCost: {
    trials: 0,
    ['정제된 파괴강석']: 0,
    ['정제된 수호강석']: 0,
    ['찬란한 명예의 돌파석']: 0,
    ['최상급 오레하 융화 재료']: 0,
    ['골드']: 0,
    ['실링']: 0,
    ['명예의 파편']: 0,
    ['태양의 축복']: 0,
    ['태양의 은총']: 0,
    ['태양의 가호']: 0,
  },
};

export const useAdvancedRefiningSimulatorStore = create<
  AdvancedRefiningSimulatorState & AdvancedRefiningSimulatorAction
>()(
  devtools(
    immer((set, get) => ({
      ...defaultState,
      setEquipmentType: (equipmentType) => set({ equipmentType }),
      setTargetLevel: (targetLevel) => set({ targetLevel }),
      setExp: (exp) => set({ exp }),
      levelUp: () =>
        set((state) => {
          if (state.isMaxLevel() || state.exp < 100) {
            return state;
          }
          const nextTargetLevel =
            state.targetLevel + Math.floor(state.exp / 100);
          const nextExp = state.exp % 100;

          return {
            ...state,
            targetLevel: Math.min(nextTargetLevel, 20),
            exp: nextExp,
          };
        }),
      isMaxLevel: () => get().targetLevel === 20 && get().exp === 100,
      toggleAuxiliary: (auxiliary) =>
        set((state) => {
          state.usingAuxiliary[auxiliary] = !state.usingAuxiliary[auxiliary];
        }),
      refine: () =>
        set((state) => {
          if (state.isMaxLevel()) {
            return;
          }
          const { equipmentType, targetLevel, exp, usingAuxiliary, isFree } =
            state;
          let { ancestorProtectionCount } = state;
          const percent = getAdvancedRefiningPercent(usingAuxiliary);

          let nextIsFree = false;
          let baseExp = 10; // 기본 경험치 베이스. 대성공 및 선조의 가호 배수 적용
          let additionalExp = 0; // 선조의 가호 추가 획득 경험치
          let ancestorProtection: AncestorProtection | null = null;

          // 선조의 가호
          if (ancestorProtectionCount === 6) {
            ancestorProtection = getAncestorProtection();

            switch (ancestorProtection) {
              case '갈라투르의 망치':
                baseExp = baseExp * 5;
                break;
              case '겔라르의 칼':
                baseExp = baseExp * 3;
                break;
              case '쿠훔바르의 모루':
                additionalExp = 30;
                ancestorProtectionCount = 5;
                break;
              case '테메르의 정':
                additionalExp = 10;
                nextIsFree = true;
                break;
            }
          }
          const [refiningType, expIncrement] = getExpIncrement(
            baseExp,
            percent,
          );
          const refiningMaterials = getRefiningMaterials(
            equipmentType,
            targetLevel,
            {
              isFree,
            },
          );

          // 상태 업데이트
          const levelUpCount = Math.floor(
            (exp + expIncrement + additionalExp) / 100,
          );

          if (20 < targetLevel + levelUpCount) {
            state.exp = 100;
            state.targetLevel = 20;
          } else {
            state.exp = (exp + expIncrement + additionalExp) % 100;
            state.targetLevel = Math.min(
              targetLevel + levelUpCount,
              20,
            ) as AdvancedRefiningLevel;
          }

          state.isFree = nextIsFree;
          state.ancestorProtectionCount = ((ancestorProtectionCount + 1) %
            7) as AncestorProtectionCount;

          for (const [material, count] of Object.entries(refiningMaterials)) {
            state.accumulatedCost[
              material as AdvancedRefiningMaterial | AdvancedRefiningCost
            ] += count;
          }
          for (const [auxiliary, isUsed] of Object.entries(usingAuxiliary)) {
            if (isUsed) {
              state.accumulatedCost[auxiliary as AuxiliaryMaterial] +=
                getAuxiliaryMaterial()[auxiliary as AuxiliaryMaterial];
            }
          }

          // 히스토리 업데이트
          state.history.push({
            id: uuid(),
            date: dayjs().toDate(),
            targetLevel,
            expFrom: exp,
            nextTargetLevel: state.targetLevel,
            expTo: state.exp,
            equipmentType,
            ancestorProtection,
            refiningType,
            usingAuxiliary,
            isFree,
          });
        }),
      reset: (equipmentType) =>
        set((state) => {
          const _equipmentType = equipmentType ?? state.equipmentType;
          return { ...state, ...defaultState, equipmentType: _equipmentType };
        }),
    })),
  ),
);
