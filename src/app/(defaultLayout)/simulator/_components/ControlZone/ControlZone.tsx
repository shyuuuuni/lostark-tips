import styles from './controlZone.module.css';
import RefiningButton from '@/app/(defaultLayout)/simulator/_components/ControlZone/RefiningButton';
import ResetButton from '@/app/(defaultLayout)/simulator/_components/ControlZone/ResetButton';
import DetailButton from '@/app/(defaultLayout)/simulator/_components/ControlZone/DetailButton';

export default function ControlZone() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonZone}>
        <DetailButton />
        <RefiningButton />
        <ResetButton />
      </div>
    </div>
  );
}
