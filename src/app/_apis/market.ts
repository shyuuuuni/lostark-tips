import { MarketItemStats } from '@/type/market';
import { itemIds } from '@/app/_lib/market';
import { AuxiliaryMaterial, Material } from '@/type/material';

export const fetchMarketItem = async (itemId: string) => {
  const res = await fetch(
    `https://developer-lostark.game.onstove.com/markets/items/${itemId}`,
    {
      headers: {
        accept: 'application/json',
        authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA0ODQ4MDEifQ.oB8XZ_-lZlcCsllO8DyG7R9azFPX6O9JGHaLepvttTyx-ZJovT24R5M873ae_1YitdW4jX75xkFItgb6SgovRjK0I78ob1Iu1AKe2xDO-sFcHvpK58rLpLBtzUPcSxU9E347xQOI3Rv3vzak9j1iz6UBp-jiPNW71xbcBo3zX52bVNGwajoN-UFKhEOtfi77BgPPj2cltwJbjJPMFMT537w9E_AVwsp2NxwV9bZOo0Cfv63Q1IOntZVVKC_EupDmFxpOYxavybq-gyt5QjTbmdt6HPM47kju4RPticR5Lz3Dfyjb0RwuoFzhr6W6RDE4Ol6Gjm4zA_UneiB9cUY6qw',
      },
    },
  );
  const data = (await res.json()) as MarketItemStats[];

  return data[0];
};

export const getItemPrice = async (
  itemName: Material | AuxiliaryMaterial | '명예의 파편',
) => {
  const itemId = itemIds[itemName];
  const itemStats = await fetchMarketItem(itemId);

  console.log(itemName, itemStats.Stats[0], itemStats.BundleCount);

  return itemStats.Stats[0].AvgPrice / itemStats.BundleCount;
};
