'use client';

import styles from './refiningButton.module.css';
import { MouseEventHandler } from 'react';
import { useThrottle } from '@/app/_hooks/useThrottle';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';

export default function RefiningButton() {
  const [refine] = useAdvancedRefiningSimulatorStore((store) => [store.refine]);

  const onClickRefine: MouseEventHandler<HTMLButtonElement> = useThrottle(
    () => {
      refine();
    },
    500 + 50,
  );

  return (
    <button className={styles.refineBtn} onClick={onClickRefine}>
      상급 재련
    </button>
  );
}
