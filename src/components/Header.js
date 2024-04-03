/** @format */
/** @format */
import styles from '../app/styles/Header.module.css';
import clsx from 'clsx';


function Header() {
  return (
    <>
      <nav>
        <div className={styles.nav_container}>
          <div className={styles.menu_container}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.center_container}>
            <div className={styles.brand_container}>
              <span className={clsx('ff-serif fs-600 l-b ', styles.title)}>
                Joanne
              </span>
            </div>
          </div>
          <div className={styles.ecom_container}></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
