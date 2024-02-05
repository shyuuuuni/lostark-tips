'use client';

import styles from './percentZone.module.css';
import {
  useSimulatorStore,
  UsingAuxiliary,
} from '@/app/simulator/_stores/useSimulatorStore';

type RefiningPercent = {
  success: number;
  greatSuccess: number;
  doubleGreatSuccess: number;
};

const basePercent: RefiningPercent = {
  success: 80,
  greatSuccess: 15,
  doubleGreatSuccess: 5,
};

const getPercent = (auxiliary: UsingAuxiliary): RefiningPercent => {
  const percent = { ...basePercent };

  Object.values(auxiliary).forEach((isUsed) => {
    if (isUsed) {
      percent.success -= 10;
      percent.greatSuccess += 5;
      percent.doubleGreatSuccess += 5;
    }
  });

  return percent;
};

export default function PercentZone() {
  const usingAuxiliary = useSimulatorStore((store) => store.usingAuxiliary);
  const { success, greatSuccess, doubleGreatSuccess } =
    getPercent(usingAuxiliary);

  return (
    <div className={styles.container}>
      <div className={styles.percent}>
        <div>성공</div>
        <div>{success}%</div>
      </div>
      <div className={styles.percent}>
        <div>대성공</div>
        <div>{greatSuccess}%</div>
      </div>
      <div className={styles.percent}>
        <div>대성공x2</div>
        <div>{doubleGreatSuccess}%</div>
      </div>
    </div>
  );
}
