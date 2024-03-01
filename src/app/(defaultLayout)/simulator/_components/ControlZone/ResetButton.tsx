'use client';

import styles from './resetButton.module.css';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { useDetailZoneStore } from '@/app/(defaultLayout)/simulator/_stores/useDetailZoneStore';

export default function ResetButton() {
  const reset = useAdvancedRefiningSimulatorStore((store) => store.reset);
  const closeDetailZone = useDetailZoneStore((store) => store.close);
  const onClick = () => {
    reset();
    closeDetailZone();
  };

  return (
    <button className={styles.resetBtn} onClick={onClick}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 15l-4 4 4 4" stroke="#222" />
        <path
          d="M18.062 8.5a7 7 0 01-6.937 10.445"
          stroke="#222"
          strokeLinecap="round"
        />
        <path d="M10 9l4-4-4-4" stroke="#222" />
        <path
          d="M5.938 15.5a7 7 0 017.157-10.414"
          stroke="#222"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
