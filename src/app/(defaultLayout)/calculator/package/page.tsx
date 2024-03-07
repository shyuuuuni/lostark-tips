import styles from './page.module.css';
import TitledBox from '@/app/_components/TitledBox';
import { packages } from '@/app/(defaultLayout)/calculator/package/_lib/package';
import Package from '@/app/(defaultLayout)/calculator/package/_components/Package';
import Test from '@/app/(defaultLayout)/calculator/package/_components/Test';
import PrefetchMarketPrice from '@/app/_business/PrefetchMarketPrice';
import PrefetchCristalPrice from '@/app/_business/PrefetchCristalPrice';
import NavigationZone from '@/app/(defaultLayout)/_components/NavigationZone';
import MaterialFilter from '@/app/(defaultLayout)/calculator/package/_components/MaterialFilter';

const links = [
  {
    href: '/simulator/package',
    linkTitle: '패키지 효율',
  },
];

export default function PackageCalculator() {
  return (
    <div className={styles.container}>
      <NavigationZone title={'계산기'} links={links} />
      <TitledBox title="필터">
        <MaterialFilter />
      </TitledBox>
      <TitledBox title="공식 패키지" className={styles.titledBoxContents}>
        <PrefetchMarketPrice>
          <PrefetchCristalPrice>
            <ul className={styles.packages}>
              {packages.map((_package) => (
                <Package key={_package.id} targetPackage={_package} />
              ))}
            </ul>
          </PrefetchCristalPrice>
        </PrefetchMarketPrice>
      </TitledBox>
      <TitledBox title="커스텀 패키지">
        <ul className={styles.packages}>
          <Test />
        </ul>
      </TitledBox>
    </div>
  );
}
