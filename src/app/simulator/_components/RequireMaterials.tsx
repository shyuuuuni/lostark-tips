'use client';

import styles from './requireMaterials.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import { getRefiningMaterials } from '@/app/simulator/_lib/refining';
import Image from 'next/image';

const imageLoader = ({ src }: { src: string }) =>
  `https://cdn-lostark.game.onstove.com/efui_iconatlas/use/${src}`;

export default function RequireMaterials() {
  const [itemType, baseLevel] = useSimulatorStore((store) => [
    store.itemType,
    store.baseLevel,
  ]);
  const materials = getRefiningMaterials(itemType, baseLevel);

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
            <div>9999 / {materials['정제된 파괴강석']}</div>
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
            <div>9999 / {materials['정제된 수호강석']}</div>
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
          <div>9999 / {materials['찬란한 명예의 돌파석']}</div>
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
          <div>9999 / {materials['최상급 오레하 융화재료']}</div>
        </div>
      </div>
    </div>
  );
}
