'use client';

import styles from './materialFilter.module.css';
import usePersistStore from '@/app/_hooks/usePersistStore';
import { useMaterialFilterStore } from '@/app/(defaultLayout)/calculator/package/_stores/useMaterialFilterStore';
import { ItemType } from '@/app/_type/package';
import clsx from 'clsx';
import withTooltipPortal from '@/app/_hocs/withTooltipPortal';
import { Tooltip } from 'react-tooltip';

const PortalTooltip = withTooltipPortal(Tooltip);

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
      <div className={styles.title} data-tooltip-id="price-information">
        대상 재료 목록
      </div>
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
      <PortalTooltip id="price-information" place={'bottom-start'}>
        <div>
          <h3>기준 시세</h3>
          <div>모든 재료의 시세는 전일 경매장 시세를 기준으로 계산합니다.</div>
          <div>
            단, 실링의 경우 골드로 구매하는 비밀 금고 아이템을 기준으로
            계산합니다. (추후 개선 예정)
          </div>
        </div>
      </PortalTooltip>
    </div>
  );
}
