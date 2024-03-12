'use client';

import styles from './packageItemsZone.module.css';
import { PackageItem } from '@/app/_type/package';
import { useState } from 'react';
import FullSelectItem from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/FullSelectItem';
import SelectItems from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/SelectItems';
import { produce } from 'immer';

type Props = {
  packageItems: PackageItem[];
};

export default function PackageItemsZone({ packageItems }: Props) {
  const [prices, setPrices] = useState<number[]>(
    Array.from({ length: packageItems.length }, () => 0),
  );
  const [optionSelected, setOptionSelected] = useState<number[]>(
    Array.from({ length: packageItems.length }, () => 0),
  );
  const sortedPackageItems = packageItems.toSorted((a, b) => {
    if (a.packedItem.packedType === '모두 받기') {
      return -1;
    } else if (b.packedItem.packedType === '모두 받기') {
      return 1;
    } else {
      return 0;
    }
  });
  const handleSelectItem = (optionIndex: number) => (nextSelected: number) => {
    setOptionSelected(
      produce((draft) => {
        draft[optionIndex] = nextSelected;
      }),
    );
  };
  const handleChangePrice = (optionIndex: number) => (price: number) => {
    setPrices(
      produce((draft) => {
        draft[optionIndex] = price;
      }),
    );
  };

  const totalPrice = prices.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.detailsLabel}>총 가격</div>
        <div className={styles.totalPrice}>
          {`${totalPrice.toLocaleString()} G`}
        </div>
      </div>
      <div className={styles.items}>
        {sortedPackageItems.map((packageItem, index) => {
          const { count, packedItem } = packageItem;

          if (packedItem.packedType === '모두 받기') {
            return (
              <FullSelectItem
                key={`${packedItem.packedType}-${packedItem.name}`}
                packedItem={packedItem}
                count={count}
                handleChangePrice={handleChangePrice(index)}
              />
            );
          }
          if (packedItem.packedType === '선택') {
            return (
              <SelectItems
                key={`${packedItem.packedType}-${packedItem.name}`}
                packedItem={packedItem}
                count={count}
                selected={optionSelected[index]}
                handleSelectItem={handleSelectItem(index)}
                handleChangePrice={handleChangePrice(index)}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
