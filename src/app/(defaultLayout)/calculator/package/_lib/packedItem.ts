import { PackedItem, AtomItem } from '@/app/_type/package';

export const 최상급_돌파석_선택_상자 = new PackedItem.Builder(
  '최상급 돌파석 선택 상자',
)
  .setPackedType('선택')
  .addContent(new AtomItem('경이로운 명예의 돌파석', 100))
  .addContent(new AtomItem('찬란한 명예의 돌파석', 20))
  .build();

export const 최상급_융화_재료_선택_상자 = new PackedItem.Builder(
  '최상급 융화 재료 선택 상자',
)
  .setPackedType('선택')
  .addContent(new AtomItem('상급 오레하 융화 재료', 100))
  .addContent(new AtomItem('최상급 오레하 융화 재료', 50))
  .build();

export const 명예의_파편_주머니_대 = new PackedItem.Builder(
  '명예의 파편 주머니 (대)',
)
  .addContent(new AtomItem('명예의 파편', 1500))
  .build();

export const 고대의_백금화 = new PackedItem.Builder('고대의 백금화')
  .addContent(new AtomItem('실링', 20000))
  .build();
