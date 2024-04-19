/** @format */

import styles from './Shoot.module.css';
import ShopCards from '../components/ShootCards';
import { fetchShoots } from '@/utils/request';
import PCotnrols from '../components/PCotnrols';

export const metadata = {
  title: 'Joanne',
  description: 'shoots',
};

const Shop = async ({ searchParams }) => {
  const Shoots = await fetchShoots();

  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '9';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = Shoots.slice(start, end);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className={styles.shop_container}>
            <div className={styles.grid}>
              {entries.map((entry) => (
                <ShopCards key={entry._id} shoots={entry}></ShopCards>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="page-wrapper">
        <PCotnrols></PCotnrols>
      </section>
    </>
  );
};

export default Shop;
