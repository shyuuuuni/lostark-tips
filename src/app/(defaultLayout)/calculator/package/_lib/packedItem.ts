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

/**
 * 아래는 단일 AtomItem 을 포함하는 PackedItem
 */
export const 태양의_은총 = new PackedItem.Builder('태양의 은총')
  .addContent(new AtomItem('태양의 은총', 1))
  .build();

export const 태양의_축복 = new PackedItem.Builder('태양의 축복')
  .addContent(new AtomItem('태양의 축복', 1))
  .build();

export const 태양의_가호 = new PackedItem.Builder('태양의 가호')
  .addContent(new AtomItem('태양의 가호', 1))
  .build();

export const 최상급_오레하_융화_재료 = new PackedItem.Builder(
  '최상급 오레하 융화 재료',
)
  .addContent(new AtomItem('최상급 오레하 융화 재료', 1))
  .build();

export const 최상급_수호_선택_주머니 = new PackedItem.Builder(
  '최상급 수호 선택 주머니',
)
  .setPackedType('선택')
  .addContent(new AtomItem('정제된 수호강석', 100))
  .build(); // TODO: 수호강석 추가

export const 최상급_파괴_선택_주머니 = new PackedItem.Builder(
  '최상급 파괴 선택 주머니',
)
  .setPackedType('선택')
  .addContent(new AtomItem('정제된 파괴강석', 100))
  .build(); // TODO: 파괴강석 추가

export const 보조_재료_상자 = new PackedItem.Builder('보조 재료 상자')
  .addContent(new AtomItem('태양의 은총', 130))
  .addContent(new AtomItem('태양의 축복', 40))
  .addContent(new AtomItem('태양의 가호', 15))
  .build();
