/** @format */
import styles from '../app/styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <>
      <div className="page-wrapper">
        <div className={styles.footer_container}>
          <div className={styles.link_container}>
            <div className={styles.brand}>
              <Link href="/">
                <Image
                  src="/Brandlight.png"
                  alt="Iamge of the brand"
                  height={70}
                  width={160}
                />
              </Link>
            </div>
            <div className={styles.social}>
              <div className={styles.animate}>
                <Link href={''}>
                  <Image
                    src="/instagram.svg"
                    alt="Instagram icon"
                    height={50}
                    width={50}
                  />
                </Link>
              </div>
              <div className={styles.animate}>
                <Link href={''}>
                  <Image
                    src="/tiktok.svg"
                    alt="Tiktok icon"
                    height={50}
                    width={50}
                  />
                </Link>
              </div>
              <div className={styles.animate}>
                <Link href="/charity">
                  <Image src="/leaf.svg" alt="Charity" height={50} width={50} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.regulations}>
            <Link href="/privacy">
              <span className="white fw l-m">Privacy</span>
            </Link>
            <Link href="/termsOfService">
              <span className="white fw l-m">Service</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
