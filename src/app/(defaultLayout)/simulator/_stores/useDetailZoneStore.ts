import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';

type DetailZoneState = {
  isOpen: boolean;
};
type DetailZoneAction = {
  open: () => void;
  close: () => void;
  toggleOpen: () => void;
};

const defaultState: DetailZoneState = {
  isOpen: false,
};

export const useDetailZoneStore = create<DetailZoneState & DetailZoneAction>()(
  devtools(
    immer((set, get) => ({
      ...defaultState,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggleOpen: () => set({ isOpen: !get().isOpen }),
    })),
  ),
);
