'use client';

import styles from './ancestorProtectionZone.module.css';

import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import clsx from 'clsx';

export default function AncestorProtectionZone() {
  const [ancestorProtectionCount, isFree] = useSimulatorStore((store) => [
    store.ancestorProtectionCount,
    store.isFree,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.label}>선조의 가호</div>
      <div className={styles.ancestorProtectionList}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i + 1}
            className={clsx(
              styles.ancestorProtectionItem,
              i + 1 <= ancestorProtectionCount && styles.selected,
              ancestorProtectionCount === 6 && styles.full,
            )}
          />
        ))}
      </div>
      {isFree && (
        <div className={styles.isFree}>
          테메르의 정 효과가 적용중입니다. (다음 상급 재련 시 재료 및 비용 무료)
        </div>
      )}
    </div>
  );
}
