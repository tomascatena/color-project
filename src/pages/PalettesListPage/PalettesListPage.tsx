import { ColorPalette } from '@/typings/typings';
import { Container } from '@mui/system';
import { PalettesList } from './PalettesListPage.styled';
import { StyledLink } from '@/components/MiniPalettes/MiniPalette.styled';
import MiniPalette from '@/components/MiniPalettes/MiniPalette';
import React from 'react';

type Props = {
  /**
   * Array of palettes
   */
  palettes: ColorPalette[];
};

const PalettesListPage = ({ palettes }: Props) => {
  return (
    <Container>
      <h1>Palettes Page</h1>

      <PalettesList>
        {
          palettes.map((palette) => (
            <StyledLink
              style={{ textDecoration: 'none' }}
              key={palette.id}
              to={`/palettes/${palette.id}`}
            >
              <MiniPalette palette={palette} />
            </StyledLink>
          ))
        }
      </PalettesList>
    </Container >
  );
};

export default PalettesListPage;
