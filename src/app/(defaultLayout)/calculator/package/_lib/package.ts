import { Package } from '@/app/_type/package';
import {
  고대의_백금화,
  명예의_파편_주머니_대,
  최상급_돌파석_선택_상자,
  최상급_융화_재료_선택_상자,
} from '@/app/(defaultLayout)/calculator/package/_lib/packedItem';

const PC방_전용_돌파_파편_패키지_230913 = new Package.Builder(
  '[PC방 전용] 돌파&파편 패키지',
  33000,
  '로얄 크리스탈',
)
  .setSaleDate({ startDate: '2023-09-13', endDate: null })
  .setRepurchaseCycle('월간')
  .setPurchaseLimit(3)
  .addPackageItem(최상급_돌파석_선택_상자, 30)
  .addPackageItem(최상급_융화_재료_선택_상자, 5)
  .addPackageItem(명예의_파편_주머니_대, 200)
  .build();

const 주간_성장_재료_패키지_240228 = new Package.Builder(
  '[주간] 성장 재료 패키지',
  22000,
  '로얄 크리스탈',
)
  .setSaleDate({ startDate: '2024-02-28', endDate: null })
  .setRepurchaseCycle('주간')
  .setPurchaseLimit(2)
  .addPackageItem(최상급_돌파석_선택_상자, 15)
  .addPackageItem(최상급_융화_재료_선택_상자, 10)
  .addPackageItem(명예의_파편_주머니_대, 60)
  .addPackageItem(고대의_백금화, 60)
  .build();

export const packages: Package[] = [
  PC방_전용_돌파_파편_패키지_230913,
  주간_성장_재료_패키지_240228,
];