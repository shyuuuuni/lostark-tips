import { AuxiliaryMaterial, Cost, Material } from '@/app/_type/material';
import { EquipmentType } from '@/app/_type/equipment';

// 상급 재련 결과 종류
export type AdvancedRefiningTrialType = '성공' | '대성공' | '대성공x2' | '실패';

// 상급 재련 단계
export const advancedRefiningLevel = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const;
export type AdvancedRefiningLevel = (typeof advancedRefiningLevel)[number];

export type AdvancedRefiningMaterial = Exclude<
  Material,
  '경이로운 명예의 돌파석' | '상급 오레하 융화 재료'
>;
export type AdvancedRefiningCost = Exclude<Cost, '크리스탈'>;

// 상급 재련 재료/비용 소모량
export type AdvancedRefiningRequirements = {
  [key in AdvancedRefiningMaterial | AdvancedRefiningCost]: number;
};

// 상급 재련 추가 재료 소모량
export type AdvancedRefiningAuxiliaryRequirements = {
  [key in AuxiliaryMaterial]: number; // 각 속성은 숫자형 값을 가짐
};

// 선조의 가호
export type AncestorProtectionCount = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type AncestorProtection =
  | '갈라투르의 망치'
  | '겔라르의 칼'
  | '쿠훔바르의 모루'
  | '테메르의 정';

// 상급 재련 히스토리 - 재련 추가 재료 사용 여부
export type UsingAuxiliary = {
  [key in AuxiliaryMaterial]: boolean;
};

// 상급 재련 히스토리
export type AdvancedRefiningSimulationHistory = {
  id: string;
  date: Date;
  targetLevel: AdvancedRefiningLevel;
  expFrom: number;
  nextTargetLevel: AdvancedRefiningLevel;
  expTo: number;
  equipmentType: EquipmentType;
  ancestorProtection: AncestorProtection | null;
  refiningType: AdvancedRefiningTrialType;
  usingAuxiliary: UsingAuxiliary;
  isFree: boolean;
};
