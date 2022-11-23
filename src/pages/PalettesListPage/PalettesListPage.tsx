import { ColorPalette } from '@/@types/typings';
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
  TitleContainer,
} from './PalettesListPage.styled';
import { Typography } from '@mui/material';
import Footer from './Footer/Footer';
import MiniPalette from '@/components/MiniPalette/MiniPalette';
import React from 'react';
import useGetDeviceSeize from '@/hooks/useGetDeviceSize';

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

  const { isMobile } = useGetDeviceSeize();

  return (
    <PalettesListContainer>
      <Container maxWidth='md'>
        <PalettesListHeader>
          <TitleContainer>
            {
              !isMobile && (
                <Emoji
                  emoji=':art:'
                  size={isMobile ? 20 : 28}
                  set='apple'
                  native
                />
              )
            }

            <Typography variant='h4'>

              Color Palettes Project
            </Typography>
          </TitleContainer>

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

      <Footer />
    </PalettesListContainer>
  );
};

export default PalettesListPage;
