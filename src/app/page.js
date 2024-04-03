/** @format */

'use client';
import styles from './Home.module.css';
import { clsx } from 'clsx';
import { useEffect } from 'react';

export default function Home() {
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
    <>
      <section>
        <div className="page-wrapper">
          <div className="l-4 l-b">
            <h1 className={clsx('l-4 l-b', styles.world)}>Hello world boeie</h1>
            <p className="fw">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              natus porro facilis accusantium blanditiis minima reprehenderit
              obcaecati veritatis a earum atque officiis asperiores eveniet,
              alias amet nobis laborum consequatur veniam.
            </p>
          </div>
        </div>
        <div className={styles.height}></div>
      </section>
    </>
  );
}
