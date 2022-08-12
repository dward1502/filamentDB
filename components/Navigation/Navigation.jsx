import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './nav.module.scss';

const Navigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={'/filamentDBLogo_transparent.png'}
          layout='fill'
          objectFit='contain'
          className={styles.image}
        />
      </div>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Link href='/'>
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href='/filamentFilters'>
              <a>FILAMENT FILTER</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
