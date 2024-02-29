import { AuxiliaryMaterial, Cost, Material } from '@/type/material';

export const itemIds: { [key in Material | AuxiliaryMaterial | Cost]: string } =
  {
    '정제된 파괴강석': '66102005',
    '정제된 수호강석': '66102105',
    '찬란한 명예의 돌파석': '66110224',
    '최상급 오레하 융화재료': '6861011',
    '태양의 은총': '66111121',
    '태양의 축복': '66111122',
    '태양의 가호': '66111123',
    '명예의 파편': '66130133', // 명예의 파편 주머니 (대)
    ['실링']: '201110', // 거래소 X
    ['골드']: '201109', // 거래소 X
  };
