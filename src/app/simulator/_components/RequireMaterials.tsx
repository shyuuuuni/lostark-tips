'use client';

import styles from './requireMaterials.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import { getRefiningMaterials } from '@/app/simulator/_lib/materials';
import Image from 'next/image';

const imageLoader = ({ src }: { src: string }) =>
  `https://cdn-lostark.game.onstove.com/efui_iconatlas/use/${src}`;

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
              <Image
                loader={imageLoader}
                src={'use_11_15.png'}
                width={64}
                height={64}
                alt={'정제된 파괴강석'}
              />
            </div>
            <div>{materials['정제된 파괴강석']}</div>
            <div>({accumulatedCost['정제된 파괴강석']})</div>
          </div>
        )}
        {itemType === 'armor' && (
          <div className={styles.material}>
            <div>
              <Image
                loader={imageLoader}
                src={'use_11_16.png'}
                width={64}
                height={64}
                alt={'정제된 수호강석'}
              />
            </div>
            <div>{materials['정제된 수호강석']}</div>
            <div>({accumulatedCost['정제된 수호강석']})</div>
          </div>
        )}
        <div className={styles.material}>
          <div>
            <Image
              loader={imageLoader}
              src={'use_11_17.png'}
              width={64}
              height={64}
              alt={'찬란한 명예의 돌파석'}
            />
          </div>
          <div>{materials['찬란한 명예의 돌파석']}</div>
          <div>({accumulatedCost['찬란한 명예의 돌파석']})</div>
        </div>
        <div className={styles.material}>
          <div>
            <Image
              loader={imageLoader}
              src={'use_11_29.png'}
              width={64}
              height={64}
              alt={'최상급 오레하 융화재료'}
            />
          </div>
          <div>{materials['최상급 오레하 융화재료']}</div>
          <div>({accumulatedCost['최상급 오레하 융화재료']})</div>
        </div>
      </div>
    </div>
  );
}
