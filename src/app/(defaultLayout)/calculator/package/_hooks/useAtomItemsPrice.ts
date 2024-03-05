import { AtomItems } from '@/app/_type/package';
import { useQueries } from '@tanstack/react-query';
import { getItemPrice } from '@/app/_apis/market';
import { fetchCristalPrice } from '@/app/_apis/cristal';
import { useEffect, useState } from 'react';

export default function useAtomItemsPrice(atomItems: AtomItems) {
  const [price, setPrice] = useState(0);

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

  useEffect(() => {
    let _price = 0;
    results.forEach((result, i) => {
      if (result.data) {
        _price += result.data * (atomItems.get(itemTypes[i]) ?? 0);
      }
    });
    setPrice(_price);
  }, [results]);

  return price;
}
