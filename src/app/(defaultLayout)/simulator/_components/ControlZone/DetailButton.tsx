'use client';

import styles from '@/app/(defaultLayout)/simulator/_components/ControlZone/detailButton.module.css';

export default function DetailButton() {
  const onClick = () => {};

  return (
    <button className={styles.detailBtn} onClick={onClick}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={11} cy={11} r={6} stroke="#222" />
        <path
          d="M11 8a3 3 0 00-3 3M20 20l-3-3"
          stroke="#222"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
