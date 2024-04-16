/** @format */

import Image from 'next/image';
import styles from '../shoots/[id]/DetailShoot.module.css';
import Link from 'next/link';

function ShootHeader({ image, alt, name }) {
  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className={styles.container}>
            <div className={styles.image_container}>
              <Image
                className={styles.image}
                src={`${image}`}
                alt={alt}
                height={0}
                width={0}
                sizes="100vw"
                priority></Image>
              <div className={styles.name_container}>
                <h1 className="ff-serif fs-800 white l-2 l-b fw italic">
                  {name}
                </h1>
              </div>
            </div>
          </div>
          <div className="page-wrapper">
            <div className={styles.back}>
              <div className={styles.btn_container}>
                <Link href="/shoots">
                  <div className={styles.btn}>
                    <span className="accent upper fs-400">Go Back</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShootHeader;
