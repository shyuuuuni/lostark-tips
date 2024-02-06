'use client';

import styles from './auxiliaryMaterials.module.css';
import { useSimulatorStore } from '@/app/simulator/_stores/useSimulatorStore';
import {
  AuxiliaryMaterial,
  getAuxiliaryMaterial,
} from '@/app/simulator/_lib/materials';
import Image from 'next/image';
import clsx from 'clsx';

const imageLoader = ({ src }: { src: string }) =>
  `https://cdn-lostark.game.onstove.com/efui_iconatlas/use/${src}`;

export default function AuxiliaryMaterials() {
  const [usingAuxiliary, toggleAuxiliary, accumulatedCost] = useSimulatorStore(
    (store) => [
      store.usingAuxiliary,
      store.toggleAuxiliary,
      store.accumulatedCost,
    ],
  );
  const materials = getAuxiliaryMaterial();

  const onClickAuxiliary = (auxiliary: AuxiliaryMaterial) => () => {
    toggleAuxiliary(auxiliary);
  };
  const onClickAll = () => {
    const notUsed: AuxiliaryMaterial[] = [];

    for (const [auxiliary, isUsed] of Object.entries(usingAuxiliary)) {
      if (!isUsed) {
        notUsed.push(auxiliary as AuxiliaryMaterial);
      }
    }

    if (notUsed.length === 0 || notUsed.length === 3) {
      toggleAuxiliary('태양의 은총');
      toggleAuxiliary('태양의 축복');
      toggleAuxiliary('태양의 가호');
    } else {
      notUsed.forEach((auxiliary) => toggleAuxiliary(auxiliary));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <p>필요 재료</p>
        <div onClick={onClickAll}>모두 선택</div>
      </div>
      <div className={styles.materialsZone}>
        <div
          className={styles.material}
          onClick={onClickAuxiliary('태양의 은총')}
        >
          <div>
            <Image
              loader={imageLoader}
              src={'use_7_161.png'}
              width={64}
              height={64}
              alt={'태양의 은총'}
            />
          </div>
          <div
            className={clsx(usingAuxiliary['태양의 은총'] && styles.selected)}
          >
            {usingAuxiliary['태양의 은총'] ? materials['태양의 은총'] : 0}
          </div>
          <div
            className={clsx(usingAuxiliary['태양의 은총'] && styles.selected)}
          >
            ({accumulatedCost['태양의 은총']})
          </div>
        </div>
        <div
          className={styles.material}
          onClick={onClickAuxiliary('태양의 축복')}
        >
          <div>
            <Image
              loader={imageLoader}
              src={'use_7_162.png'}
              width={64}
              height={64}
              alt={'태양의 축복'}
            />
          </div>
          <div
            className={clsx(usingAuxiliary['태양의 축복'] && styles.selected)}
          >
            {usingAuxiliary['태양의 축복'] ? materials['태양의 축복'] : 0}
          </div>
          <div
            className={clsx(usingAuxiliary['태양의 축복'] && styles.selected)}
          >
            ({accumulatedCost['태양의 축복']})
          </div>
        </div>
        <div
          className={styles.material}
          onClick={onClickAuxiliary('태양의 가호')}
        >
          <div>
            <Image
              loader={imageLoader}
              src={'use_7_163.png'}
              width={64}
              height={64}
              alt={'태양의 가호'}
            />
          </div>
          <div
            className={clsx(usingAuxiliary['태양의 가호'] && styles.selected)}
          >
            {usingAuxiliary['태양의 가호'] ? materials['태양의 가호'] : 0}
          </div>
          <div
            className={clsx(usingAuxiliary['태양의 가호'] && styles.selected)}
          >
            ({accumulatedCost['태양의 가호']})
          </div>
        </div>
      </div>
    </div>
  );
}
