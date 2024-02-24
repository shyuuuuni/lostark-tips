'use client';

import styles from './percentZone.module.css';
import { getAdvancedRefiningPercent } from '@/app/(defaultLayout)/simulator/_lib/refiningPercent';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';

export default function PercentZone() {
  const usingAuxiliary = useAdvancedRefiningSimulatorStore(
    (store) => store.usingAuxiliary,
  );
  const { 성공, 대성공, 대성공x2 } = getAdvancedRefiningPercent(usingAuxiliary);

  return (
    <div className={styles.container}>
      <div className={styles.percent}>
        <div>성공</div>
        <div>{성공}%</div>
      </div>
      <div className={styles.percent}>
        <div>대성공</div>
        <div>{대성공}%</div>
      </div>
      <div className={styles.percent}>
        <div>대성공x2</div>
        <div>{대성공x2}%</div>
      </div>
    </div>
  );
}
