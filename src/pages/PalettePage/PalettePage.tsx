import { ColorPalette } from '@/typings/typings';
import { generatePalette } from '@/utils/colorHelpters';
import Palette from '@/components/Palette/Palette';
import React from 'react';

type Props = {
  palette: ColorPalette;
};

const HomePage = ({ palette }: Props) => {
  return (<Palette palette={generatePalette(palette)} />);
};

export default HomePage;
