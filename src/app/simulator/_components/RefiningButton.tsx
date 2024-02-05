'use client';

import styles from './refiningButton.module.css';

import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import { MouseEventHandler } from 'react';
import { useThrottle } from '@/app/_hooks/useThrottle';

export default function RefiningButton() {
  const isMaxLevel = useSimulatorStore((store) => store.isMaxLevel);
  const [exp, setExp] = useSimulatorStore((store) => [store.exp, store.setExp]);

  const onClick: MouseEventHandler<HTMLDivElement> = useThrottle(() => {
    if (isMaxLevel()) {
      return;
    }
    setExp(exp + 30);
  }, 500 + 50);

  return (
    <div className={styles.container} onClick={onClick}>
      상급 재련
    </div>
  );
}
