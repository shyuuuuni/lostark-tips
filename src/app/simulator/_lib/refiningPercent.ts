import { UsingAuxiliary } from '@/app/simulator/_stores/useSimulatorStore';

export type RefiningType = '성공' | '대성공' | '대성공x2' | '실패';

export type RefiningPercent = {
  [key in RefiningType]: number;
};
export const basePercent: RefiningPercent = {
  성공: 80,
  대성공: 15,
  대성공x2: 5,
  실패: 0,
};
export const getPercent = (auxiliary: UsingAuxiliary): RefiningPercent => {
  const percent = { ...basePercent };

  Object.values(auxiliary).forEach((isUsed) => {
    if (isUsed) {
      percent.성공 -= 10;
      percent.대성공 += 5;
      percent.대성공x2 += 5;
    }
  });

  return percent;
};

type ExpIncrement = {
  [key in RefiningType]: number;
};

export const expIncrement: ExpIncrement = {
  성공: 1,
  대성공: 2,
  대성공x2: 4,
  실패: 0,
};

export const getExpIncrement = (
  baseExp: number = 10,
  percent: RefiningPercent,
): [type: RefiningType, expIncrement: number] => {
  const random = Math.floor(Math.random() * 100);

  let pivot = 0;

  for (const [key, probability] of Object.entries(percent)) {
    pivot += probability;

    if (random <= pivot) {
      return [key as RefiningType, baseExp * expIncrement[key as RefiningType]];
    }
  }

  // default
  return ['실패', 0];
};
