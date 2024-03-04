import { AuxiliaryMaterial, Cost, Material } from '@/app/_type/material';
import styles from './material.module.css';
import clsx from 'clsx';
import material01Pic from '@assets/materials/material_01.png';
import material02Pic from '@assets/materials/material_02.png';
import material03Pic from '@assets/materials/material_03.png';
import material04Pic from '@assets/materials/material_04.png';
import auxiliary01Pic from '@assets/materials/auxiliary_01.png';
import auxiliary02Pic from '@assets/materials/auxiliary_02.png';
import auxiliary03Pic from '@assets/materials/auxiliary_03.png';
import material05Pic from '@assets/materials/material_05.webp';
import material06Pic from '@assets/materials/material_06.webp';
import material07Pic from '@assets/materials/material_07.webp';
import Image from 'next/image';

type Props = {
  materialType: Material | AuxiliaryMaterial | Cost;
  className?: string;
};

const getBackgroundClassName = (
  materialType: Material | AuxiliaryMaterial | Cost,
): string => {
  switch (materialType) {
    case '찬란한 명예의 돌파석':
      return styles.breakthroughStone;
    case '최상급 오레하 융화 재료':
      return styles.fusion;
    case '태양의 은총':
      return styles.solarGrace;
    case '태양의 축복':
      return styles.solarBlessing;
    case '태양의 가호':
      return styles.solarProtection;
    default:
      // 파괴/수호강석, 명예의 파편, 실링, 골드
      return styles.common;
  }
};

const MaterialImage = ({
  materialType,
}: {
  materialType: Material | AuxiliaryMaterial | Cost;
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
    case '최상급 오레하 융화 재료':
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
      break;
    case '명예의 파편':
      src = material05Pic;
      break;
    case '실링':
      src = material06Pic;
      break;
    case '골드':
      src = material07Pic;
      break;
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
