/** @format */
'use client';
import styles from '../styles/Mcards.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

function Cards({ gallery }) {
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card_img_wrapper}>
          <div className={styles.card_img}>
            <Image
              src={gallery.images[1]}
              alt={gallery.alt}
              height={0}
              width={0}
              sizes="100vw"
              className={styles.card_image}></Image>
          </div>
          <Link href={`/shop/${gallery._id}`}>
            <div className={styles.overlay}>
              <span
                className={clsx('upper ff-serif l-b white fs-500', styles.text)}>
                VIEW
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards;
