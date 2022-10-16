import { ColorPalette } from '@/typings/typings';
import { Link } from 'react-router-dom';
import React from 'react';

type Props = {
  /**
   * Array of palettes
   */
  palettes: ColorPalette[];
};

const PalettesListPage = ({ palettes }: Props) => {
  return (
    <div>
      <h1>Palettes Page</h1>

      {palettes.map((palette) => (
        <Link
          key={palette.id}
          to={`/palettes/${palette.id}`}
        >
          <p>{palette.paletteName}</p>
        </Link>
      ))}
    </div >
  );
};

export default PalettesListPage;
