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
  '경이로운 명예의 돌파석': true,
  '명예의 파편': true,
  '상급 오레하 융화 재료': true,
  '정제된 수호강석': true,
  '정제된 파괴강석': true,
  '찬란한 명예의 돌파석': true,
  '최상급 오레하 융화 재료': true,
  '태양의 가호': true,
  '태양의 은총': true,
  '태양의 축복': true,
  실링: true,
  크리스탈: true,
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
