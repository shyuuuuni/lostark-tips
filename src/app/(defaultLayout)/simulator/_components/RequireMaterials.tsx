'use client';

import styles from './requireMaterials.module.css';
import Image from 'next/image';
import material01Pic from '@assets/materials/material_01.png';
import material02Pic from '@assets/materials/material_02.png';
import material03Pic from '@assets/materials/material_03.png';
import material04Pic from '@assets/materials/material_04.png';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { getRefiningMaterials } from '@/app/(defaultLayout)/simulator/_lib/materials';
import {
  isArmor,
  isWeapon,
} from '@/app/(defaultLayout)/simulator/_lib/equipment';

export default function RequireMaterials() {
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
      <p>필요 재료</p>
      <div className={styles.materialsZone}>
        {isWeapon(equipmentType) && (
          <div className={styles.material}>
            <div>
              <Image src={material01Pic} alt={'정제된 파괴강석'} />
            </div>
            <div>{materials['정제된 파괴강석']}</div>
            <div>({accumulatedCost['정제된 파괴강석']})</div>
          </div>
        )}
        {isArmor(equipmentType) && (
          <div className={styles.material}>
            <div>
              <Image src={material02Pic} alt={'정제된 수호강석'} />
            </div>
            <div>{materials['정제된 수호강석']}</div>
            <div>({accumulatedCost['정제된 수호강석']})</div>
          </div>
        )}
        <div className={styles.material}>
          <div>
            <Image src={material03Pic} alt={'찬란한 명예의 돌파석'} />
          </div>
          <div>{materials['찬란한 명예의 돌파석']}</div>
          <div>({accumulatedCost['찬란한 명예의 돌파석']})</div>
        </div>
        <div className={styles.material}>
          <div>
            <Image src={material04Pic} alt={'최상급 오레하 융화재료'} />
          </div>
          <div>{materials['최상급 오레하 융화재료']}</div>
          <div>({accumulatedCost['최상급 오레하 융화재료']})</div>
        </div>
      </div>
    </div>
  );
}
