import { create } from 'zustand';

export type ItemType = 'weapon' | 'armor';

export const baseLevels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
] as const;
export type BaseLevel = (typeof baseLevels)[number];

export type SimulatorState = {
  itemType: ItemType;
  baseLevel: BaseLevel;
};

export type SimulatorAction = {
  setItemType: (itemType: ItemType) => void;
  setBaseLevel: (baseLevel: BaseLevel) => void;
};

const defaultState: SimulatorState = {
  itemType: 'weapon',
  baseLevel: 0,
};

export const useSimulatorStore = create<SimulatorState & SimulatorAction>(
  (set) => ({
    ...defaultState,
    setItemType: (itemType) => set({ itemType }),
    setBaseLevel: (baseLevel) => set({ baseLevel }),
  }),
);
