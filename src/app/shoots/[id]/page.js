/** @format */
import { fetchShoot } from '@/utils/request';
import styles from './DetailShoot.module.css';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export const metadata = {
  title: 'Joanne',
  description: 'shoots id',
};

export default async function DetailShop({ params }) {
  const post = await fetchShoot(params.id);

  return (
    <>
      <>
        <section>
          <div className="page-wrapper">
            <div className={styles.container}>
              <div className={styles.image_container}>
                <Image
                  className={styles.image}
                  src={post.image}
                  alt={post.alt}
                  height={0}
                  width={0}
                  sizes="100vw"
                  priority></Image>
                <div className={styles.name_container}>
                  <h1 className="ff-serif fs-800 white l-2 l-b fw italic">
                    {post.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.btn_container}>
                <Link href="/shoots" prefetch={false}>
                  <div className={styles.btn}>
                    <span className="accent upper fs-400">Go Back</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="page-wrapper">
            <article className={styles.main_wrapper}>
              <div className={styles.detail_grid}>
                <div className={styles.d_leftside}>
                  <p
                    className={clsx(
                      'fw l-3 l-m fs-500 ff-serif italic',
                      styles.subtitle
                    )}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <div className={styles.detail_img}>
                    <Image
                      src={post.images[0]}
                      alt={post.alt}
                      height={0}
                      width={0}
                      sizes="100vw"
                      className={styles.detail_image}></Image>
                  </div>
                </div>
                <div className={styles.d_rightside}>
                  <p className="fs-400 l-2 l-s">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit odit laborum, facere nulla corporis ipsam recusandae
                    culpa debitis eum quisquam. Beatae ratione necessitatibus in
                    culpa, dolore numquam tenetur nobis fugit.
                  </p>
                  <p className="fs-400 l-2 l-s">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit odit laborum, facere nulla corporis ipsam recusandae
                    culpa debitis eum quisquam. Beatae ratione necessitatibus in
                    culpa, dolore numquam tenetur nobis fugit.
                  </p>
                </div>
              </div>
              <div className={styles.shorts}>
                <div className={clsx('fs-400 l-2 l-s', styles.short_text)}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores ipsam illum dolore,
                </div>
                <div className={clsx('fs-400 l-2 l-s', styles.short_text)}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores ipsam illum dolore,
                </div>
                <div className={clsx('fs-400 l-2 l-s', styles.short_text)}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores ipsam illum dolore,
                </div>
              </div>
              <div className={styles.detail_grid2}>
                <div className={styles.d_leftside2}>
                  <p className="fs-400 l-2 l-s">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus eligendi aspernatur doloremque, ab vel ea hic
                    mollitia quam amet asperiores odio animi aliquam quisquam,
                    repellendus tenetur odit corrupti in similique!
                  </p>
                  <p className={clsx('fs-400 l-2 l-s', styles.p_mobile)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus eligendi aspernatur doloremque, ab vel ea hic
                    mollitia quam amet asperiores odio animi aliquam quisquam,
                    repellendus tenetur odit corrupti in similique!
                  </p>
                </div>
                <div className={styles.d_rightside2}>
                  <div className={styles.detail_img2}>
                    {' '}
                    <Image
                      src={post.images[1]}
                      alt={post.alt}
                      height={0}
                      width={0}
                      sizes="100vw"
                      className={styles.detail_image2}></Image>
                  </div>
                </div>
              </div>
              <div className={styles.detail_cta}>
                <p className="fs-400 l-b ff-sans">Share on social!</p>
                <div className={styles.cta_container}>
                  <button>share</button>
                </div>
              </div>
              <div className={styles.lightbox}>
                <div>
                  <Image
                    src={post.images[2]}
                    alt={post.alt}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className={styles.detail_image}></Image>
                </div>
                <div>
                  <Image
                    src={post.images[3]}
                    alt={post.alt}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className={styles.detail_image}></Image>
                </div>
              </div>
              <div className={styles.detail_cta}>
                <p className="fs-400 l-b ff-sans">Share on social!</p>
                <div className={styles.cta_container}>
                  <button>share</button>
                </div>
              </div>
              <div className={styles.detail_cta}>
                <div>
                  <Link href="/shoots" prefetch={false}>
                    <div className={styles.btn}>
                      <span className="accent upper fs-400">More shoots</span>
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </>
    </>
  );
}
