import { ColorPalette } from '@/@types/typings';
import { Navigate, useParams } from 'react-router-dom';
import { findPalette } from '@/utils/findPalette/findPalette';
import PalettePage from '@/pages/PalettePage/PalettePage';
import React from 'react';

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

  return <PalettePage palette={palette} />;
};

export default PalettePageRoute;
