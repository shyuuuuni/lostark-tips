import { AuxiliaryMaterial, Material } from '@/type/material';
import styles from './material.module.css';
import clsx from 'clsx';
import material01Pic from '@assets/materials/material_01.png';
import material02Pic from '@assets/materials/material_02.png';
import material03Pic from '@assets/materials/material_03.png';
import material04Pic from '@assets/materials/material_04.png';
import auxiliary01Pic from '@assets/materials/auxiliary_01.png';
import auxiliary02Pic from '@assets/materials/auxiliary_02.png';
import auxiliary03Pic from '@assets/materials/auxiliary_03.png';
import Image from 'next/image';

type Props = {
  materialType: Material | AuxiliaryMaterial;
  className?: string;
};

const getBackgroundClassName = (
  materialType: Material | AuxiliaryMaterial,
): string => {
  switch (materialType) {
    case '정제된 파괴강석':
    case '정제된 수호강석':
      return styles.stones;
    case '찬란한 명예의 돌파석':
      return styles.breakthroughStone;
    case '최상급 오레하 융화재료':
      return styles.fusion;
    case '태양의 은총':
      return styles.solarGrace;
    case '태양의 축복':
      return styles.solarBlessing;
    case '태양의 가호':
      return styles.solarProtection;
    default:
      return '';
  }
};

const MaterialImage = ({
  materialType,
}: {
  materialType: Material | AuxiliaryMaterial;
}) => {
  let src = null;

  switch (materialType) {
    case '정제된 파괴강석':
      src = material01Pic;
      break;
    case '정제된 수호강석':
      src = material02Pic;
      break;
    case '찬란한 명예의 돌파석':
      src = material03Pic;
      break;
    case '최상급 오레하 융화재료':
      src = material04Pic;
      break;
    case '태양의 은총':
      src = auxiliary01Pic;
      break;
    case '태양의 축복':
      src = auxiliary02Pic;
      break;
    case '태양의 가호':
      src = auxiliary03Pic;
  }

  if (src === null) {
    return null;
  }

  return <Image src={src} alt={materialType} />;
};

export default function Material({ materialType, className }: Props) {
  return (
    <div
      className={clsx(
        styles.container,
        getBackgroundClassName(materialType),
        className,
      )}
    >
      <MaterialImage materialType={materialType} />
    </div>
  );
}
