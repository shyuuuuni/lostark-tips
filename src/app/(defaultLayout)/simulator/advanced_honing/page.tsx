import styles from './page.module.css';
import ItemZone from '@/app/(defaultLayout)/simulator/_components/ItemZone';
import ExpBar from '@/app/(defaultLayout)/simulator/_components/ExpBar';
import AncestorProtectionZone from '@/app/(defaultLayout)/simulator/_components/AncestorProtectionZone';
import PercentZone from '@/app/(defaultLayout)/simulator/_components/PercentZone';
import RequireMaterials from '@/app/(defaultLayout)/simulator/_components/RequireMaterials';
import AuxiliaryMaterials from '@/app/(defaultLayout)/simulator/_components/AuxiliaryMaterials';
import CostZone from '@/app/(defaultLayout)/simulator/_components/CostZone';
import TitledBox from '@/app/_components/TitledBox';
import { ControlZone } from '@/app/(defaultLayout)/simulator/_components/ControlZone';
import { DetailZone } from '@/app/(defaultLayout)/simulator/_components/DetailZone';
import StoreInitializer from '@/app/(defaultLayout)/simulator/_business/StoreInitializer';
import PrefetchMarketPrice from '@/app/(defaultLayout)/simulator/_business/PrefetchMarketPrice';

export default function AdvancedHoning() {
  return (
    <div className={styles.container}>
      <StoreInitializer />
      <TitledBox
        title={'상급 재련'}
        light={true}
        className={styles.titledBoxContents}
      >
        <ItemZone />
        <AncestorProtectionZone className={styles.gapedContent} />
        <ExpBar className={styles.gapedContent} />
      </TitledBox>
      <TitledBox
        title={'재련 비용'}
        light={true}
        className={styles.titledBoxContents}
      >
        <PercentZone />
        <div className={styles.materialsZone}>
          <RequireMaterials />
          <AuxiliaryMaterials />
        </div>
        <CostZone className={styles.gapedContent} />
      </TitledBox>
      <PrefetchMarketPrice>
        <DetailZone />
      </PrefetchMarketPrice>
      <ControlZone />
    </div>
  );
}
