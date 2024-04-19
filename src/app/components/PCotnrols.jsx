/** @format */

'use client';
import styles from '../shoots/Shoot.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const PCotnrols = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '9';

  return (
    <>
      <div className="page-wrapper">
        <div className={styles.center}>
          <button
            className={styles.nbtn}
            disabled={!hasPrevPage}
            onClick={() => {
              router.push(
                `/shoots?page=${Number(page) - 1}&per_page=${per_page}`
              );
            }}>
                        <Image
              className={styles.image}
              src="/angle-left.svg"
              alt="Iamge of the brand"
              height={25}
              width={25}
            />
          </button>
          <div className="ff-sans fs-400">
            {page} / {Math.ceil(10 / Number(per_page))}
          </div>
          <button
            className={styles.nbtn}
            disabled={!hasNextPage}
            onClick={() => {
              router.push(
                `/shoots?page=${Number(page) + 1}&per_page=${per_page}`
              );
            }}>
            <Image
              className={styles.image}
              src="/angle-right.svg"
              alt="Iamge of the brand"
              height={25}
              width={25}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default PCotnrols;
