/** @format */
'use client';
import styles from '../app/styles/Header.module.css';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

function Header() {
  const [isActive, setActive] = useState(true);
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
          <div className={clsx('l-b fs-700',styles.nav_center)}>
            <ol className={styles.nav_list}>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <span className="black ff-serif underline-r">About</span>
              </li>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <span className="black ff-serif underline-r">Blog</span>
              </li>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <span className="black ff-serif underline-r">Gallery</span>
              </li>
              <li
                className={`${
                  isActive ? styles.nav_links_close : styles.nav_links
                }`}
                onClick={navToggle}>
                <span className="black ff-serif underline-r">Contact</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.animation}>
        <nav className={styles.nav_container}>
          <div className={styles.menu_container} onClick={navToggle}>
            <div
              className={`${styles.burger} ${
                isActive ? '' : styles.burgerActive
              }`}></div>
          </div>
          <div className={styles.center_container}>
            <div className={styles.brand_container}>
              <Image
                src="/Brand.png"
                alt="Iamge of the brand"
                height={70}
                width={160}
              />
            </div>
          </div>
          <div className={styles.ecom_container}>
            <div className={styles.header_icon}>
              <Image
                src="/user.svg"
                alt="Iamge of the brand"
                height={45}
                width={45}
              />
            </div>
            <div className={styles.header_icon}>
              <Image
                src="/shopping-cart.svg"
                alt="Iamge of the brand"
                height={45}
                width={45}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
