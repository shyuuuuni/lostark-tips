import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';
import { ItemType } from '@/app/_type/package';

type MaterialFilterState = {
  [key in ItemType]: boolean;
};
type MaterialFilterAction = {
  toggleUseItem: (itemType: ItemType) => void;
};

const defaultState: MaterialFilterState = {
  '경이로운 명예의 돌파석': false,
  '명예의 파편': false,
  '상급 오레하 융화 재료': false,
  '정제된 수호강석': false,
  '정제된 파괴강석': false,
  '찬란한 명예의 돌파석': false,
  '최상급 오레하 융화 재료': false,
  '태양의 가호': false,
  '태양의 은총': false,
  '태양의 축복': false,
  실링: false,
  크리스탈: false,
};

export const useMaterialFilterStore = create<
  MaterialFilterState & MaterialFilterAction
>()(
  devtools(
    persist(
      (set, get) => ({
        ...defaultState,
        toggleUseItem: (itemType) => set({ [itemType]: !get()[itemType] }),
      }),
      {
        name: 'material-filter',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
