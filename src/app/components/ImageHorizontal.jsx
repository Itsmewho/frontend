/** @format */
import styles from '../styles/ImageHorizontal.module.css';
import Cards from './Cards';
import { fetchShoots } from '@/utils/request';
import Link from 'next/link';

const ImageHorizontal = async () => {
  const Shoots = await fetchShoots();

  const recent = Shoots.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <>
      <section>
        <div className="page-wrapper" data-scroll-section>
          <div className={styles.intro_container}>
            <h1 className="fs-800 l-bf fw italic">Previous</h1>
            <h2 className="fs-500 ff-sans accent">- Shoots - </h2>
          </div>
          {Shoots.length === 0 ? (
            <p className={styles.no_id}>No Shoots found,.. Server Error,. </p>
          ) : (
            <div className={styles.grid}>
              {recent.map((Shoots) => (
                <Cards key={Shoots._id} gallery={Shoots}></Cards>
              ))}
            </div>
          )}
          <div className={styles.outro}>
            <div className={styles.p_outro}>
              <p className="fs-400 l-2 l-m">
                With each click of the camera, excitement danced through me.
                It's a journey of discovery.
              </p>
              <div className={styles.btn_container}>
                <Link href="/shoots">
                  <div className={styles.btn}>
                    <span className="accent upper fs-400">Go To Shoots</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageHorizontal;
