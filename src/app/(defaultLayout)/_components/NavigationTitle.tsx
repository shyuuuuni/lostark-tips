'use client';

import styles from './navigationTitle.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Props = {
  title: string;
  links: {
    href: string;
    linkTitle: string;
  }[];
};

export default function NavigationTitle({ title, links }: Props) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.linkZone}>
        {links.map(({ href, linkTitle }) => (
          <Link
            className={clsx(
              styles.link,
              pathname === href && styles.highlighted,
            )}
            key={href}
            href={href}
          >
            <li>{linkTitle}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
