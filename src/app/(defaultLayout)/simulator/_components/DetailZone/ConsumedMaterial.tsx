'use client';

import styles from '@/app/(defaultLayout)/simulator/_components/DetailZone/consumedMaterial.module.css';
import Material from '@/app/(defaultLayout)/simulator/_components/Material';
import { SalableItem } from '@/app/_type/market';
import useMaterialPrice from '@/app/_hooks/useMaterialPrice';

type Props = {
  materialType: SalableItem;
  count: number;
};

export default function ConsumedMaterial({ materialType, count }: Props) {
  const price = useMaterialPrice(materialType);

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
