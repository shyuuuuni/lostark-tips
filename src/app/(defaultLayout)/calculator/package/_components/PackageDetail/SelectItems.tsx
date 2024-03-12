import styles from './selectedItem.module.css';
import { PackedItem } from '@/app/_type/package';
import clsx from 'clsx';
import SelectItem from '@/app/(defaultLayout)/calculator/package/_components/PackageDetail/SelectItem';

type Props = {
  packedItem: PackedItem;
  count: number;
  selected: number;
  handleSelectItem: (nextSelected: number) => void;
  handleChangePrice: (price: number) => void;
};

export default function SelectItems({
  packedItem,
  count,
  selected,
  handleSelectItem,
  handleChangePrice,
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
            <SelectItem
              items={_selectedItems}
              selected={selected === index}
              handleChangePrice={handleChangePrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
