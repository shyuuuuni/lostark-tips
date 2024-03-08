'use client';

import styles from './requireMaterials.module.css';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { getRefiningMaterials } from '@/app/(defaultLayout)/simulator/_lib/materials';
import {
  isArmor,
  isWeapon,
} from '@/app/(defaultLayout)/simulator/_lib/equipment';
import Material from '@/app/(defaultLayout)/_components/Material';

export default function RequireMaterials() {
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
    <div className={styles.container}>
      <p className={styles.title}>필수 재련 재료</p>
      <div className={styles.divBar} />
      <div className={styles.materialsZone}>
        {isWeapon(equipmentType) && (
          <div className={styles.materialZone}>
            <Material materialType={'정제된 파괴강석'} />
            <div>{materials['정제된 파괴강석'].toLocaleString()}</div>
          </div>
        )}
        {isArmor(equipmentType) && (
          <div className={styles.materialZone}>
            <Material materialType={'정제된 수호강석'} />
            <div>{materials['정제된 수호강석'].toLocaleString()}</div>
          </div>
        )}
        <div className={styles.materialZone}>
          <Material materialType={'찬란한 명예의 돌파석'} />
          <div>{materials['찬란한 명예의 돌파석']}</div>
        </div>
        <div className={styles.materialZone}>
          <Material materialType={'최상급 오레하 융화 재료'} />
          <div>{materials['최상급 오레하 융화 재료']}</div>
        </div>
      </div>
    </div>
  );
}
