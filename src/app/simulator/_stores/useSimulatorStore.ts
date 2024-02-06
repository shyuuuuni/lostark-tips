import { create } from 'zustand';
import { AuxiliaryMaterial } from '@/app/simulator/_lib/materials';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import {
  AncestorProtection,
  getAncestorProtection,
} from '@/app/simulator/_lib/ancestorProtection';
import {
  getExpIncrement,
  getPercent,
} from '@/app/simulator/_lib/refiningPercent';

export type ItemType = 'weapon' | 'armor';

export const baseLevels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export type BaseLevel = (typeof baseLevels)[number];

export type UsingAuxiliary = {
  [key in AuxiliaryMaterial]: boolean;
};

export type AncestorProtectionCount = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type SimulatorState = {
  itemType: ItemType;
  baseLevel: BaseLevel;
  exp: number;
  usingAuxiliary: UsingAuxiliary;
  ancestorProtectionCount: number;
  isFree: boolean;
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
          if (state.isFree) {
            state.isFree = false;
          }

          // load state
          const { exp, usingAuxiliary } = state;
          let { ancestorProtectionCount } = state;
          let isFree = false;

          const percent = getPercent(usingAuxiliary);

          // calculate state
          let baseExp = 10;
          let ancestorProtection: AncestorProtection | null = null;

          // 선조의 가호 적용
          if (ancestorProtectionCount === 6) {
            ancestorProtection = getAncestorProtection();

            switch (ancestorProtection) {
              case 'Galatur':
                baseExp = baseExp * 5;
                break;
              case 'Galar':
                baseExp = baseExp * 3;
                break;
              case 'Kuhumbar':
                baseExp = baseExp + 30;
                ancestorProtectionCount = 5;
                break;
              case 'Temer':
                baseExp = baseExp + 10;
                isFree = true;
                break;
            }
          }

          const [incrementType, expIncrement] = getExpIncrement(
            baseExp,
            percent,
          );

          // update state
          state.exp = exp + expIncrement;
          state.isFree = isFree;
          if (ancestorProtectionCount === 6) {
            state.ancestorProtectionCount = 1;
          } else {
            state.ancestorProtectionCount = (ancestorProtectionCount +
              1) as AncestorProtectionCount;
          }
        }),
    })),
  ),
);
