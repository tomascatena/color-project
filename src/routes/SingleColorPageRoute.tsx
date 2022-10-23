import { Navigate, useParams } from 'react-router-dom';
import { findPalette } from '@/utils/findPalette';
import React from 'react';

const SingleColorPageAsync = React.lazy(() => import('@/pages/SingleColorPage/SingleColorPage'));

const SingleColorPageRoute = () => {
  const { paletteId, colorId } = useParams();

  if (!paletteId || !colorId) {
    return <Navigate to="/" />;
  }

  const palette = findPalette(paletteId);

  if (!palette) {
    return <Navigate to="/" />;
  }

  return (
    <SingleColorPageAsync
      paletteId={paletteId}
      colorId={colorId}
    />
  );
};

export default SingleColorPageRoute;
