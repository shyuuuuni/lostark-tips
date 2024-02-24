'use client';

import styles from './expBar.module.css';
import { useEffect } from 'react';
import clsx from 'clsx';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';

export default function ExpBar() {
  const [exp, levelUp, isMaxLevel] = useAdvancedRefiningSimulatorStore(
    (store) => [store.exp, store.levelUp, store.isMaxLevel],
  );
  const progress = exp <= 100 ? exp : 100;

  useEffect(() => {
    if (isMaxLevel()) {
      return;
    }
    if (100 <= exp) {
      setTimeout(() => {
        levelUp();
      }, 800);
    }
  }, [isMaxLevel, exp, levelUp]);

  return (
    <div className={styles.container}>
      {isMaxLevel() ? (
        <>
          <div className={styles.expBarZone}>
            <div
              className={clsx(styles.expBar, styles.fillMax)}
              style={{
                width: `100%`,
              }}
            >
              {[...Array(9)].map((_, index) => (
                <div
                  key={10 + index * 10}
                  className={styles.tick}
                  style={{
                    left: `${10 + index * 10}%`,
                  }}
                />
              ))}
            </div>
          </div>
          <p>상급 재련 완료</p>
        </>
      ) : (
        <div className={styles.expBarZone}>
          <div
            className={clsx(styles.expBar, progress === 100 && styles.fillMax)}
            style={{
              width: `${progress}%`,
            }}
          >
            {[...Array(9)].map((_, index) => (
              <div
                key={10 + index * 10}
                className={styles.tick}
                style={{
                  left: `${10 + index * 10}%`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
