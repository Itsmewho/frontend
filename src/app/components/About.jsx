/** @format */
'use client';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import('locomotive-scroll')).default;
      new Locomotive({
        smooth: true,
      });
    }

    getLocomotive();
  }, []);

  return (
    <section>
      <div className="page-wrapper" data-scroll-section>
        <div className={styles.about_container}>
          <div className={styles.about_grid}>
            <div className={styles.leftside}>
              <div className={styles.wrapper}>
                <div className={styles.gradient}>
                  <div
                    className={styles.text_wrapper2}
                    data-scroll
                    data-scroll-class={styles.fadeIn}>
                    <h1 className="fs-900 fw italic l-2">
                      Be Your <span className="ff-serif fw accent">own</span>
                    </h1>
                    <h2 className="fs-800 fw italic">Creation</h2>
                  </div>
                </div>
              </div>
              <div className={styles.image_container}>
                <div className={styles.circleImg}>
                  <div className={styles.image_circle}>
                    <div
                      className={styles.image}
                      data-scroll
                      data-scroll-class={styles.scale}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightside}>
              <div className={styles.circle_container}>
                <div className={styles.circle_wrapper}>
                  <div className={styles.circle}>
                    <Image
                      src="/Social-min.png"
                      alt="Socail image"
                      height={220}
                      width={220}
                    />
                  </div>
                  <div
                    className={styles.thumb}
                    data-scroll
                    data-scroll-class={styles.fadeIn}>
                    <Image
                      src="/thumbs-up.svg"
                      alt="approved image"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.text_container}>
                <div
                  className={styles.text_wrapper}
                  data-scroll
                  data-scroll-class={styles.fadeRight}>
                  <p className="ff-sans  fs-400 l-m">
                    Beneath the surface lies a woman with a story. A journey of
                    determination, that has shaped her into the woman she is
                    today. Joanne invites you to join her on journey.
                  </p>
                  <div className={styles.btn_container}>
                    <Link href="/about">
                      <div className={styles.btn}>
                        <span className="accent upper fs-400">
                          About Joanne
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
