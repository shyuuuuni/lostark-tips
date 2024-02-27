'use client';

import styles from './auxiliaryMaterials.module.css';
import clsx from 'clsx';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { getAuxiliaryMaterial } from '@/app/(defaultLayout)/simulator/_lib/materials';
import { AuxiliaryMaterial } from '@/type/material';
import Material from '@/app/(defaultLayout)/simulator/_components/Material';

export default function AuxiliaryMaterials() {
  const [usingAuxiliary, toggleAuxiliary] = useAdvancedRefiningSimulatorStore(
    (store) => [store.usingAuxiliary, store.toggleAuxiliary],
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
      <div className={styles.titleZone}>
        <p className={styles.title}>보조 재련 재료</p>
        <button className={styles.controlBtn} onClick={onClickAll}>
          모두 선택
        </button>
      </div>
      <div className={styles.divBar} />
      <div className={styles.materialsZone}>
        <div
          className={styles.materialZone}
          onClick={onClickAuxiliary('태양의 은총')}
        >
          <Material materialType={'태양의 은총'} />
          <div
            className={clsx(
              styles.materialAmount,
              usingAuxiliary['태양의 은총'] && styles.selected,
            )}
          >
            {usingAuxiliary['태양의 은총'] ? materials['태양의 은총'] : 0}
          </div>
        </div>
        <div
          className={styles.materialZone}
          onClick={onClickAuxiliary('태양의 축복')}
        >
          <Material materialType={'태양의 축복'} />
          <div
            className={clsx(
              styles.materialAmount,
              usingAuxiliary['태양의 축복'] && styles.selected,
            )}
          >
            {usingAuxiliary['태양의 축복'] ? materials['태양의 축복'] : 0}
          </div>
        </div>
        <div
          className={styles.materialZone}
          onClick={onClickAuxiliary('태양의 가호')}
        >
          <Material materialType={'태양의 가호'} />
          <div
            className={clsx(
              styles.materialAmount,
              usingAuxiliary['태양의 가호'] && styles.selected,
            )}
          >
            {usingAuxiliary['태양의 가호'] ? materials['태양의 가호'] : 0}
          </div>
        </div>
      </div>
    </div>
  );
}
