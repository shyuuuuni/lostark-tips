import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchCristalPrice } from '@/app/_apis/cristal';

type Props = {
  children: React.ReactNode;
};

export default async function PrefetchCristalPrice({ children }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: fetchCristalPrice,
    queryKey: ['cristal', 'price'],
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
