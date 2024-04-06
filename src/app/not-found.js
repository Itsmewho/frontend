/** @format */
'use client';
import styles from '../../src/app/styles/NotFound.module.css';
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();
  return (
    <>
      <div className={styles.not_found}>
        <div className={styles.text_container}>
          <h1 className="fs-900 white fw l-m">404</h1>
          <h2 className="ff-sans l-b fw white fs-700">
            Seems monkey's doing the work today
          </h2>
          <button
            type="button"
            onClick={() => router.back()}
            className={styles.button}>
            Click here to go back
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
