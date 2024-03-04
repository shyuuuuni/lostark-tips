import { AuxiliaryMaterial, Cost, Material } from '@/type/material';

export type MarketStatsInfo = {
  Date: string;
  AvgPrice: number;
  TradeCount: number;
};

export type MarketItemStats = {
  Name: string;
  TradeRemainCount: number;
  BundleCount: number;
  Stats: MarketStatsInfo[];
  ToolTip: string;
};

export type SalableItem =
  | Material
  | AuxiliaryMaterial
  | Extract<Cost, '명예의 파편'>;
