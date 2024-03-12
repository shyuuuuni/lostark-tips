import { ItemType } from '@/app/_type/package';
import { useQueries } from '@tanstack/react-query';
import { getItemPrice } from '@/app/_apis/market';
import { fetchCristalPrice } from '@/app/_apis/cristal';
import { useCallback, useEffect, useState } from 'react';
import usePersistStore from '@/app/_hooks/usePersistStore';
import { useMaterialFilterStore } from '@/app/(defaultLayout)/calculator/package/_stores/useMaterialFilterStore';

export default function useAtomItemsPrice(
  atomItems: Map<ItemType, number>,
  useFilter: boolean = true,
) {
  const materialFilterStore = usePersistStore(
    useMaterialFilterStore,
    (store) => store,
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const itemTypes = Array.from(atomItems.keys());
  const results = useQueries({
    queries: itemTypes.map((itemType) => {
      if (itemType === '실링') {
        return {
          queryKey: ['silver', 'price'],
          queryFn: () => getItemPrice(itemType),
          staleTime: 60 * 60 * 1000, // 1시간
          gcTime: Infinity,
        };
      }
      if (itemType === '크리스탈') {
        return {
          queryFn: fetchCristalPrice,
          queryKey: ['cristal', 'price'],
          staleTime: 60 * 60 * 1000, // 1시간
          gcTime: Infinity,
        };
      }
      return {
        queryFn: () => getItemPrice(itemType),
        queryKey: ['market', 'price', itemType],
        staleTime: 60 * 60 * 1000, // 1시간
        gcTime: Infinity,
      };
    }),
  });

  const getPrice = useCallback(
    (itemType: ItemType) => {
      const index = itemTypes.findIndex((_itemType) => _itemType === itemType);

      if (index === -1) {
        return -1;
      }
      const result = results[index];
      if (result.data) {
        return result.data * (atomItems.get(itemTypes[index]) ?? 0);
      } else {
        return -1;
      }
    },
    [atomItems, itemTypes, results],
  );

  useEffect(() => {
    let _price = 0;
    results.forEach((result, i) => {
      if (result.data) {
        if (!useFilter) {
          _price += result.data * (atomItems.get(itemTypes[i]) ?? 0);
        } else if (materialFilterStore?.[itemTypes[i]]) {
          _price += result.data * (atomItems.get(itemTypes[i]) ?? 0);
        }
      }
    });
    setTotalPrice(_price);
  }, [atomItems, itemTypes, materialFilterStore, useFilter, results]);

  return { totalPrice, getPrice };
}
