import styles from './package.module.css';
import { Package as TargetPackage } from '@/app/_type/package';
import clsx from 'clsx';

type Props = {
  targetPackage: TargetPackage;
};

export default function Package({ targetPackage }: Props) {
  const {
    name,
    packageItems,
    saleDate,
    priceType,
    price,
    purchaseLimit,
    bonus,
    repurchaseCycle,
  } = targetPackage;
  const onSale = targetPackage.isOnSale();

  const singleGold = 220; // %
  const bonusGold = 340; // %

  return (
    <div className={styles.container}>
      <div className={styles.imageZone}></div>
      <div className={styles.title}>{name}</div>
      <div className={styles.priceZone}>
        <span className={styles.price}>{price.toLocaleString()}</span>
        <span className={styles.priceType}>{priceType}</span>
      </div>
      <div className={styles.efficiencyZone}>
        <div>
          <div className={styles.efficiency}>
            <div>단품 구매시</div>
            <div>
              <span className={styles.priceZone}>
                <span className={styles.price}>{price * 1.7 * 1.2}</span>
                <span className={styles.priceType}>골드</span>
              </span>
              <span
                className={clsx(
                  styles.priceType,
                  175 <= singleGold && styles.highPrice,
                  250 <= singleGold && styles.veryHighPrice,
                )}
              >
                ({singleGold}%)
              </span>
            </div>
          </div>
          {bonus !== 0 && (
            <div className={styles.efficiency}>
              <div>{bonus}개 구매시</div>
              <div>
                <span className={styles.priceZone}>
                  <span className={styles.price}>{price * 1.7 * 1.2}</span>
                  <span className={styles.priceType}>골드</span>
                </span>
                <span
                  className={clsx(
                    styles.priceType,
                    175 <= bonusGold && styles.highPrice,
                    250 <= bonusGold && styles.veryHighPrice,
                  )}
                >
                  ({bonusGold}%)
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
