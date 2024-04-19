/** @format */
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  
  return (
    <>
      <div className="page-wrapper">
        <div className={styles.footer_container}>
          <div className={styles.link_container}>
            <div className={styles.brand}>
              <Link href="/" prefetch={false}>
                <Image
                  className={styles.image}
                  src="/Brandlight.png"
                  alt="Image of the brand"
                  height={73}
                  width={160}
                />
              </Link>
            </div>
            <div className={styles.social}>
              <div className={styles.animate}>
                <Link href={''} prefetch={false}>
                  <Image
                    src="/instagram.svg"
                    alt="Instagram icon"
                    height={50}
                    width={50}
                  />
                </Link>
              </div>
              <div className={styles.animate}>
                <Link href={''} prefetch={false}>
                  <Image
                    src="/tiktok.svg"
                    alt="Tiktok icon"
                    height={50}
                    width={50}
                  />
                </Link>
              </div>
              <div className={styles.animate}>
                <Link href="/" prefetch={false}>
                  <Image src="/lock-keyhole-open.svg" alt="OF" height={50} width={50} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.regulations}>
            <Link href="/privacy" prefetch={false}>
              <span className="white fw l-m">Privacy</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
