/** @format */
import { fetchShoot } from '@/utils/request';
import styles from './DetailShoot.module.css';
import ShootHeader from '@/app/components/ShootHeader';



export const metadata = {
  title: 'Joanne',
  description: 'shoots id',
};


export default async function DetailShop( {params})  {
  const post = await fetchShoot(params.id)

  return (
    <>
      <>
        <section>
          <ShootHeader image={post.images[0]} alt={post.alt} name={post.name}></ShootHeader>
        </section>
        <section>
          <div className="page-wrapper">
            <article>

              
            </article>
            <h1 className="fs-900">{post.name}</h1>
          </div>
        </section>
      </>
    </>
  );
}
