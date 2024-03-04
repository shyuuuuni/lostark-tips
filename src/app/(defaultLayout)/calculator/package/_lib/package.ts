import { Package, PackedItem, SalableAtomItem } from '@/app/_type/package';
import {
  명예의_파편_주머니_대,
  최상급_돌파석_선택_상자,
  최상급_융화_재료_선택_상자,
} from '@/app/(defaultLayout)/calculator/package/_lib/packedItem';

export const PC방_전용_돌파_파편_패키지 = new Package.Builder(
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

export const packages: Package[] = [PC방_전용_돌파_파편_패키지];
