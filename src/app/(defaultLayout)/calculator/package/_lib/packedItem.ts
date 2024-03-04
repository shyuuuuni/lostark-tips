import { PackedItem, SalableAtomItem } from '@/app/_type/package';

export const 최상급_돌파석_선택_상자 = new PackedItem.Builder(
  '최상급 돌파석 선택 상자',
)
  .setPackedType('선택')
  .addContent(new SalableAtomItem('경이로운 명예의 돌파석', 100))
  .addContent(new SalableAtomItem('찬란한 명예의 돌파석', 20))
  .build();

export const 최상급_융화_재료_선택_상자 = new PackedItem.Builder(
  '최상급 융화 재료 선택 상자',
)
  .setPackedType('선택')
  .addContent(new SalableAtomItem('상급 오레하 융화 재료', 100))
  .addContent(new SalableAtomItem('최상급 오레하 융화 재료', 50))
  .build();

export const 명예의_파편_주머니_대 = new PackedItem.Builder(
  '명예의 파편 주머니 (대)',
)
  .addContent(new SalableAtomItem('명예의 파편', 1500))
  .build();
