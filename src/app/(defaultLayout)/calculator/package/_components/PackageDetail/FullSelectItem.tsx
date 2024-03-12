import { PackedItem } from '@/app/_type/package';
import styles from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/selectedItem.module.css';
import clsx from 'clsx';
import Material from '@/app/(defaultLayout)/_components/Material';
import useAtomItemsPrice from '@/app/(defaultLayout)/calculator/package/_hooks/useAtomItemsPrice';
import { useEffect } from 'react';

type Props = {
  packedItem: PackedItem;
  count: number;
  handleChangePrice: (price: number) => void;
};

export default function FullSelectItem({
  packedItem,
  count,
  handleChangePrice,
}: Props) {
  const items = packedItem.getAtomItems().multiply(count);
  const name = packedItem.name;

  const { totalPrice, getPrice } = useAtomItemsPrice(items);

  useEffect(() => {
    handleChangePrice(totalPrice);
  }, [totalPrice]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>아래 구성품을 모두 획득합니다.</div>
      </div>
      <div className={styles.selectItems}>
        {Array.from(items).map(([itemType, itemCount]) => (
          <div
            key={`fullSelectedItem-${name}-${itemType}`}
            className={clsx(
              styles.itemDetailContainer,
              styles.selectItem,
              styles.selected,
              styles.notHover,
            )}
          >
            <Material
              materialType={itemType}
              className={styles.detailItemImage}
            />
            <div className={styles.itemDetail}>
              <div className={styles.detailItemTitle}>{itemType}</div>
              <div className={styles.detailItemCount}>
                <span>{getPrice(itemType)?.toLocaleString()} G</span>
                <span>x {itemCount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
