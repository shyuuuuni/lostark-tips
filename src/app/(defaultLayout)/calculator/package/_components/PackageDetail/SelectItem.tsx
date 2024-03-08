import styles from './selectedItem.module.css';
import { PackedItem } from '@/app/_type/package';
import clsx from 'clsx';
import Material from '@/app/(defaultLayout)/_components/Material';

type Props = {
  packedItem: PackedItem;
  count: number;
  selected: number;
  handleSelectItem: (nextSelected: number) => void;
};

export default function SelectItem({
  packedItem,
  count,
  selected,
  handleSelectItem,
}: Props) {
  const selectedItems = packedItem
    .getSelectedAtomItems()
    .map((_selectedItem) => _selectedItem.multiply(count));
  const { name } = packedItem;

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>
          아래 구성품 중 하나를 선택하여 획득합니다.
        </div>
      </div>
      <div className={styles.selectItems}>
        {selectedItems.map((_selectedItems, index) => (
          <div
            key={`${_selectedItems}-${index}`}
            className={clsx(
              styles.selectItem,
              selected === index && styles.selected,
            )}
            onClick={() => handleSelectItem(index)}
          >
            {Array.from(_selectedItems).map(([itemType, itemCount]) => (
              <div
                key={`fullSelectedItem-${name}-${itemType}`}
                className={styles.itemDetailContainer}
              >
                <Material
                  materialType={itemType}
                  className={styles.detailItemImage}
                />
                <div className={styles.itemDetail}>
                  <div className={styles.detailItemTitle}>{itemType}</div>
                  <div className={styles.detailItemCount}>
                    x {itemCount.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
