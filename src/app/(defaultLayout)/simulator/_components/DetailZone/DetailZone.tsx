'use client';

import styles from './detailZone.module.css';
import { useDetailZoneStore } from '@/app/(defaultLayout)/simulator/_stores/useDetailZoneStore';
import RefiningHistory from '@/app/(defaultLayout)/simulator/_components/DetailZone/RefiningHistory';
import ConsumedMaterials from '@/app/(defaultLayout)/simulator/_components/DetailZone/ConsumedMaterials';

export default function DetailZone() {
  const [isOpen, close] = useDetailZoneStore((store) => [
    store.isOpen,
    store.close,
  ]);

  const onClickClose = () => close();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.closeBtn} onClick={onClickClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={'3.2rem'}
            height={'3.2rem'}
            viewBox={'0 0 24 24'}
            fill="none"
          >
            <path
              stroke="#222"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 6 6 18M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.contentZone}>
          <div>소모 재화</div>
          <ConsumedMaterials />
        </div>
        <div className={styles.contentZone}>
          <div>상급 재련 히스토리</div>
          <RefiningHistory />
        </div>
      </div>
    </div>
  );
}
