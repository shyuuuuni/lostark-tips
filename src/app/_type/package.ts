import { SalableItem } from '@/app/_type/market';
import { Cost } from '@/app/_type/material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import shopIconImg from '@assets/shop-icons/shop_icon_default.webp';
import { StaticImageData } from 'next/image';

dayjs.extend(isBetween);

export class AtomItems extends Map<ItemType, number> {
  constructor() {
    super();
  }

  addItem(itemType: ItemType, count: number) {
    this.set(itemType, (this.get(itemType) ?? 0) + count);
    return this;
  }
  merge(other: AtomItems) {
    other.forEach((count, itemType) => {
      this.addItem(itemType, count);
    });
    return this;
  }
  multiply(n: number) {
    this.forEach((_, itemType) => {
      this.set(itemType, (this.get(itemType) ?? 0) * n);
    });
    return this;
  }
}

export type ItemType = SalableItem | Exclude<Cost, '골드'>;

export class AtomItem {
  count: number;
  itemType: ItemType;

  constructor(itemType: ItemType, count: number) {
    this.itemType = itemType;
    this.count = count;
  }
}

export type PackedType = '모두 받기' | '선택';
export type PackedContent = {
  content: PackedItem | AtomItem;
  percent: number;
};

export interface PackedItemOptions {
  name: string;
  contents: PackedContent[];
  packedType: PackedType;
}

export class PackedItem {
  name: string;
  contents: PackedContent[];
  packedType: PackedType;

  constructor({ name, contents, packedType }: PackedItemOptions) {
    this.name = name;
    this.contents = contents;
    this.packedType = packedType;
  }

  // itemType === '모두 받기'
  getAtomItems() {
    const atomItems = new AtomItems();
    this.contents.forEach(({ content, percent }) => {
      if (percent === 100 && content instanceof AtomItem) {
        atomItems.addItem(content.itemType, content.count);
        return;
      }
    });

    return atomItems;
  }

  // itemType === '선택'
  getSelectedAtomItems() {
    return Array.from({ length: this.contents.length }, (_, i) => {
      const atomItems = new AtomItems();
      const { content, percent } = this.contents[i];
      if (percent === 100 && content instanceof AtomItem) {
        atomItems.addItem(content.itemType, content.count);
      }
      return atomItems;
    });
  }

  static Builder = class {
    options: PackedItemOptions;

    constructor(name: string) {
      this.options = {
        name,
        contents: [],
        packedType: '모두 받기',
      };
    }
    build() {
      return new PackedItem(this.options);
    }
    addContent(content: PackedItem | AtomItem, percent: number = 100) {
      this.options.contents.push({ content, percent });
      return this;
    }
    setPackedType(packedType: PackedType) {
      this.options.packedType = packedType;
      return this;
    }
  };
}

export type PriceType = '로얄 크리스탈' | '크리스탈';
export type RepurchaseCycle = '주간' | '월간' | '무제한';
export type PackageItem = {
  packedItem: PackedItem;
  count: number;
  percent: number;
};
export type SaleDate = '제한 없음' | [string, null] | [string, string]; // null 인 경우 판매 종료일 추후 안내

export interface PackageOptions {
  id: string;
  name: string;
  purchaseLimit: number; // 0 or integer
  price: number; // 0 or integer - 현금 or 크리스탈
  priceType: PriceType;
  bonus: number; // 0 or integer
  repurchaseCycle: RepurchaseCycle;
  packageItems: PackageItem[];
  saleDate: SaleDate;
  image: StaticImageData;
}

export class Package {
  id: string;
  name: string;
  purchaseLimit: number; // 0 or integer
  price: number; // 0 or integer - 현금 or 크리스탈
  priceType: PriceType;
  bonus: number; // 0 or integer
  repurchaseCycle: RepurchaseCycle;
  packageItems: PackageItem[];
  saleDate: SaleDate;
  image: StaticImageData;

