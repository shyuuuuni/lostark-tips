import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getItemPrice } from '@/app/_apis/market';
import { AuxiliaryMaterial, Material } from '@/type/material';

type Props = {
  children: React.ReactNode;
};

const materialTypes: (Material | AuxiliaryMaterial | '명예의 파편')[] = [
  '정제된 파괴강석',
  '정제된 수호강석',
  '찬란한 명예의 돌파석',
  '최상급 오레하 융화재료',
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
