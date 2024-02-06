export type AncestorProtection = 'Galatur' | 'Galar' | 'Kuhumbar' | 'Temer'; // 겔라르와 테메르는 공식 번역 필요
export type AncestorProtectionPercent = {
  [key in AncestorProtection]: number;
};

const defaultPercent: AncestorProtectionPercent = {
  Galatur: 15,
  Galar: 35,
  Kuhumbar: 15,
  Temer: 35,
};

export const getAncestorProtection = (
  percent: AncestorProtectionPercent = defaultPercent,
): AncestorProtection => {
  const random = Math.floor(Math.random() * 100);

  let pivot = 0;

  for (const [key, probability] of Object.entries(percent)) {
    pivot += probability;

    if (random <= pivot) {
      return key as AncestorProtection;
    }
  }

  // default
  return 'Galar';
};
