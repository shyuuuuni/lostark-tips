import styles from './consumedMaterials.module.css';
import { useAdvancedRefiningSimulatorStore } from '@/app/(defaultLayout)/simulator/_stores/useAdvancedRefiningSimulatorStore';
import { AuxiliaryMaterial, Material as MaterialType } from '@/type/material';
import { useMemo } from 'react';
import ConsumedMaterial from '@/app/(defaultLayout)/simulator/_components/DetailZone/ConsumedMaterial';

export default function ConsumedMaterials() {
  const [equipmentType, accumulatedCost] = useAdvancedRefiningSimulatorStore(
    (store) => [store.equipmentType, store.accumulatedCost],
  );
  const materialTypes: MaterialType[] = useMemo(
    () => [
      equipmentType === '무기' ? '정제된 파괴강석' : '정제된 수호강석',
      '찬란한 명예의 돌파석',
      '최상급 오레하 융화재료',
    ],
    [equipmentType],
  );
  const auxiliaryTypes: AuxiliaryMaterial[] = [
    '태양의 은총',
    '태양의 축복',
    '태양의 가호',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.materialsZone}>
        {materialTypes.map((materialType) => (
          <ConsumedMaterial
            key={materialType}
            materialType={materialType}
            count={accumulatedCost[materialType]}
          />
        ))}
      </div>
      <div className={styles.materialsZone}>
        {auxiliaryTypes.map((materialType) => (
          <ConsumedMaterial
            key={materialType}
            materialType={materialType}
            count={accumulatedCost[materialType]}
          />
        ))}
      </div>
    </div>
  );
}
