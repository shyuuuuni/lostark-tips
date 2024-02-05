'use client';

import styles from './expBar.module.css';
import { useEffect, useState } from 'react';
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
  }, [exp]); // 빈 배열을 전달하여 최초 렌더링시에만 실행

  return (
    <div className={styles.container}>
      {isMaxLevel() ? (
        <>
          <div
            className={clsx(styles.fillMax)}
            style={{
              width: `100%`,
            }}
          />
          <p>상급 재련 완료</p>
        </>
      ) : (
        <div
          className={clsx(styles.expBar, progress === 100 && styles.fillMax)}
          style={{
            width: `${progress}%`,
          }}
        />
      )}
    </div>
  );
}
