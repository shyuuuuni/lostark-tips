'use client';

import styles from './costZone.module.css';
import Image from 'next/image';
import material05Pic from '@assets/materials/material_05.webp';
import material06Pic from '@assets/materials/material_06.webp';
import material07Pic from '@assets/materials/material_07.webp';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { getRefiningMaterials } from '@/app/(defaultLayout)/simulator/_lib/materials';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function CostZone({ className }: Props) {
  const [equipmentType, targetLevel, isFree] =
    useAdvancedRefiningSimulatorStore((store) => [
      store.equipmentType,
      store.targetLevel,
      store.isFree,
    ]);
  const materials = getRefiningMaterials(equipmentType, targetLevel, {
    isFree,
  });

  return (
    <div className={clsx(styles.container, className)}>
      <p className={styles.title}>필요 재화</p>
      <div className={styles.divBar} />
      <div className={styles.costsZone}>
        <span className={styles.cost}>
          {materials['명예의 파편'].toLocaleString()}
          <Image src={material05Pic} alt={'명예의 파편'} />
        </span>
        <span className={styles.cost}>
          {materials['실링'].toLocaleString()}
          <Image src={material06Pic} alt={'실링'} />
        </span>
        <span className={styles.cost}>
          {materials['골드'].toLocaleString()}
          <Image src={material07Pic} alt={'골드'} />
        </span>
      </div>
    </div>
  );
}
