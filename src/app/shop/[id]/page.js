/** @format */
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchShoot } from '@/utils/request';
import styles from './DetailShop.module.css';
import ShootHeader from '@/app/components/ShootHeader';

function DetailShop() {
  const { id } = useParams();
  const [shoot, setShoot] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShootData = async () => {
      if (!id) return;
      try {
        const shoot = await fetchShoot(id);
        setShoot(shoot);
      } catch (error) {
        console.log('Error  fetching shoot');
      } finally {
        setLoading(false);
      }
    };
    if (shoot === null) {
      fetchShootData();
    }
  }, [id, shoot]);

  if (!shoot && !loading) {
    return new Response('ugh you fucked up again', { status: 404 });
  }

  return (
    <>
      {!loading && shoot && (
        <>
          <ShootHeader
            image={shoot.images[0]}
            alt={shoot.alt}
            name={shoot.name}></ShootHeader>
          <section>
            <div className="page-wrapper">
              <div className={styles.grid}>
                <div className={styles.leftside}>
                  <div className={styles.main}>
                    <div className={styles.main_description}>
                      <h1 className="ff-serif fw l-m italic fs-400">NAME:</h1>
                      <p className="ff-sans">{shoot.name}</p>
                      <h2 className="ff-serif fw l-m italic fs-400">
                        Description:
                      </h2>
                      <p className="ff-sans">{shoot.description}</p>
                    </div>
                    <div className={styles.main_rights}>
                      <h3 className="ff-serif fw l-m italic fs-400">
                        After purchase license:
                      </h3>
                      <p className="ff-sans">
                        Joanne grants you worldwide copyright license to
                        download, copy, modify, distribute, perform, and use
                        photos from Joanne. Including commercial purposes,
                        without permission from or attributing Joanne. This
                        license does not include the right to compile photos
                        from Joanne to replicate a similar or competing service.
                      </p>
                      <h4 className="ff-serif fw l-m italic fs-400">
                        Not permitted:
                      </h4>
                      <ol className="ff-sans">
                        <li className="ff-sans">
                          Photos cannot be sold without significant
                          modification.
                        </li>
                        <li className="ff-sans">
                          Compiling photos from Joanne to replicate a similar or
                          competing service.
                        </li>
                      </ol>
                    </div>
                    <div className={styles.main_images}>
                      <div className={styles.main_desc}>
                        <h5 className="ff-serif fw l-m italic fs-400">
                          Whats included:
                        </h5>
                        <p>
                          All images in the download package are 4k resolution
                        </p>
                        <p>
                          All images included are shown below in lower
                          resolution:{' '}
                        </p>
                      </div>
                      <div className={styles.image_lightbox}></div>
                    </div>
                    <div className={styles.main_faq}>
                      <h6 className="ff-serif fw l-b italic fs-400">FAQ:</h6>
                      <span className="ff-serif fw l-m italic fs-400">
                        Where do i get my downloads?
                      </span>
                      <ol className="ff-sans">
                        <li className="ff-sans">
                          The photo's will be downloaded after purchase. You can
                          find them in your download folder.
                        </li>
                        <li className="ff-sans">
                          The download link will be visible after purchase.
                          Click on it!
                        </li>
                        <li className="ff-sans">
                          The photos will be accessible in your account.
                        </li>
                      </ol>
                      <span className="ff-serif fw l-m italic fs-400">
                        What do i need to do for an account?
                      </span>
                      <ol className="ff-sans">
                        <li className="ff-sans">
                          You can sign in with your google account
                        </li>
                        <li className="ff-sans">
                          Register an account. Click on the register icon in the
                          top right corner
                        </li>
                      </ol>
                      <span className="ff-serif fw l-m italic fs-400">
                        What if the download doesn't work?
                      </span>
                      <p>
                        So, you mist out on all 3 downloads. And can't find the
                        download-links. You can send me a E-mail with recipes
                        and ill send it to you personally.
                      </p>
                      <span className="ff-serif fw l-m italic fs-400">
                        Where can I contact you?
                      </span>
                      <p>
                        In the top left corner, you'll find the menu. If you
                        click on it, you will find the link to the contact page.
                        Or send E-mail to {''}
                        <span className="fw">joanne@joanne.com</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.rightside}>
                  <div className={styles.actions}>
                    <div className={styles.cta_container}>
                      <button className={styles.btn_one}>Add bookmark</button>
                      <button className={styles.btn_two}>
                        Share on social
                      </button>
                      <div className={styles.atc_container}>
                        <div className={styles.data}>
                          <span className="fs-400 fw">Product:</span>
                          <span className="l-s">{shoot.name}</span>
                          <span className="fs-400 fw">
                            Price:
                          </span>
                          <span>$ {shoot.price}</span>
                        </div>
                        <div className={styles.addto}>
                          <button className={styles.btn_three}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default DetailShop;
