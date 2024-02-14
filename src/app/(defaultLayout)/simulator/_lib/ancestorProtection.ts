export type AncestorProtection =
  | '갈라투르의 망치'
  | '겔라르의 칼'
  | '쿠훔바르의 모루'
  | '테메르의 정';
export type AncestorProtectionPercent = {
  [key in AncestorProtection]: number;
};
export type AncestorProtectionInfo = {
  [key in AncestorProtection]: string;
};

export const ancestorProtectionInfo: AncestorProtectionInfo = {
  ['갈라투르의 망치']: '상급 재련 경험치 5배 증가',
  ['겔라르의 칼']: '상급 재련 경험치 3배 증가',
  ['쿠훔바르의 모루']: '상급 재련 경험치 30 추가 증가 및 선조의 가호 재충전',
  ['테메르의 정']: '상급 재련 경험치 10 추가 증가 및 다음 상급 재련 시 무료',
};

const defaultPercent: AncestorProtectionPercent = {
  ['갈라투르의 망치']: 15,
  ['겔라르의 칼']: 35,
  ['쿠훔바르의 모루']: 15,
  ['테메르의 정']: 35,
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
  return '겔라르의 칼';
};
