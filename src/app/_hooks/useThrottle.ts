import { useRef } from 'react';

export const useThrottle = <Fn extends (...args: Parameters<Fn>) => any>(
  callback: Fn,
  time: number,
) => {
  const isThrottled = useRef(false);

  return (...args: Parameters<Fn>) => {
    if (isThrottled.current) {
      return;
    }

    const result = callback(...args);
    isThrottled.current = true;

    setTimeout(() => {
      isThrottled.current = false;
    }, time);

    return result;
  };
};
