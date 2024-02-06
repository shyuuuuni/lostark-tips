'use client';

import styles from './ItemZone.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import Image from 'next/image';
import clsx from 'clsx';

import weaponPic from '@assets/weapon_01.png';
import armorPic from '@assets/armor_01.png';

export default function ItemZone() {
  const [itemType, reset] = useSimulatorStore((store) => [
    store.itemType,
    store.reset,
  ]);

  const onClickWeapon = () => {
    reset('weapon');
  };
  const onClickArmor = () => {
    reset('armor');
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemTypeSelectZone}>
        <div
          className={clsx(
            styles.itemButton,
            itemType === 'weapon' && styles.selected,
          )}
          onClick={onClickWeapon}
        >
          <Image src={weaponPic} alt={'상위 고대 무기 이미지'} />
        </div>
        <div
          className={clsx(
            styles.itemButton,
            itemType === 'armor' && styles.selected,
          )}
          onClick={onClickArmor}
        >
          <Image src={armorPic} alt={'상위 고대 방어구 이미지'} />
        </div>
      </div>
      <div className={styles.itemTypeName}>
        {itemType === 'weapon' ? '상위 고대 무기' : '상위 고대 방어구'}
      </div>
    </div>
  );
}
