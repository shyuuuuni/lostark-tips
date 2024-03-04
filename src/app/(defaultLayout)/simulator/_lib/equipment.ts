import { EquipmentType } from '@/app/_type/equipment';

export const isWeapon = (equipmentType: EquipmentType) =>
  equipmentType === '무기';

export const isArmor = (equipmentType: EquipmentType) =>
  equipmentType !== '무기';
