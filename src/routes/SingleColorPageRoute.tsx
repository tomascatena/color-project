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

  const isColorInPalette = palette.colors.some((color) => color.name.toLowerCase() === colorId);

  if (!isColorInPalette) {
    return <Navigate to="/" />;
  }

  return (
    <SingleColorPageAsync
      colorId={colorId}
      palette={palette}
    />
  );
};

export default SingleColorPageRoute;
