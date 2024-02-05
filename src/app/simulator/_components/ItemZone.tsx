'use client';

import styles from './ItemZone.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import Image from 'next/image';
import clsx from 'clsx';

const imageLoader = ({ src }: { src: string }) =>
  `https://cdn-lostark.game.onstove.com/efui_iconatlas/gl_item/${src}`;

export default function ItemZone() {
  const [itemType, setItemType] = useSimulatorStore((store) => [
    store.itemType,
    store.setItemType,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.itemTypeSelectZone}>
        <div
          className={clsx(
            styles.itemButton,
            itemType === 'weapon' && styles.selected,
          )}
          onClick={() => setItemType('weapon')}
        >
          <Image
            src={'gl_item_01_224.png'}
            loader={imageLoader}
            alt={'상위 고대 무기 이미지'}
            width={64}
            height={64}
          />
        </div>
        <div
          className={clsx(
            styles.itemButton,
            itemType === 'armor' && styles.selected,
          )}
          onClick={() => setItemType('armor')}
        >
          <Image
            src={'gl_item_01_222.png'}
            loader={imageLoader}
            alt={'상위 고대 방어구 이미지'}
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className={styles.itemTypeName}>
        {itemType === 'weapon' ? '상위 고대 무기' : '상위 고대 방어구'}
      </div>
    </div>
  );
}
