import styles from './page.module.css';

import ItemZone from '@/app/simulator/_components/ItemZone';
import ItemLevelZone from '@/app/simulator/_components/ItemLevelZone';

export default function Simulator() {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <h1 className={styles.title}>상급 재련 시뮬레이터</h1>
        <ItemZone />
        <ItemLevelZone />
      </div>
    </main>
  );
}
