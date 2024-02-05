import { BaseLevel, ItemType } from '@/app/simulator/_stores/useSimulatorStore';

export type Material =
  | '찬란한 명예의 돌파석'
  | '정제된 파괴강석'
  | '정제된 수호강석'
  | '최상급 오레하 융화재료'; // 필요 재료
export type Cost = '골드' | '실링' | '명예의 파편'; // 재련 비용

export type RefiningMaterials = {
  [key in Material | Cost]: number; // 각 속성은 숫자형 값을 가짐
};
export type RefiningMaterialTable = {
  [key: string]: RefiningMaterials;
};

const refiningMaterialTable: RefiningMaterialTable = {
  ['weapon-0']: {
    ['정제된 파괴강석']: 1000,
    ['정제된 수호강석']: 0,
    ['찬란한 명예의 돌파석']: 28,
    ['최상급 오레하 융화재료']: 30,
    ['골드']: 1125,
    ['실링']: 31500,
    ['명예의 파편']: 9000,
  },
  ['weapon-10']: {
    ['정제된 파괴강석']: 1600,
    ['정제된 수호강석']: 0,
    ['찬란한 명예의 돌파석']: 36,
    ['최상급 오레하 융화재료']: 33,
    ['골드']: 2500,
    ['실링']: 50000,
    ['명예의 파편']: 17000,
  },
  ['armor-0']: {
    ['정제된 파괴강석']: 0,
    ['정제된 수호강석']: 950,
    ['찬란한 명예의 돌파석']: 22,
    ['최상급 오레하 융화재료']: 18,
    ['골드']: 950,
    ['실링']: 28500,
    ['명예의 파편']: 5500,
  },
  ['armor-10']: {
    ['정제된 파괴강석']: 0,
    ['정제된 수호강석']: 1300,
    ['찬란한 명예의 돌파석']: 28,
    ['최상급 오레하 융화재료']: 20,
    ['골드']: 1800,
    ['실링']: 40000,
    ['명예의 파편']: 11000,
  },
  ['free']: {
    ['정제된 파괴강석']: 0,
    ['정제된 수호강석']: 0,
    ['찬란한 명예의 돌파석']: 0,
    ['최상급 오레하 융화재료']: 0,
    ['골드']: 0,
    ['실링']: 0,
    ['명예의 파편']: 0,
  },
};

export type RefiningOptions = {
  nextFree: boolean;
};
export const getRefiningMaterials = (
  itemType: ItemType,
  baseLevel: BaseLevel,
  options?: RefiningOptions,
): RefiningMaterials => {
  if (options?.nextFree) {
    return refiningMaterialTable['free'];
  }
  if (baseLevel < 10) {
    return refiningMaterialTable[`${itemType}-0`];
  }
  if (baseLevel <= 20) {
    return refiningMaterialTable[`${itemType}-10`];
  }

  return refiningMaterialTable['free'];
};

export type AuxiliaryMaterial = '태양의 은총' | '태양의 축복' | '태양의 가호';
export type AuxiliaryMaterials = {
  [key in AuxiliaryMaterial]: number; // 각 속성은 숫자형 값을 가짐
};

const auxiliaryMaterialTable: AuxiliaryMaterials = {
  ['태양의 은총']: 24,
  ['태양의 축복']: 12,
  ['태양의 가호']: 4,
};

export const getAuxiliaryMaterial = () => {
  return auxiliaryMaterialTable;
};
