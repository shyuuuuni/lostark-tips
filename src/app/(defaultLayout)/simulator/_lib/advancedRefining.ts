import { EquipmentType, StatType } from '@/app/_type/equipment';
import { AdvancedRefiningLevel } from '@/app/_type/advancedRefining';

type StatIncrement = [StatType, number];
type StatIncrements = {
  [key in AdvancedRefiningLevel]: StatIncrement[];
};

const weaponStatIncrement: StatIncrements = {
  1: [['무기 공격력', 409]],
  2: [['무기 공격력', 412]],
  3: [['무기 공격력', 415]],
  4: [['무기 공격력', 417]],
  5: [['무기 공격력', 419]],
  6: [['무기 공격력', 422]],
  7: [['무기 공격력', 425]],
  8: [['무기 공격력', 429]],
  9: [['무기 공격력', 432]],
  10: [['무기 공격력', 433]],
  11: [['무기 공격력', 433]],
  12: [['무기 공격력', 436]],
  13: [['무기 공격력', 440]],
  14: [['무기 공격력', 443]],
  15: [['무기 공격력', 446]],
  16: [['무기 공격력', 448]],
  17: [['무기 공격력', 451]],
  18: [['무기 공격력', 454]],
  19: [['무기 공격력', 458]],
  20: [['무기 공격력', 461]],
};
const hatStatIncrement: StatIncrements = {
  1: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 234],
    ['체력', 20],
  ],
  2: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 236],
    ['체력', 20],
  ],
  3: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 238],
    ['체력', 20],
  ],
  4: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 240],
    ['체력', 20],
  ],
  5: [
    ['물리 방어력', 19],
    ['마법 방어력', 20],
    ['힘', 241],
    ['체력', 20],
  ],
  6: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 242],
    ['체력', 20],
  ],
  7: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 244],
    ['체력', 20],
  ],
  8: [
    ['물리 방어력', 18],
    ['마법 방어력', 20],
    ['힘', 246],
    ['체력', 20],
  ],
  9: [
    ['물리 방어력', 18],
    ['마법 방어력', 21],
    ['힘', 247],
    ['체력', 21],
  ],
  10: [
    ['물리 방어력', 19],
    ['마법 방어력', 21],
    ['힘', 249],
    ['체력', 21],
  ],
  11: [
    ['물리 방어력', 19],
    ['마법 방어력', 20],
    ['힘', 250],
    ['체력', 20],
  ],
  12: [
    ['물리 방어력', 19],
    ['마법 방어력', 21],
    ['힘', 252],
    ['체력', 21],
  ],
  13: [
    ['물리 방어력', 19],
    ['마법 방어력', 21],
    ['힘', 254],
    ['체력', 21],
  ],
  14: [
    ['물리 방어력', 19],
    ['마법 방어력', 21],
    ['힘', 256],
    ['체력', 21],
  ],
  15: [
    ['물리 방어력', 18],
    ['마법 방어력', 21],
    ['힘', 258],
    ['체력', 21],
  ],
  16: [
    ['물리 방어력', 19],
    ['마법 방어력', 21],
    ['힘', 258],
    ['체력', 21],
  ],
  17: [
    ['물리 방어력', 18],
    ['마법 방어력', 21],
    ['힘', 260],
    ['체력', 21],
  ],
  18: [
    ['물리 방어력', 20],
    ['마법 방어력', 21],
    ['힘', 262],
    ['체력', 21],
  ],
  19: [
    ['물리 방어력', 19],
    ['마법 방어력', 21],
    ['힘', 264],
    ['체력', 21],
  ],
  20: [
    ['물리 방어력', 19],
    ['마법 방어력', 22],
    ['힘', 268],
    ['체력', 22],
  ],
};
const pauldronsStatIncrement: StatIncrements = {
  1: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 249],
    ['체력', 17],
  ],
  2: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 253],
    ['체력', 17],
  ],
  3: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 253],
    ['체력', 17],
  ],
  4: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 255],
    ['체력', 17],
  ],
  5: [
    ['물리 방어력', 20],
    ['마법 방어력', 19],
    ['힘', 257],
    ['체력', 17],
  ],
  6: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 258],
    ['체력', 17],
  ],
  7: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 260],
    ['체력', 17],
  ],
  8: [
    ['물리 방어력', 20],
    ['마법 방어력', 18],
    ['힘', 262],
    ['체력', 17],
  ],
  9: [
    ['물리 방어력', 21],
    ['마법 방어력', 18],
    ['힘', 264],
    ['체력', 18],
  ],
  10: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 264],
    ['체력', 18],
  ],
  11: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 266],
    ['체력', 18],
  ],
  12: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 268],
    ['체력', 18],
  ],
  13: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 268],
    ['체력', 18],
  ],
  14: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 272],
    ['체력', 18],
  ],
  15: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 275],
    ['체력', 18],
  ],
  16: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 275],
    ['체력', 18],
  ],
  17: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 277],
    ['체력', 18],
  ],
  18: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 279],
    ['체력', 18],
  ],
  19: [
    ['물리 방어력', 21],
    ['마법 방어력', 19],
    ['힘', 281],
    ['체력', 18],
  ],
  20: [
    ['물리 방어력', 22],
    ['마법 방어력', 19],
    ['힘', 284],
    ['체력', 18],
  ],
};
const topStatIncrement: StatIncrements = {
  1: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 187],
    ['체력', 26],
  ],
  2: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 189],
    ['체력', 26],
  ],
  3: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 190],
    ['체력', 27],
  ],
  4: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 192],
    ['체력', 27],
  ],
  5: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 193],
    ['체력', 27],
  ],
  6: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 194],
    ['체력', 27],
  ],
  7: [
    ['물리 방어력', 24],
    ['마법 방어력', 22],
    ['힘', 195],
    ['체력', 27],
  ],
  8: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 197],
    ['체력', 27],
  ],
  9: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 198],
    ['체력', 27],
  ],
  10: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 200],
    ['체력', 28],
  ],
  11: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 200],
    ['체력', 27],
  ],
  12: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 202],
    ['체력', 28],
  ],
  13: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 203],
    ['체력', 28],
  ],
  14: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 205],
    ['체력', 28],
  ],
  15: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 206],
    ['체력', 28],
  ],
  16: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 208],
    ['체력', 28],
  ],
  17: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 208],
    ['체력', 28],
  ],
  18: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 210],
    ['체력', 28],
  ],
  19: [
    ['물리 방어력', 25],
    ['마법 방어력', 23],
    ['힘', 212],
    ['체력', 28],
  ],
  20: [
    ['물리 방어력', 26],
    ['마법 방어력', 24],
    ['힘', 213],
    ['체력', 29],
  ],
};
const pantsStatIncrement: StatIncrements = {
  1: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 202],
    ['체력', 22],
  ],
  2: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 204],
    ['체력', 23],
  ],
  3: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 205],
    ['체력', 24],
  ],
  4: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 207],
    ['체력', 23],
  ],
  5: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 209],
    ['체력', 23],
  ],
  6: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 209],
    ['체력', 23],
  ],
  7: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 211],
    ['체력', 23],
  ],
  8: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 212],
    ['체력', 23],
  ],
  9: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 214],
    ['체력', 24],
  ],
  10: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 216],
    ['체력', 24],
  ],
  11: [
    ['물리 방어력', 22],
    ['마법 방어력', 24],
    ['힘', 216],
    ['체력', 23],
  ],
  12: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 218],
    ['체력', 23],
  ],
  13: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 219],
    ['체력', 24],
  ],
  14: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 221],
    ['체력', 24],
  ],
  15: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 223],
    ['체력', 24],
  ],
  16: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 225],
    ['체력', 23],
  ],
  17: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 226],
    ['체력', 24],
  ],
  18: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 227],
    ['체력', 24],
  ],
  19: [
    ['물리 방어력', 23],
    ['마법 방어력', 25],
    ['힘', 230],
    ['체력', 24],
  ],
  20: [
    ['물리 방어력', 25],
    ['마법 방어력', 26],
    ['힘', 230],
    ['체력', 24],
  ],
};
const glovesStatIncrement: StatIncrements = {
  1: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 281],
    ['체력', 13],
  ],
  2: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 283],
    ['체력', 13],
  ],
  3: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 285],
    ['체력', 13],
  ],
  4: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 287],
    ['체력', 13],
  ],
  5: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 290],
    ['체력', 14],
  ],
  6: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 290],
    ['체력', 13],
  ],
  7: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 293],
    ['체력', 13],
  ],
  8: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 295],
    ['체력', 14],
  ],
  9: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 298],
    ['체력', 14],
  ],
  10: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 299],
    ['체력', 14],
  ],
  11: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 300],
    ['체력', 14],
  ],
  12: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 303],
    ['체력', 14],
  ],
  13: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 305],
    ['체력', 14],
  ],
  14: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 309],
    ['체력', 14],
  ],
  15: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 309],
    ['체력', 14],
  ],
  16: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 310],
    ['체력', 14],
  ],
  17: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 312],
    ['체력', 14],
  ],
  18: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 315],
    ['체력', 14],
  ],
  19: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 317],
    ['체력', 14],
  ],
  20: [
    ['물리 방어력', 16],
    ['마법 방어력', 16],
    ['힘', 320],
    ['체력', 14],
  ],
};

export const getAdvancedRefiningStatIncrement = (
  equipmentType: EquipmentType,
  targetLevel: AdvancedRefiningLevel,
) => {
  switch (equipmentType) {
    case '무기':
      return weaponStatIncrement[targetLevel];
    case '투구':
      return hatStatIncrement[targetLevel];
    case '견갑':
      return pauldronsStatIncrement[targetLevel];
    case '상의':
      return topStatIncrement[targetLevel];
    case '하의':
      return pantsStatIncrement[targetLevel];
    case '장갑':
      return glovesStatIncrement[targetLevel];
    default:
      return [];
  }
};
