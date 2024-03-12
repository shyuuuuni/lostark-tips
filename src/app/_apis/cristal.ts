import { CristalApiResponse } from '@/app/_type/cristal';
import { findClosestCristalPrice } from '@/app/_lib/cristal';

// 금일 00:00 기준 1 크리스탈 당 골드 시세 가져오기
export const fetchCristalPrice = async () => {
  const res = await fetch(
    'https://loatool.taeu.kr/api/crystal-history/ohlc/1d',
    // 외부 API 호출이기 때문에 revalidate 기간을 늘림
    {
      next: { tags: ['cristal', 'price'], revalidate: 36000 },
    },
  );
  const data = (await res.json()) as CristalApiResponse[];
  const closestData = findClosestCristalPrice(data);

  // 상한가와 하한가 평균으로 계산
  return (closestData.high + closestData.low) / 2 / 100;
};
