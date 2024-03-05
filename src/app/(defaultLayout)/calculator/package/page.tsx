import styles from './page.module.css';
import TitledBox from '@/app/_components/TitledBox';
import { packages } from '@/app/(defaultLayout)/calculator/package/_lib/package';
import Package from '@/app/(defaultLayout)/calculator/package/_components/Package';
import Test from '@/app/(defaultLayout)/calculator/package/_components/Test';

export default function PackageCalculator() {
  return (
    <div className={styles.container}>
      <TitledBox title="필터"></TitledBox>
      <TitledBox title="공식 패키지" className={styles.titledBoxContents}>
        <ul className={styles.packages}>
          {packages.map((_package) => (
            <Package key={_package.name} targetPackage={_package} />
          ))}
        </ul>
      </TitledBox>
      <TitledBox title="커스텀 패키지">
        <ul className={styles.packages}>
          <Test />
        </ul>
      </TitledBox>
    </div>
  );
}
