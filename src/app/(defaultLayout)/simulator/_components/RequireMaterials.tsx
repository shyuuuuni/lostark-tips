'use client';

import styles from './requireMaterials.module.css';
import Image from 'next/image';
import material01Pic from '@assets/material_01.png';
import material02Pic from '@assets/material_02.png';
import material03Pic from '@assets/material_03.png';
import material04Pic from '@assets/material_04.png';
import { useSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useSimulatorStore';
import { getRefiningMaterials } from '@/app/(defaultLayout)/simulator/_lib/materials';

export default function RequireMaterials() {
  const [itemType, baseLevel, isFree, accumulatedCost] = useSimulatorStore(
    (store) => [
      store.itemType,
      store.baseLevel,
      store.isFree,
      store.accumulatedCost,
    ],
  );
  const materials = getRefiningMaterials(itemType, baseLevel, {
    isFree,
  });

  return (
    <div className={styles.container}>
      <p>필요 재료</p>
      <div className={styles.materialsZone}>
        {itemType === 'weapon' && (
          <div className={styles.material}>
            <div>
              <Image src={material01Pic} alt={'정제된 파괴강석'} />
            </div>
            <div>{materials['정제된 파괴강석']}</div>
            <div>({accumulatedCost['정제된 파괴강석']})</div>
          </div>
        )}
        {itemType === 'armor' && (
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
