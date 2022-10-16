import { generatePalette } from '@/utils/colorHelpters';
import Palette from '@/components/Palette/Palette';
import React from 'react';
import seedPalettes from '@/data/seedPalettes';

const HomePage = () => {
  return (
    <div>
      <Palette palette={generatePalette(seedPalettes[2])} />
    </div>
  );
};

export default HomePage;
