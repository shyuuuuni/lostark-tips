'use client';

import styles from './packageItemsZone.module.css';
import { PackageItem } from '@/app/_type/package';
import { useState } from 'react';
import FullSelectItem from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/FullSelectItem';
import SelectItem from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/SelectItem';
import { produce } from 'immer';

type Props = {
  packageItems: PackageItem[];
};

export default function PackageItemsZone({ packageItems }: Props) {
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

  return (
    <div className={styles.container}>
      {sortedPackageItems.map((packageItem, index) => {
        const { count, packedItem } = packageItem;

        if (packedItem.packedType === '모두 받기') {
          return (
            <FullSelectItem
              key={`${packedItem.packedType}-${packedItem.name}`}
              packedItem={packedItem}
              count={count}
            />
          );
        }
        if (packedItem.packedType === '선택') {
          return (
            <SelectItem
              key={`${packedItem.packedType}-${packedItem.name}`}
              packedItem={packedItem}
              count={count}
              selected={optionSelected[index]}
              handleSelectItem={handleSelectItem(index)}
            />
          );
        }
      })}
    </div>
  );
}
