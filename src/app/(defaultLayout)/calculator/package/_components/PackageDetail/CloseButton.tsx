'use client';

import styles from './closeButton.module.css';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const navigator = useRouter();

  const onClick = () => {
    navigator.push('/calculator/package');
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={'3.2rem'}
        height={'3.2rem'}
        viewBox={'0 0 24 24'}
        fill="none"
      >
        <path
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 6 6 18M6 6l12 12"
        />
      </svg>
    </div>
  );
}
