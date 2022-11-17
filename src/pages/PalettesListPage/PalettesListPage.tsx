import { ColorPalette } from '@/typings/typings';
import { Container } from '@mui/system';
import { Emoji } from 'emoji-mart/dist-es';
import {
  Link,
  useNavigate
} from 'react-router-dom';
import {
  PalettesList,
  PalettesListContainer,
  PalettesListHeader,
} from './PalettesListPage.styled';
import { Typography } from '@mui/material';
import MiniPalette from '@/components/MiniPalette/MiniPalette';
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
    <PalettesListContainer>
      <Container maxWidth='lg'>
        <PalettesListHeader>
          <Typography variant='h4'>
            Color Palettes Project{' '}

            <Emoji
              emoji=':art:'
              size={24}
              set='apple'
              native
            />
          </Typography>

          <Link to='/new-palette'>
            <Typography variant='h6'>Create New Palette</Typography>
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
    </PalettesListContainer>
  );
};

export default PalettesListPage;
