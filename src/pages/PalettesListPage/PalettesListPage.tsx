import { Box } from '@mui/material';
import { ColorPalette } from '@/typings/typings';
import { Container } from '@mui/system';
import {
  Link,
  useNavigate
} from 'react-router-dom';
import {
  PalettesList,
  PalettesListHeader,
} from './PalettesListPage.styled';
import MiniPalette from '@/components/MiniPalettes/MiniPalette';
import React from 'react';

type Props = {
  /**
   * Array of palettes
   */
  palettes: ColorPalette[];
  /**
   * Function to delete a palette from local storage
   */
  removePalette: (paletteId: string) => void;
};

const PalettesListPage = ({
  palettes,
  removePalette
}: Props) => {
  const navigate = useNavigate();

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
              <MiniPalette
                key={palette.id}
                palette={palette}
                handleClick={() => navigate(`/palettes/${palette.id}`)}
                removePalette={removePalette}
              />
            ))
          }
        </PalettesList>
      </Container>
    </Box>
  );
};

export default PalettesListPage;
