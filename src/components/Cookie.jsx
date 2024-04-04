/** @format */
'use client';
import { useEffect, useState } from 'react';
import styles from '../app/styles/Cookie.module.css';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';

function Cookie() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('Joanne.com'));
  }, []);

  const acceptCookies = () => {
    setShowConsent(true);
    setCookie('Joanne.com', 'true', {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  if (showConsent) {
    return null;
  }

  return (
    <>
      <div className={styles.cookie_container}>
        <div className={styles.cookie_bar}>
          <p className={styles.intro}>
            This website uses cookies to improve user experience. By using our
            website you consent to the{' '}
            <Link href="/privacy">
              <span className="fw l-s upper white">privacy</span>
            </Link>{' '}
            statement and to our{' '}
            <Link href="/termsOfService">
              <span className="fw l-s upper white">Service</span>
            </Link>{' '}
            Statement
          </p>
          <div className={styles.btn_container} onClick={acceptCookies}>
            <div className={styles.btn}>
              <span className="accent upper l-2 fw">Accept</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cookie;
