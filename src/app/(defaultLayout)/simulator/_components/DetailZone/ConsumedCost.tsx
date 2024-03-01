import styles from './consumedCost.module.css';
import { Cost } from '@/type/material';
import Material from '@/app/(defaultLayout)/simulator/_components/Material';

type Props = {
  costType: Cost;
  count: number;
};
export default function ConsumedCost({ costType, count }: Props) {
  const price = 0.01; // 실링 상자 (1000 골드 = 10만 실링)
  const isGold = costType === '골드';

  return (
    <div className={styles.container}>
      <Material materialType={costType} className={styles.leftSection} />
      <div className={styles.rightSection}>
        <div className={styles.name}>{costType}</div>
        <div className={styles.countZone}>
          {!isGold && <span className={styles.comment}>소모 재화:</span>}
          <span>
            {count} {costType}
          </span>
        </div>
        <div className={styles.costZone}>
          {!isGold && (
            <>
              <span>환산 골드:</span>
              <span className={styles.totalGold}>
                {(price * count).toLocaleString()}골드
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
