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
