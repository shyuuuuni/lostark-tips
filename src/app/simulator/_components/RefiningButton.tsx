'use client';

import styles from './refiningButton.module.css';

import { MouseEventHandler } from 'react';
import { useThrottle } from '@/app/_hooks/useThrottle';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';

export default function RefiningButton() {
  const [refine, reset] = useSimulatorStore((store) => [
    store.refine,
    store.reset,
  ]);

  const onClickRefine: MouseEventHandler<HTMLDivElement> = useThrottle(() => {
    refine();
  }, 500 + 50);

  const onClickReset = () => {
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.refine} onClick={onClickRefine}>
        상급 재련
      </div>
      <div className={styles.reset} onClick={onClickReset}>
        다시하기
      </div>
    </div>
  );
}
