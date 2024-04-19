/** @format */
'use client';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isActive, setActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navToggle2 = () => {
    setActive(!isActive);
  };
  const navToggle = () => {
    setActive(!isActive);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className={`${isActive ? styles.navigation : styles.navigation_open}`}>
        <div className={styles.nav_wrapper}>
          <div className={styles.closing_container}>
            <div className={styles.menu_container} onClick={navToggle}>
              <div
                className={`${styles.burger} ${
                  isActive ? '' : styles.burgerActive
                }`}></div>
            </div>
          </div>
          <div className={clsx('l-b fs-700', styles.nav_center)}>
            <ol className={styles.nav_list}>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <Link href="/" prefetch={false}>
                  <span className="black ff-serif underline-r">Home</span>
                </Link>
              </li>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <Link href="/about" prefetch={false}>
                  <span className="black ff-serif underline-r">About</span>
                </Link>
              </li>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <Link href="/shoots">
                  <span className="black ff-serif underline-r">Shoots</span>
                </Link>
              </li>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <Link href="/contact" prefetch={false}>
                  <span className="black ff-serif underline-r">Contact</span>
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.animation}>
        <nav className={styles.nav_container}>
          <div className={styles.center_container}>
            <div className={styles.brand_container}>
              <Link href="/" prefetch={false}>
                <Image
                  className={styles.image}
                  src="/Brand.png"
                  alt="Iamge of the brand"
                  height={73}
                  width={160}
                  priority={true}
                />
              </Link>
            </div>
          </div>
          <div className={styles.menu_container} onClick={navToggle2}>
            <div
              className={`${styles.burger} ${
                isActive ? '' : styles.burgerActive
              }`}></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
