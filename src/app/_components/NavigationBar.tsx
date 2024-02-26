'use client';

import Link from 'next/link';
import styles from './navigationBar.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';

export default function NavigationBar() {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNavZone}>
        <Link href={'/'} className={styles.logoZone}>
          <Image src={Logo} alt={'LoaTips 로고'} priority={true} />
        </Link>
        <Link
          href={'/simulator'}
          className={clsx(segment === 'simulator' && styles.clicked)}
        >
          시뮬레이터
        </Link>
        <Link
          href={'/calculator'}
          className={clsx(segment === 'calculator' && styles.clicked)}
        >
          효율 계산기
        </Link>
      </div>
      <div className={styles.rightNavZone}>
        <div className={styles.inquireBtn}>문의하기</div>
        <div>더보기</div>
      </div>
    </nav>
  );
}
