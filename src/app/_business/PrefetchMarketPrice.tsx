import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getItemPrice } from '@/app/_apis/market';
import { SalableItem } from '@/type/market';

type Props = {
  children: React.ReactNode;
};

const materialTypes: SalableItem[] = [
  '정제된 파괴강석',
  '정제된 수호강석',
  '경이로운 명예의 돌파석',
  '찬란한 명예의 돌파석',
  '상급 오레하 융화 재료',
  '최상급 오레하 융화 재료',
  '태양의 은총',
  '태양의 축복',
  '태양의 가호',
  '명예의 파편',
];

export default async function PrefetchMarketPrice({ children }: Props) {
  const queryClient = new QueryClient();

  for (const materialType of materialTypes) {
    await queryClient.prefetchQuery({
      queryFn: () => getItemPrice(materialType),
      queryKey: ['market', 'price', materialType],
    });
  }
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
