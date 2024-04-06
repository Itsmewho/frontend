/** @format */
import styles from '../app/styles/Mcards.module.css';
import clsx from 'clsx';
import Image from 'next/image'


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
            sizes='100vw'
            className={styles.card_image}>
            </Image>
          </div>
          <div className={styles.overlay}>
            <span className={clsx('upper ff-serif white ff-800', styles.text)}>
              VIEW
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
