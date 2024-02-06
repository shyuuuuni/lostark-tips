'use client';

import styles from './expBar.module.css';
import { useEffect } from 'react';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import clsx from 'clsx';

export default function ExpBar() {
  const [baseLevelUp, isMaxLevel] = useSimulatorStore((store) => [
    store.baseLevelUp,
    store.isMaxLevel,
  ]);
  const [exp, setExp] = useSimulatorStore((store) => [store.exp, store.setExp]);
  const progress = exp <= 100 ? exp : 100;

  useEffect(() => {
    if (isMaxLevel()) {
      return;
    }
    if (100 <= exp) {
      setTimeout(() => {
        setExp(exp - 100);
        baseLevelUp();
      }, 800);
    }
  }, [isMaxLevel, exp, setExp, baseLevelUp]);

  return (
    <div className={styles.container}>
      {isMaxLevel() ? (
        <>
          <div className={styles.expBarZone}>
            <div
              className={clsx(styles.fillMax)}
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
