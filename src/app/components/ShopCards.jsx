/** @format */
'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../shop/Shop.module.css';
import Image from 'next/image';

function ShopCards({ shoots }) {
  const image = `${shoots.images[2]}`;
  const image1 = `${shoots.images[3]}`;
  const image2 = `${shoots.images[4]}`;

  const imgArry = [image, image1, image2];

  const [imageIDX, setImageIDX] = useState(0);

  function nextIamge() {
    setImageIDX((idx) => {
      if (idx === 0) return imgArry.length - 1;
      return idx - 1;
    });
  }
  function prevImage() {
    setImageIDX((idx) => {
      if (idx === imgArry.length - 1) return 0;
      return idx + 1;
    });
  }

  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.slider}>
          <div className={styles.slider_container}>
            {imgArry.map((url, _id) => (
              <Image
                key={_id}
                priority={true}
                className={styles.slider_image}
                style={{ translate: `${-100 * imageIDX}%` }}
                alt={shoots.alt}
                src={url}
                height={0}
                width={0}
                sizes="100vw"
              />
            ))}
          </div>
          <button className={styles.arrow_left} onClick={nextIamge}>
            <Image
              className={styles.arrow}
              height={50}
              width={40}
              src="/angle-left.svg"
              alt="Button"
            />
          </button>
          <button className={styles.arrow_right} onClick={prevImage}>
            <Image
              className={styles.arrow}
              height={50}
              width={40}
              src="/angle-right.svg"
              alt="Button"
            />
          </button>
        </div>
        <div className={styles.description}>
          <div className={styles.gridtext}>
            <span className="ff-serif fw fs-400 l-m italic l-2">
              {shoots.name}
            </span>
            <span className="l-4">${shoots.price}</span>
            <span>*With commercial license</span>
            <p className="ff-sans fs-400 l-s">{shoots.short}</p>
          </div>
          <div className={styles.btn_container}>
            <Link href={`/shop/${shoots._id}`}>
              <div className={styles.btn}>
                <span className="accent upper fs-400">Go Items</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCards;
