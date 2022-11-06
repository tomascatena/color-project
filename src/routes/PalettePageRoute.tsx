import { ColorPalette } from '@/typings/typings';
import { Navigate, useParams } from 'react-router-dom';
import { findPalette } from '@/utils/findPalette';
import React from 'react';

const PalettePageAsync = React.lazy(() => import('@/pages/PalettePage/PalettePage'));

type Props = {
  palettes: ColorPalette[];
};

const PalettePageRoute = ({ palettes }: Props) => {
  const { paletteId } = useParams();

  if (!paletteId) {
    return <Navigate to="/" />;
  }

  const palette = findPalette(palettes, paletteId);

  if (!palette) {
    return <Navigate to="/" />;
  }

  return <PalettePageAsync palette={palette} />;
};

export default PalettePageRoute;
