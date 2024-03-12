import { SalableItem } from '@/app/_type/market';
import { useQuery } from '@tanstack/react-query';
import { getItemPrice } from '@/app/_apis/market';

export default function useMaterialPrice(materialType: SalableItem) {
  const { data } = useQuery<number>({
    queryFn: () => getItemPrice(materialType),
    queryKey: ['market', 'price', materialType],
    staleTime: 60 * 60 * 1000, // 1시간
    gcTime: Infinity,
  });
  const price = materialType === '명예의 파편' ? (data ?? 0) / 1500 : data ?? 0;

  return price;
}
