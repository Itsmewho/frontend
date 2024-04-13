/** @format */

import styles from './Shop.module.css';
import Shoots from '@/gallery.json';
import ShopCards from '../components/ShopCards';

export const metadata = {
  title: 'Joanne',
  description: 'hello world',
};

function Shop()  {

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
}

export default Shop;
