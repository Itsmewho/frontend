/** @format */
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchShoot } from '@/utils/request';
import styles from './DetailShoot.module.css'
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
        console.error('Error fetching Shoot:', error);
      } finally {
        setLoading(false);
      }
    };

    if (shoot === null) {
      fetchShootData();
    }
  }, [id, shoot]);

  if (!shoot && !loading) {
    return (
      <div className="page-wrapper">
        <h1 className="ff-serif fs-500 fw">
          Shoots Not Found
        </h1>
      </div>
    );
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
          </section>
        </>
      )}
    </>
  );
}

export default DetailShop;
