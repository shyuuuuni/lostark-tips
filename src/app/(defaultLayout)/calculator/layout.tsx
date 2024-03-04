import styles from './layout.module.css';
import NavigationZone from '@/app/(defaultLayout)/_components/NavigationZone';

type Props = {
  children: React.ReactNode;
};

const links = [
  {
    href: '/simulator/package',
    linkTitle: '패키지 효율',
  },
];

export default function CalculatorLayout({ children }: Props) {
  return (
    <div className={styles.simulator}>
      <NavigationZone title={'계산기'} links={links} />
      {children}
    </div>
  );
}
