import styles from './page.module.css';
import ItemZone from '@/app/(defaultLayout)/simulator/_components/ItemZone';
import ExpBar from '@/app/(defaultLayout)/simulator/_components/ExpBar';
import AncestorProtectionZone from '@/app/(defaultLayout)/simulator/_components/AncestorProtectionZone';
import PercentZone from '@/app/(defaultLayout)/simulator/_components/PercentZone';
import RequireMaterials from '@/app/(defaultLayout)/simulator/_components/RequireMaterials';
import AuxiliaryMaterials from '@/app/(defaultLayout)/simulator/_components/AuxiliaryMaterials';
import CostZone from '@/app/(defaultLayout)/simulator/_components/CostZone';
import RefiningButton from '@/app/(defaultLayout)/simulator/_components/RefiningButton';
import RefiningHistory from '@/app/(defaultLayout)/simulator/_components/RefiningHistory';
import TitledBox from '@/app/_components/TitledBox';

export default function AdvancedHoning() {
  return (
    <div className={styles.container}>
      <TitledBox
        title={'상급 재련'}
        light={true}
        className={styles.titledBoxContents}
      >
        <ItemZone />
        <AncestorProtectionZone className={styles.gapedContent} />
        <ExpBar className={styles.gapedContent} />
      </TitledBox>
      <PercentZone />
      <div style={{ display: 'flex', width: '100%', gap: '1.6rem' }}>
        <TitledBox title={'필요 재료'} className={styles.titledBoxContents}>
          <RequireMaterials />
        </TitledBox>
        <TitledBox title={'추가 재료'} className={styles.titledBoxContents}>
          <AuxiliaryMaterials />
        </TitledBox>
      </div>
      <TitledBox title={'재련 비용'}>
        <CostZone />
      </TitledBox>
      <RefiningButton />
      <RefiningHistory />
    </div>
  );
}
