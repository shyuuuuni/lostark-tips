'use client';

import styles from '@/app/(defaultLayout)/simulator/_components/DetailZone/consumedMaterial.module.css';
import {
  AuxiliaryMaterial,
  Cost,
  Material as MaterialType,
} from '@/type/material';
import Material from '@/app/(defaultLayout)/simulator/_components/Material';
import { getItemPrice } from '@/app/_apis/market';
import { useQuery } from '@tanstack/react-query';

type Props = {
  materialType: MaterialType | AuxiliaryMaterial | '명예의 파편';
  count: number;
};

export default function ConsumedMaterial({ materialType, count }: Props) {
  const { data } = useQuery<number>({
    queryFn: () => getItemPrice(materialType),
    queryKey: ['market', 'price', materialType],
    staleTime: 60 * 60 * 1000, // 1시간
    gcTime: Infinity,
  });
  const price = materialType === '명예의 파편' ? (data ?? 0) / 1500 : data ?? 0;

  return (
    <div className={styles.container}>
      <Material materialType={materialType} className={styles.leftSection} />
      <div className={styles.rightSection}>
        <div className={styles.name}>{materialType}</div>
        <div className={styles.countZone}>
          <span className={styles.comment}>소모 재화:</span>
          <span>{count} 개</span>
        </div>
        <div className={styles.costZone}>
          <span>환산 골드:</span>
          <span className={styles.totalGold}>
            {Math.floor(price * count).toLocaleString()}골드
          </span>
        </div>
      </div>
    </div>
  );
}
