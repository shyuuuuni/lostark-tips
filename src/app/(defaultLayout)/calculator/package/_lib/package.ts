import { Package } from '@/app/_type/package';
import {
  최상급_오레하_융화_재료,
  태양의_가호,
  태양의_은총,
  태양의_축복,
  고대의_백금화,
  명예의_파편_주머니_대,
  최상급_돌파석_선택_상자,
  최상급_융화_재료_선택_상자,
  최상급_수호_선택_주머니,
  최상급_파괴_선택_주머니,
  보조_재료_상자,
} from '@/app/(defaultLayout)/calculator/package/_lib/packedItem';
import shopIconPcImg from '@assets/shop-icons/shop_icon_pcroom.webp';
import shopIconGrowthImg from '@assets/shop-icons/shop_icon_growth.webp';

const PC방_전용_돌파_파편_패키지_230913 = new Package.Builder(
  '1',
  '[PC방 전용] 돌파&파편 패키지',
  33000,
  '로얄 크리스탈',
)
  .setImage(shopIconPcImg)
  .setSaleDate({ startDate: '2023-09-13', endDate: null })
  .setRepurchaseCycle('월간')
  .setPurchaseLimit(3)
  .addPackageItem(최상급_돌파석_선택_상자, 30)
  .addPackageItem(최상급_융화_재료_선택_상자, 5)
  .addPackageItem(명예의_파편_주머니_대, 200)
  .build();

const 주간_성장_재료_패키지_240228 = new Package.Builder(
  '2',
  '[주간] 성장 재료 패키지',
  22000,
  '로얄 크리스탈',
)
  .setImage(shopIconGrowthImg)
  .setSaleDate({ startDate: '2024-02-28', endDate: null })
  .setRepurchaseCycle('주간')
  .setPurchaseLimit(2)
  .addPackageItem(최상급_돌파석_선택_상자, 15)
  .addPackageItem(최상급_융화_재료_선택_상자, 10)
  .addPackageItem(명예의_파편_주머니_대, 60)
  .addPackageItem(고대의_백금화, 60)
  .build();

const 상급_보조_융화_패키지_240131 = new Package.Builder(
  '3',
  '[3+1] 상급 보조&융화 패키지',
  55000,
  '로얄 크리스탈',
)
  .setImage(shopIconGrowthImg)
  .setSaleDate({ startDate: '2024-01-31', endDate: '2024-02-28' })
  .setPurchaseLimit(3)
  .setBonus(3)
  .addPackageItem(태양의_은총, 800)
  .addPackageItem(태양의_축복, 400)
  .addPackageItem(태양의_가호, 150)
  .addPackageItem(최상급_오레하_융화_재료, 200)
  .addPackageItem(고대의_백금화, 100)
  .build();

const 월간_올인원_최상급_성장_패키지_230412 = new Package.Builder(
  '4',
  '[월간] 올인원 최상급 성장 패키지',
  55000,
  '로얄 크리스탈',
)
  .setSaleDate({ startDate: '2023-04-12', endDate: null })
  .setPurchaseLimit(3)
  .setRepurchaseCycle('월간')
  .addPackageItem(최상급_수호_선택_주머니, 30)
  .addPackageItem(최상급_파괴_선택_주머니, 20)
  .addPackageItem(최상급_돌파석_선택_상자, 8)
  .addPackageItem(최상급_융화_재료_선택_상자, 5)
  .addPackageItem(명예의_파편_주머니_대, 70)
  .addPackageItem(고대의_백금화, 150)
  .addPackageItem(보조_재료_상자, 1)
  .build();

export const packages: Package[] = [
  PC방_전용_돌파_파편_패키지_230913,
  주간_성장_재료_패키지_240228,
  상급_보조_융화_패키지_240131,
  월간_올인원_최상급_성장_패키지_230412,
];
