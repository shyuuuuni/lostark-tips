import { create } from 'zustand';
import { AuxiliaryMaterial } from '@/app/simulator/_lib/refining';
import { immer } from 'zustand/middleware/immer';

export type ItemType = 'weapon' | 'armor';

export const baseLevels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export type BaseLevel = (typeof baseLevels)[number];

export type UsingAuxiliary = {
  [key in AuxiliaryMaterial]: boolean;
};

export type SimulatorState = {
  itemType: ItemType;
  baseLevel: BaseLevel;
  exp: number;
  usingAuxiliary: UsingAuxiliary;
};

export type SimulatorAction = {
  setItemType: (itemType: ItemType) => void;
  setBaseLevel: (baseLevel: BaseLevel) => void;
  setExp: (exp: number) => void;
  baseLevelUp: () => void;
  isMaxLevel: () => boolean;
  toggleAuxiliary: (auxiliary: AuxiliaryMaterial) => void;
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
};
export const useSimulatorStore = create<SimulatorState & SimulatorAction>()(
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
  })),
);
