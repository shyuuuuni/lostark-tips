'use client';

import styles from './costZone.module.css';
import Image from 'next/image';
import material05Pic from '@assets/materials/material_05.webp';
import material06Pic from '@assets/materials/material_06.webp';
import material07Pic from '@assets/materials/material_07.webp';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { getRefiningMaterials } from '@/app/(defaultLayout)/simulator/_lib/materials';

export default function CostZone() {
  const [equipmentType, targetLevel, isFree, accumulatedCost] =
    useAdvancedRefiningSimulatorStore((store) => [
      store.equipmentType,
      store.targetLevel,
      store.isFree,
      store.accumulatedCost,
    ]);
  const materials = getRefiningMaterials(equipmentType, targetLevel, {
    isFree,
  });

  return (
    <div className={styles.container}>
      <p>재련 비용</p>
      <div className={styles.costZone}>
        <span className={styles.cost}>
          {materials['명예의 파편']} ({accumulatedCost['명예의 파편']})
          <Image src={material05Pic} alt={'명예의 파편'} />
        </span>
        <span className={styles.cost}>
          {materials['실링']} ({accumulatedCost['실링']})
          <Image src={material06Pic} alt={'실링'} />
        </span>
        <span className={styles.cost}>
          {materials['골드']} ({accumulatedCost['골드']})
          <Image src={material07Pic} alt={'골드'} />
        </span>
      </div>
    </div>
  );
}
