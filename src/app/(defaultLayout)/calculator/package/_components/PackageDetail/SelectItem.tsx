'use client';

import styles from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/selectedItem.module.css';
import Material from '@/app/(defaultLayout)/_components/Material';
import { AtomItems } from '@/app/_type/package';
import useAtomItemsPrice from '@/app/(defaultLayout)/calculator/package/_hooks/useAtomItemsPrice';
import { useEffect } from 'react';
import { useMaterialFilterStore } from '@/app/(defaultLayout)/calculator/package/_stores/useMaterialFilterStore';
import usePersistStore from '@/app/_hooks/usePersistStore';
import clsx from 'clsx';

type Prop = {
  items: AtomItems;
  handleChangePrice: (price: number) => void;
  selected: boolean;
};

export default function SelectItem({
  items,
  handleChangePrice,
  selected,
}: Prop) {
  const filter = usePersistStore(useMaterialFilterStore, (store) => store);
  const { totalPrice, getPrice } = useAtomItemsPrice(items);

  useEffect(() => {
    if (selected) {
      handleChangePrice(totalPrice);
    }
  }, [selected, handleChangePrice, totalPrice]);

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
              <span className={clsx(!filter?.[itemType] && styles.filtered)}>
                {getPrice(itemType).toLocaleString()} G
              </span>
              <span>x {itemCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
