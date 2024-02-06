'use client';

import styles from './costZone.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import { getRefiningMaterials } from '@/app/simulator/_lib/materials';
import Image from 'next/image';

const imageLoader = ({ src }: { src: string }) =>
  `https://lostarkcodex.com/icons/${src}`;

export default function CostZone() {
  const [itemType, baseLevel, isFree, accumulatedCost] = useSimulatorStore(
    (store) => [
      store.itemType,
      store.baseLevel,
      store.isFree,
      store.accumulatedCost,
    ],
  );
  const materials = getRefiningMaterials(itemType, baseLevel, { isFree });

  return (
    <div className={styles.container}>
      <p>재련 비용</p>
      <div className={styles.costZone}>
        <span className={styles.cost}>
          {materials['명예의 파편']} ({accumulatedCost['명예의 파편']})
          <Image
            loader={imageLoader}
            src={'money_13.webp'}
            alt={'명예의 파편'}
            width={24}
            height={24}
          />
        </span>
        <span className={styles.cost}>
          {materials['실링']} ({accumulatedCost['실링']})
          <Image
            loader={imageLoader}
            src={'etc_14.webp'}
            alt={'실링'}
            width={24}
            height={24}
          />
        </span>
        <span className={styles.cost}>
          {materials['골드']} ({accumulatedCost['골드']})
          <Image
            loader={imageLoader}
            src={'money_4.webp'}
            alt={'골드'}
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  );
}
