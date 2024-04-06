/** @format */
'use client';
import CLipLoader from 'react-spinners/CircleLoader';

function loading({ loading }) {
  const override = {
    display: 'block',
    margin : '100px auto'
  }
  return (
    <CLipLoader
      color="ff5e3d"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"></CLipLoader>
  );
}

export default loading;