  constructor({
    id,
    name,
    purchaseLimit,
    price,
    priceType,
    bonus,
    repurchaseCycle,
    packageItems,
    saleDate,
    image,
  }: PackageOptions) {
    this.id = id;
    this.name = name;
    this.purchaseLimit = purchaseLimit;
    this.price = price;
    this.priceType = priceType;
    this.bonus = bonus;
    this.repurchaseCycle = repurchaseCycle;
    this.packageItems = packageItems;
    this.saleDate = saleDate;
    this.image = image;
  }

  getAllItems() {
    const atomItems = new AtomItems(),
      selectedAtomItems: AtomItems[][] = [];

    this.packageItems.forEach(({ packedItem, count }) => {
      if (packedItem.packedType === '모두 받기') {
        const _atomItems = packedItem.getAtomItems();
        _atomItems.multiply(count);
        atomItems.merge(_atomItems);
        return;
      }
      if (packedItem.packedType === '선택') {
        const _selected = packedItem.getSelectedAtomItems();
        _selected.forEach((_atomItems) => _atomItems.multiply(count));
        selectedAtomItems.push(_selected);
        return;
      }
    });

    return { atomItems, selectedAtomItems };
  }
  getDefaultItems(
    { selectOption }: { selectOption: 'first' | 'last' } = {
      selectOption: 'last',
    },
  ) {
    const { atomItems, selectedAtomItems } = this.getAllItems();

    selectedAtomItems
      .map((_selectedAtomItems) => {
        if (selectOption === 'first') {
          return _selectedAtomItems[0];
        }
        return _selectedAtomItems[_selectedAtomItems.length - 1];
      })
      .forEach((_atomItems) => {
        atomItems.merge(_atomItems);
      });

    return atomItems;
  }

  isOnSale() {
    // 판매 기간 없음 (무제한 판매)
    if (this.saleDate === '제한 없음') {
      return true;
    }
    // 판매 시작일만 존재
    if (this.saleDate[1] === null) {
      return (
        dayjs().isSame(dayjs(this.saleDate[0]), 'day') ||
        dayjs().isAfter(dayjs(this.saleDate[0]), 'day')
      );
    }
    // 판매 시작일 ~ 종료일 존재
    return dayjs().isBetween(
      dayjs(this.saleDate[0]),
      dayjs(this.saleDate[1]),
      'day',
      '[]', // 두 날짜 포함
    );
  }

  static Builder = class {
    options: PackageOptions;

    constructor(
      id: string,
      name: string,
      price: number,
      priceType: '로얄 크리스탈' | '크리스탈',
    ) {
      this.options = {
        id,
        name,
        price,
        priceType,
        purchaseLimit: 0,
        bonus: 0,
        repurchaseCycle: '무제한',
        packageItems: [],
        saleDate: '제한 없음',
        image: shopIconImg,
      };
    }

    build() {
      return new Package(this.options);
    }
    setPurchaseLimit(limit: number) {
      this.options.purchaseLimit = limit;
      return this;
    }
    setBonus(bonus: number) {
      this.options.bonus = bonus;
      return this;
    }
    setRepurchaseCycle(repurchaseCycle: '주간' | '월간' | '무제한') {
      this.options.repurchaseCycle = repurchaseCycle;
      return this;
    }
    setImage(image: StaticImageData) {
      this.options.image = image;
      return this;
    }
    addPackageItem(packedItem: PackedItem, count: number = 1, percent = 100) {
      this.options.packageItems.push({ packedItem, count, percent });
      return this;
    }
    setSaleDate(
      saleDateOption:
        | '제한 없음'
        | { startDate: string; endDate: null }
        | { startDate: string; endDate: string },
    ) {
      if (saleDateOption === '제한 없음') {
        this.options.saleDate = saleDateOption;
      } else {
        this.options.saleDate = [
          saleDateOption.startDate,
          saleDateOption.endDate,
        ];
      }
      return this;
    }
  };
}
