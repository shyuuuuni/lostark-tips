'use client';

import styles from './refiningHistory.module.css';

import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import dayjs from 'dayjs';
import { AdvancedRefiningSimulationHistory } from '@/type/advancedRefining';
import clsx from 'clsx';

const getIncrement = (history: AdvancedRefiningSimulationHistory) => {
  const { expFrom, expTo, targetLevel, nextTargetLevel } = history;

  if (targetLevel === nextTargetLevel) {
    return expTo - expFrom;
  }
  return (nextTargetLevel - targetLevel) * 100 + expTo - expFrom;
};

export default function RefiningHistory() {
  const [equipmentType, histories] = useAdvancedRefiningSimulatorStore(
    (store) => [store.equipmentType, store.history],
  );

  return (
    <div className={styles.container}>
      {histories.toReversed().map((history) => (
        <div className={styles.history} key={history.id}>
          <div className={styles.leftHistoryZone}>
            <div className={styles.leftTopHistoryZone}>
              <div
                className={clsx(
                  styles.refiningType,
                  history.refiningType !== '성공' && styles.greatSuccess,
                )}
              >
                {history.refiningType}
              </div>
              <div className={styles.expHistory}>
                <div>
                  상급 재련 {history.nextTargetLevel}단계 {history.expTo}%
                </div>
                <div>+{getIncrement(history)}EXP</div>
              </div>
            </div>
            <div className={styles.leftBottomHistoryZone}>
              <div>{dayjs(history.date).format('MM/DD hh:mm:ss')}</div>
              <div className={styles.divBar} />
              <div>{equipmentType}</div>
              {history.targetLevel < history.nextTargetLevel && (
                <>
                  <div className={styles.divBar} />
                  <div className={styles.levelUp}>LEVEL UP!</div>
                </>
              )}
            </div>
          </div>
          <div className={styles.rightHistoryZone}>
            {history.ancestorProtection && (
              <span className={styles.ancestorProtectionType}>
                {history.ancestorProtection}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
