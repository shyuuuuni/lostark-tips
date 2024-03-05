'use client';

import styles from '@/app/(defaultLayout)/calculator/package/_components/package.module.css';
import clsx from 'clsx';
import { AtomItems } from '@/app/_type/package';
import useAtomItemsPrice from '@/app/(defaultLayout)/calculator/package/_hooks/useAtomItemsPrice';

type Props = {
  packageAtomItems: AtomItems;
  packagePrice: number;
  bonusOptions?: {
    bonusCount: number;
    bonus: number;
  };
};

export default function PackagePriceZone({
  packageAtomItems,
  packagePrice,
  bonusOptions,
}: Props) {
  const price = useAtomItemsPrice(packageAtomItems);
  const n =
    bonusOptions === undefined
      ? 1
      : bonusOptions.bonusCount + bonusOptions.bonus;
  const ratio = Math.floor(
    ((price * n) / (packagePrice * (bonusOptions?.bonusCount ?? 1))) * 10000,
  );

  return (
    <div>
      <span className={styles.priceZone}>
        <span className={styles.price}>
          {Math.floor(price * n).toLocaleString()}
        </span>
        <span className={styles.priceType}>골드</span>
      </span>
      <span
        className={clsx(
          styles.priceType,
          25000 <= ratio && styles.highPrice,
          30000 <= ratio && styles.veryHighPrice,
        )}
      >
        10,000 : {ratio.toLocaleString()}
      </span>
    </div>
  );
}
