import { create } from 'zustand';
import {
  AuxiliaryMaterial,
  Cost,
  getAuxiliaryMaterial,
  getRefiningMaterials,
  Material,
  RefiningMaterials,
} from '@/app/simulator/_lib/materials';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import {
  AncestorProtection,
  getAncestorProtection,
} from '@/app/simulator/_lib/ancestorProtection';
import {
  getExpIncrement,
  getPercent,
  RefiningType,
} from '@/app/simulator/_lib/refiningPercent';
import dayjs from 'dayjs';
import { v1 as uuid } from 'uuid';

export type ItemType = 'weapon' | 'armor';

export const baseLevels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export type BaseLevel = (typeof baseLevels)[number];

export type UsingAuxiliary = {
  [key in AuxiliaryMaterial]: boolean;
};

export type AncestorProtectionCount = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type SimulateHistory = {
  id: string;
  date: Date;
  expFrom: number;
  expTo: number;
  itemType: ItemType;
  baseLevel: BaseLevel;
  ancestorProtection: AncestorProtection | null;
  refiningType: RefiningType;
  usingAuxiliary: UsingAuxiliary;
  isFree: boolean;
};

export type SimulatorState = {
  itemType: ItemType;
  baseLevel: BaseLevel;
  exp: number;
  usingAuxiliary: UsingAuxiliary;
  ancestorProtectionCount: number;
  isFree: boolean;
  history: SimulateHistory[];
  accumulatedCost: RefiningMaterials & {
    [key in AuxiliaryMaterial]: number;
  } & { trials: number };
};

export type SimulatorAction = {
  setItemType: (itemType: ItemType) => void;
  setBaseLevel: (baseLevel: BaseLevel) => void;
  setExp: (exp: number) => void;
  baseLevelUp: () => void;
  isMaxLevel: () => boolean;
  toggleAuxiliary: (auxiliary: AuxiliaryMaterial) => void;
  refine: () => void;
};

const defaultState: SimulatorState = {
  itemType: 'weapon',
  baseLevel: 0,
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
    ['최상급 오레하 융화재료']: 0,
    ['골드']: 0,
    ['실링']: 0,
    ['명예의 파편']: 0,
    ['태양의 축복']: 0,
    ['태양의 은총']: 0,
    ['태양의 가호']: 0,
  },
};
export const useSimulatorStore = create<SimulatorState & SimulatorAction>()(
  devtools(
    immer((set, get) => ({
      ...defaultState,
      setItemType: (itemType) => set({ itemType }),
      setBaseLevel: (baseLevel) => set({ baseLevel }),
      setExp: (exp) => set({ exp }),
      baseLevelUp: () =>
        set((state) => ({
          ...state,
          baseLevel:
            state.baseLevel < 20
              ? ((state.baseLevel + 1) as BaseLevel)
              : state.baseLevel,
        })),
      isMaxLevel: () => get().baseLevel === 20,
      toggleAuxiliary: (auxiliary) =>
        set((state) => {
          state.usingAuxiliary[auxiliary] = !state.usingAuxiliary[auxiliary];
        }),
      refine: () =>
        set((state) => {
          if (state.isMaxLevel()) {
            return;
          }

          // load state
          const { itemType, baseLevel, exp, usingAuxiliary, isFree } = state;
          let { ancestorProtectionCount } = state;
          let nextIsFree = false;

          const percent = getPercent(usingAuxiliary);

          // calculate state
          let baseExp = 10;
          let ancestorProtection: AncestorProtection | null = null;

          // 선조의 가호 적용
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
                baseExp = baseExp + 30;
                ancestorProtectionCount = 5;
                break;
              case '테마르의 정':
                baseExp = baseExp + 10;
                nextIsFree = true;
                break;
            }
          }

          const [refiningType, expIncrement] = getExpIncrement(
            baseExp,
            percent,
          );

          const refiningMaterials = getRefiningMaterials(itemType, baseLevel, {
            isFree,
          });

          // update state
          state.exp = exp + expIncrement;
          state.isFree = nextIsFree;
          if (ancestorProtectionCount === 6) {
            state.ancestorProtectionCount = 1;
          } else {
            state.ancestorProtectionCount = (ancestorProtectionCount +
              1) as AncestorProtectionCount;
          }

          // log
          state.history.push({
            id: uuid(),
            date: dayjs().toDate(),
            expFrom: exp,
            expTo: exp + expIncrement,
            itemType,
            baseLevel,
            ancestorProtection,
            refiningType,
            usingAuxiliary,
            isFree,
          });
          for (const [material, count] of Object.entries(refiningMaterials)) {
            state.accumulatedCost[material as Material | Cost] += count;
          }
          for (const [auxiliary, isUsed] of Object.entries(usingAuxiliary)) {
            if (isUsed) {
              state.accumulatedCost[auxiliary as AuxiliaryMaterial] +=
                getAuxiliaryMaterial()[auxiliary as AuxiliaryMaterial];
            }
          }
        }),
    })),
  ),
);
