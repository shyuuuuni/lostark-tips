import styles from './titledBox.module.css';
import clsx from 'clsx';

type Props = {
  title: string;
  light?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function TitledBox({
  title,
  light,
  className,
  children,
}: Props) {
  return (
    <div className={clsx(styles.container, light && styles.light, className)}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
}
