import { ColorPalette } from '@/typings/typings';
import { Navigate, useParams } from 'react-router-dom';
import { findPalette } from '@/utils/findPalette';
import React from 'react';

const SingleColorPageAsync = React.lazy(() => import('@/pages/SingleColorPage/SingleColorPage'));

type Props = {
  palettes: ColorPalette[];
};

const SingleColorPageRoute = ({ palettes }: Props) => {
  const { paletteId, colorId } = useParams();

  if (!paletteId || !colorId) {
    return <Navigate to="/" />;
  }

  const palette = findPalette(palettes, paletteId);

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
