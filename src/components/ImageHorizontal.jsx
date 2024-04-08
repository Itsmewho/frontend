/** @format */
'use client';
import styles from '../app/styles/ImageHorizontal.module.css';
import Blogs from '@/gallery.js';
import Cards from './Cards';
import { useEffect } from 'react';
import Link from 'next/link';

function ImageHorizontal() {
  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import('locomotive-scroll')).default;
      new Locomotive({});
    }
    getLocomotive();
  }, []);
  const recent = Blogs.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <>
      <section>
        <div className="page-wrapper" data-scroll-section>
          <div
            className={styles.intro_container}
            data-scroll
            data-scroll-offset="100px"
            data-scroll-class={styles.animate}
            data-scroll-repeat="true">
            <h1 className="fs-800 l-bf fw italic">Previous</h1>
            <h2 className="fs-500 ff-sans accent">- SHOOTS - </h2>
          </div>
          {Blogs.length === 0 ? (
            <p className={styles.no_id}>No Shoots found,.. Server Error,. </p>
          ) : (
            <div className={styles.grid}>
              {recent.map((Blogs) => (
                <Cards key={Blogs._id} gallery={Blogs}></Cards>
              ))}
            </div>
          )}
          <div
            className={styles.outro}
            data-scroll
            data-scroll-offset="100px"
            data-scroll-class={styles.animate}
            data-scroll-repeat="true">
            <div className={styles.p_outro}>
              <p className="fs-400 l-2 l-m">
                With each click of the camera, excitement danced through me.
                It's a journey of discovery.
              </p>
              <div className={styles.btn_container}>
                <Link href="/gallery">
                  <div className={styles.btn}>
                    <span className="accent upper fs-400">Go to gallery</span>
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

export default ImageHorizontal;
