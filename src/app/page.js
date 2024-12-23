/** @format */
import styles from './Home.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ImageHorizontal = dynamic(() =>
  import('./components/ImageHorizontal', { ssr: false })
);
const About = dynamic(() => import('./components/About'));





export default function Home() {


  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className={styles.hero_container}>
            <div className={styles.title_container}>
              <p className="fs-900 ff-serif upper fw">
                A <span className="accent ff-serif italic">view</span>
              </p>
              <p className="fs-900 ff-serif upper fw">Everyone</p>
              <p className="fs-900 ff-serif upper fw">Can Afford</p>
            </div>
            <div className={styles.image_container}>
              <div className={styles.circleImg}>
                <div className={styles.image_circle}>
                  <div className={styles.image} />
                </div>
              </div>
            </div>
            <div className={styles.cta_container}>
              <p className="fs-400 l-m">
                Where sensuality meets playfulness. Explore my world of
                temptation, while subtly giving you warmth and comfort, creating
                an new experience.
              </p>
              <div className={styles.btn_container}>
                <div className={styles.btn_container}>
                  <Link href="/shoots">
                    <div className={styles.btn}>
                      <span className="accent upper l-2 fs-400">
                        Go to shoots
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About></About>
      <ImageHorizontal></ImageHorizontal>
    </>
  );
}
