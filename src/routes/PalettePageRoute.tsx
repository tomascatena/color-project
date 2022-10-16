import { Navigate, useParams } from 'react-router-dom';
import { findPalette } from '@/utils/findPalette';
import React from 'react';

const PalettePageAsync = React.lazy(() => import('@/pages/PalettePage/PalettePage'));

const PalettePageRoute = () => {
  const { paletteId } = useParams();

  if (!paletteId) {
    return <Navigate to="/" />;
  }

  const palette = findPalette(paletteId);

  if (!palette) {
    return <Navigate to="/" />;
  }

  return <PalettePageAsync palette={palette} />;
};

export default PalettePageRoute;
