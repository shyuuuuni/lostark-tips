import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

export default function CalculatorLayout({ children }: Props) {
  return <div className={styles.simulator}>{children}</div>;
}
