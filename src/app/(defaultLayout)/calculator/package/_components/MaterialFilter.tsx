'use client';

import styles from './materialFilter.module.css';
import usePersistStore from '@/app/_hooks/usePersistStore';
import { useMaterialFilterStore } from '@/app/(defaultLayout)/calculator/package/_stores/useMaterialFilterStore';
import { ItemType } from '@/app/_type/package';
import clsx from 'clsx';

const itemTypes: ItemType[] = [
  '경이로운 명예의 돌파석',
  '찬란한 명예의 돌파석',
  '정제된 파괴강석',
  '정제된 수호강석',
  '상급 오레하 융화 재료',
  '최상급 오레하 융화 재료',
  '태양의 은총',
  '태양의 축복',
  '태양의 가호',
  '명예의 파편',
  '실링',
  '크리스탈',
];

export default function MaterialFilter() {
  const store = usePersistStore(useMaterialFilterStore, (store) => store);

  return (
    <div className={styles.container}>
      <div className={styles.title}>대상 재료 목록</div>
      <ul className={styles.filterItems}>
        {itemTypes.map((itemType) => (
          <li
            key={itemType}
            onClick={() => store?.toggleUseItem(itemType)}
            className={clsx(
              styles.filterItem,
              store?.[itemType] && styles.selected,
            )}
          >
            {itemType}
          </li>
        ))}
      </ul>
    </div>
  );
}
