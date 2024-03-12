'use client';

import Link from 'next/link';
import styles from './navigationBar.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import withTooltipPortal from '@/app/_hocs/withTooltipPortal';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';

const PortalTooltip = withTooltipPortal(Tooltip);

export default function NavigationBar() {
  const segment = useSelectedLayoutSegment();
  const [copied, setCopied] = useState(false);

  const onClickTootip = () => {
    const TEXT = '.shyuuni';

    navigator.clipboard
      .writeText(TEXT)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => setCopied(false));
  };

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
          계산기
        </Link>
      </div>
      <div className={styles.rightNavZone}>
        <div className={styles.inquireBtn} data-tooltip-id="inquire-button">
          문의하기
        </div>
        <PortalTooltip
          id="inquire-button"
          place={'bottom-end'}
          openOnClick={true}
          clickable={true}
        >
          <div className={styles.tooltip} onClick={onClickTootip}>
            {copied ? (
              <span>복사됨</span>
            ) : (
              <>
                <span>디스코드</span>
                <span>.shyuuni</span>
              </>
            )}
          </div>
        </PortalTooltip>
      </div>
    </nav>
  );
}
