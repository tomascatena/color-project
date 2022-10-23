import React from 'react';

type Props = {
  /**
   * Id of the color
   */
  colorId: string;
  /**
   * Id of the palette
   */
  paletteId: string;
};

const ColorShadesPage = ({ colorId, paletteId }: Props) => {
  return (
    <div>
      <h1>Single color page</h1>
      <h2>ColorId: {colorId}</h2>
      <h2>PaletteId: {paletteId}</h2>
    </div>
  );
};

export default ColorShadesPage;
