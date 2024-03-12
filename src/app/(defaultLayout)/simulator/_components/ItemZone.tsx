'use client';

import styles from './ItemZone.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import weaponPic from '@assets/equipments/weapon_lance.png';
import armorHatPic from '@assets/equipments/armor_hat.png';
import armorPauldronsPic from '@assets/equipments/armor_pauldrons.png';
import armorTopPic from '@assets/equipments/armor_top.png';
import armorPantsPic from '@assets/equipments/armor_pants.png';
import armorGlovesPic from '@assets/equipments/armor_gloves.png';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { EquipmentType } from '@/app/_type/equipment';
import { getAdvancedRefiningStatIncrement } from '@/app/(defaultLayout)/simulator/_lib/advancedRefining';

const equipments: {
  type: EquipmentType;
  image: StaticImageData;
  alt: string;
}[] = [
  {
    type: '무기',
    image: weaponPic,
    alt: '상위 고대 무기 이미지',
  },
  {
    type: '투구',
    image: armorHatPic,
    alt: '상위 고대 투구 방어구 이미지',
  },
  {
    type: '견갑',
    image: armorPauldronsPic,
    alt: '상위 고대 견갑 방어구 이미지',
  },
  {
    type: '상의',
    image: armorTopPic,
    alt: '상위 고대 상의 방어구 이미지',
  },
  {
    type: '하의',
    image: armorPantsPic,
    alt: '상위 고대 하의 방어구 이미지',
  },
  {
    type: '장갑',
    image: armorGlovesPic,
    alt: '상위 고대 장갑 방어구 이미지',
  },
];

export default function ItemZone() {
  const [equipmentType, targetLevel, isMaxLevel, reset] =
    useAdvancedRefiningSimulatorStore((store) => [
      store.equipmentType,
      store.targetLevel,
      store.isMaxLevel,
      store.reset,
    ]);
  const statIncrements = getAdvancedRefiningStatIncrement(
    equipmentType,
    targetLevel,
  );

  return (
    <div className={styles.equipmentZone}>
      <ul className={styles.equipments}>
        {equipments.map(({ type, image, alt }) => (
          <li
            key={type}
            className={clsx(
              styles.equipment,
              type === equipmentType && styles.selected,
            )}
            onClick={() => reset(type)}
          >
            <div className={styles.equipmentImageZone}>
              <Image src={image} alt={alt} />
            </div>
            <div>{type}</div>
          </li>
        ))}
      </ul>
      <div className={styles.informationZone}>
        <div>{equipmentType}</div>
        <div>
          <span>[상급 재련]</span>
          <span>{isMaxLevel() ? targetLevel : targetLevel - 1}</span>
          <span>단계</span>
        </div>
      </div>
      <div className={styles.itemStatZone}>
        {!isMaxLevel() &&
          statIncrements.map(([statName, increment]) => (
            <div key={`${equipmentType}-${statName}`}>
              {statName} +{increment}
            </div>
          ))}
      </div>
    </div>
  );
}
