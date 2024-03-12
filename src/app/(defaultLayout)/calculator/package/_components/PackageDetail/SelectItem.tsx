'use client';

import styles from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/selectedItem.module.css';
import Material from '@/app/(defaultLayout)/_components/Material';
import { AtomItems } from '@/app/_type/package';
import useAtomItemsPrice from '@/app/(defaultLayout)/calculator/package/_hooks/useAtomItemsPrice';

type Prop = {
  items: AtomItems;
};

export default function SelectItem({ items }: Prop) {
  const { getPrice } = useAtomItemsPrice(items);

  return (
    <>
      {Array.from(items).map(([itemType, itemCount]) => (
        <div
          key={`fullSelectedItem-${itemType}`}
          className={styles.itemDetailContainer}
        >
          <Material
            materialType={itemType}
            className={styles.detailItemImage}
          />
          <div className={styles.itemDetail}>
            <div className={styles.detailItemTitle}>{itemType}</div>
            <div className={styles.detailItemCount}>
              <span>{getPrice(itemType).toLocaleString()} G</span>
              <span>x {itemCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
