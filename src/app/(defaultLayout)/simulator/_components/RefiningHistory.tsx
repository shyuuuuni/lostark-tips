'use client';

import styles from './refiningHistory.module.css';

import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';

export default function RefiningHistory() {
  const histories = useAdvancedRefiningSimulatorStore((store) => store.history);

  return (
    <div className={styles.container}>
      <div className={styles.title}>재련 히스토리</div>
      <div className={styles.list}>
        {histories.toReversed().map((history) => (
          <div className={styles.history} key={history.id}>
            <span>[{history.refiningType}]</span>
            {history.ancestorProtection && (
              <span>[{history.ancestorProtection}]</span>
            )}
            <span>
              {history.targetLevel}단계({history.expFrom}%) {'>'}{' '}
              {history.nextTargetLevel}단계({Math.floor(history.expTo)}%)
            </span>
          </div>
          // <div key={history.id}>{getHistoryComment(history)}</div>
        ))}
      </div>
    </div>
  );
}
