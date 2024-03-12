import styles from './package.module.css';
import { Package as TargetPackage } from '@/app/_type/package';
import PackagePriceZone from '@/app/(defaultLayout)/calculator/package/_components/PackagePriceZone';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  targetPackage: TargetPackage;
};

export default function Package({ targetPackage }: Props) {
  const { id, name, priceType, price, bonus, image } = targetPackage;
  const defaultItems = targetPackage.getDefaultItems();

  return (
    <Link href={`/calculator/package/${id}`} className={styles.container}>
      <div className={styles.imageZone}>
        <Image src={image} alt={`${name} 이미지`} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.priceZone}>
        <span className={styles.price}>{price.toLocaleString()}</span>
        <span className={styles.priceType}>{priceType}</span>
      </div>
      <div className={styles.efficiencyZone}>
        <div>
          <div className={styles.efficiency}>
            <div>단품 구매시</div>
            <PackagePriceZone
              packageAtomItems={defaultItems}
              packagePrice={price}
            />
          </div>
          {bonus !== 0 && (
            <div className={styles.efficiency}>
              <div>{bonus}개 구매시</div>
              <PackagePriceZone
                packageAtomItems={defaultItems}
                packagePrice={price}
                bonusOptions={{ bonusCount: bonus, bonus: 1 }}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
