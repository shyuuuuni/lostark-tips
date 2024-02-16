import styles from './layout.module.css';
import NavigationZone from '@/app/(defaultLayout)/_components/NavigationZone';

type Props = {
  children: React.ReactNode;
};

const links = [
  {
    href: '/simulator/advanced_honing',
    linkTitle: '상급 재련',
  },
];

export default function SimulatorLayout({ children }: Props) {
  return (
    <div className={styles.simulator}>
      <NavigationZone title={'시뮬레이터'} links={links} />
      {children}
    </div>
  );
}
