/** @format */

import styles from './Shop.module.css';
import ShopCards from '../components/ShopCards';
import { fetchShoots } from '@/utils/request';


export const metadata = {
  title: 'Joanne',
  description: 'hello world',
};


const Shop = async () => {
  const Shoots = await fetchShoots();

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className={styles.shop_container}>
            <div className={styles.grid}>
              {Shoots.map((Shoots) => (
                <ShopCards key={Shoots._id} shoots={Shoots}></ShopCards>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
