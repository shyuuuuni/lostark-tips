import styles from './page.module.css';
import ItemZone from '@/app/(defaultLayout)/simulator/_components/ItemZone';
import ItemLevelZone from '@/app/(defaultLayout)/simulator/_components/ItemLevelZone';
import ExpBar from '@/app/(defaultLayout)/simulator/_components/ExpBar';
import AncestorProtectionZone from '@/app/(defaultLayout)/simulator/_components/AncestorProtectionZone';
import PercentZone from '@/app/(defaultLayout)/simulator/_components/PercentZone';
import RequireMaterials from '@/app/(defaultLayout)/simulator/_components/RequireMaterials';
import AuxiliaryMaterials from '@/app/(defaultLayout)/simulator/_components/AuxiliaryMaterials';
import CostZone from '@/app/(defaultLayout)/simulator/_components/CostZone';
import RefiningButton from '@/app/(defaultLayout)/simulator/_components/RefiningButton';
import RefiningHistory from '@/app/(defaultLayout)/simulator/_components/RefiningHistory';

export default function AdvancedHoning() {
  return (
    <div className={styles.container}>
      <ItemZone />
      <ItemLevelZone />
      <ExpBar />
      <AncestorProtectionZone />
      <PercentZone />
      <div className={styles.materialZone}>
        <RequireMaterials />
        <AuxiliaryMaterials />
      </div>
      <CostZone />
      <RefiningButton />
      <RefiningHistory />
    </div>
  );
}
