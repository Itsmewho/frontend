/** @format */
import Link from 'next/link';
import styles from '../shoots/Shoot.module.css';
import Image from 'next/image';

function ShootCards({ shoots }) {

return (
    <>
      <div className={styles.card_container}>
        <div className={styles.slider}>
          <div className={styles.slider_container}>

              <Image
                priority={true}
                className={styles.slider_image}
                alt={shoots.alt}
                src={shoots.image}
                height={0}
                width={0}
                sizes="100vw"
              />
          </div>
        </div>
        <div className={styles.description}>
          <article className={styles.gridtext}>
            <span className="ff-serif fw fs-400 l-m italic l-2">
              {shoots.name}
            </span>
            <p className="ff-sans fs-400 l-s">{shoots.short}</p>
          </article>
          <div className={styles.btn_container}>
            <Link href={`/shoots/${shoots._id}`}>
              <div className={styles.btn}>
                <span className="accent upper fs-400">Go Shoot</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShootCards;
