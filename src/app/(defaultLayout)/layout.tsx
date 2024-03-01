import styles from './layout.module.css';

import NavigationBar from '@/app/_components/NavigationBar';

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <NavigationBar />
      </header>
      <main className={styles.main}>{children}</main>
    </section>
  );
}
