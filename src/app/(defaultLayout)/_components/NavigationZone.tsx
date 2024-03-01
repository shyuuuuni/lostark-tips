'use client';

import styles from './navigationZone.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import TitledBox from '@/app/_components/TitledBox';

type Props = {
  title: string;
  links: {
    href: string;
    linkTitle: string;
  }[];
};

export default function NavigationZone({ title, links }: Props) {
  const pathname = usePathname();

  return (
    <TitledBox className={styles.titleBox} title={title}>
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
    </TitledBox>
  );
}
