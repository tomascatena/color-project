import { Box } from '@mui/material';
import { ColorPalette } from '@/typings/typings';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import {
  PalettesList,
  PalettesListHeader
} from './PalettesListPage.styled';
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
    <Box sx={{ backgroundColor: 'steelblue', minHeight: '100vh' }}>
      <Container maxWidth='md'>
        <PalettesListHeader>
          <h1>Color Palettes Project</h1>

          <Link to='/new-palette'>
            Create New Palette
          </Link>
        </PalettesListHeader>

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
    </Box>
  );
};

export default PalettesListPage;
