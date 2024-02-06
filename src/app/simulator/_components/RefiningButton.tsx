'use client';

import styles from './refiningButton.module.css';

import { MouseEventHandler, useEffect } from 'react';
import { useThrottle } from '@/app/_hooks/useThrottle';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';

export default function RefiningButton() {
  const refine = useSimulatorStore((store) => store.refine);
  const a = useSimulatorStore((store) => store.ancestorProtectionCount);

  const onClick: MouseEventHandler<HTMLDivElement> = useThrottle(() => {
    refine();
  }, 500 + 50);

  return (
    <div>
      <div className={styles.container} onClick={onClick}>
        상급 재련
      </div>
    </div>
  );
}
