'use client';

import styles from './percentZone.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';

import { getPercent } from '@/app/simulator/_lib/refiningPercent';

export default function PercentZone() {
  const usingAuxiliary = useSimulatorStore((store) => store.usingAuxiliary);
  const { 성공, 대성공, 대성공x2 } = getPercent(usingAuxiliary);

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
