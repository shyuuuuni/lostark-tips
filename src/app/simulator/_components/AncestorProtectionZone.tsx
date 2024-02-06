'use client';

import styles from './ancestorProtectionZone.module.css';

import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';

export default function AncestorProtectionZone() {
  const [ancestorProtectionCount, isFree] = useSimulatorStore((store) => [
    store.ancestorProtectionCount,
    store.isFree,
  ]);

  return (
    <div className={styles.container}>
      <div
        className={styles.label}
        data-tooltip-id="ancestor-protection-information"
      >
        선조의 가호
      </div>
      <Tooltip id="ancestor-protection-information" place={'bottom'}>
        <div className={styles.tooltip}>
          <h3>선조의 가호</h3>
          <p>
            선조의 가호는 상급 재련을 6회 시도할 때 마다 사용할 수 있습니다.
          </p>
          <div>갈라투르의 망치(15%): 상급 재련 경험치 5배 증가</div>
          <div>겔라르의 칼(35%): 상급 재련 경험치 3배 증가</div>
          <div>
            쿠훔바르의 모루(15%): 상급 재련 경험치 30 추가 증가 및 선조의 가호
            재충전
          </div>
          <div>
            테메르의 정(35%): 상급 재련 경험치 10 추가 증가 및 다음 상급 재련 시
            무료
          </div>
        </div>
      </Tooltip>
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
