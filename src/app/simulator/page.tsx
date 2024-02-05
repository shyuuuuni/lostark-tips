import styles from './page.module.css';

import ItemZone from '@/app/simulator/_components/ItemZone';
import ItemLevelZone from '@/app/simulator/_components/ItemLevelZone';
import ExpBar from '@/app/simulator/_components/ExpBar';
import RefiningButton from '@/app/simulator/_components/RefiningButton';

export default function Simulator() {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <h1 className={styles.title}>상급 재련 시뮬레이터</h1>
        <ItemZone />
        <ItemLevelZone />
        <ExpBar />
        <RefiningButton />
      </div>
    </main>
  );
}
