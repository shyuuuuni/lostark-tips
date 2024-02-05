'use client';

import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import { MouseEventHandler } from 'react';
import { useThrottle } from '@/app/_hooks/useThrottle';

export default function AuxiliaryButton() {
  const isMaxLevel = useSimulatorStore((store) => store.isMaxLevel);
  const [exp, setExp] = useSimulatorStore((store) => [store.exp, store.setExp]);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('click');
    if (isMaxLevel()) {
      return;
    }
    setExp(exp + 30);
  };

  const throttledOnClick = useThrottle(onClick, 500 + 50);

  return (
    <>
      <button onClick={throttledOnClick}>상급 재련</button>
      <button onClick={() => setExp(exp + 1000)}>상급 재련</button>
    </>
  );
}
