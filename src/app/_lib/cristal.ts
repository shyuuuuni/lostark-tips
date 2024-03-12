import { CristalApiResponse } from '@/app/_type/cristal';
import dayjs from 'dayjs';

export const findClosestCristalPrice = (
  cristalPrices: CristalApiResponse[],
): CristalApiResponse => {
  const today = dayjs();

  let closest = cristalPrices[0],
    closestDiff = Infinity;

  for (const price of cristalPrices) {
    const priceDate = dayjs(price.dt);
    const diff = Math.abs(today.diff(priceDate, 'second'));

    if (diff <= closestDiff) {
      closest = price;
      closestDiff = diff;
    }
  }

  return closest;
};
