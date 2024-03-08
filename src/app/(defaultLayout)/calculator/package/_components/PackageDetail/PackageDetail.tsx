'use client';

import styles from './packageDetail.module.css';
import { Package, SaleDate } from '@/app/_type/package';
import CloseButton from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/CloseButton';
import Image from 'next/image';
import PackageItemsZone from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/PackageItemsZone';

type Props = {
  targetPackage: Package;
};

const getSaleDate = (saleDate: SaleDate) => {
  if (saleDate === '제한 없음') {
    return '상시 판매';
  }
  if (saleDate[1] === null) {
    return `${saleDate[0]} ~ 별도 안내 시`;
  }
  return `${saleDate[0]} ~ ${saleDate[1]}`;
};
const getPurchaseLimit = (purchaseLimit: number) => {
  if (purchaseLimit === 0) {
    return '제한 없음';
  }
  return `${purchaseLimit} / ${purchaseLimit}`;
};

export default function PackageDetail({ targetPackage }: Props) {
  const {
    name,
    purchaseLimit,
    price,
    priceType,
    bonus,
    repurchaseCycle,
    packageItems,
    saleDate,
    image,
  } = targetPackage;

  return (
    <div className={styles.container}>
      <div className={styles.controlZone}>
        <CloseButton />
      </div>
      <div className={styles.detailZone}>
        <div className={styles.label}>패키지 정보</div>
        <div className={styles.imageZone}>
          <Image src={image} alt={`${name} 이미지`} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsLabel}>설명</div>
          <div className={styles.title}>{name}</div>
          <div className={styles.saleDate}>
            <div>판매 기간</div>
            <div>{getSaleDate(saleDate)}</div>
          </div>
          <div className={styles.price}>
            <span>{price.toLocaleString()}</span>
            <span>{priceType}</span>
          </div>
          <div>
            {repurchaseCycle !== '무제한' && (
              <span>{repurchaseCycle} 구매 횟수 초기화</span>
            )}
          </div>
          <div>원정대 단위 구매 수량: {getPurchaseLimit(purchaseLimit)}</div>
          {bonus > 0 && <div>{bonus} + 1 상품</div>}
        </div>
      </div>
      <div className={styles.itemsZone}>
        <div className={styles.label}>구성품 정보</div>
        <PackageItemsZone packageItems={packageItems} />
      </div>
    </div>
  );
}
