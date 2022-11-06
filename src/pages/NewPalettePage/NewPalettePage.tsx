
import {
  ColorBoxesContainer,
  NewPalettePageContainer
} from './NewPalettePage.styled';
import {
  ColorDefinition,
  ColorPalette
} from '@/typings/typings';
import { DrawerHeader } from '@/components/CustomDrawer/customDrawer.styled';
import { useNavigate } from 'react-router-dom';
import CustomDrawer from '@/components/CustomDrawer/CustomDrawer';
import DraggableColorBox from '@/components/NewPalette/DraggableColorBox/DraggableColorBox';
import NewPaletteAppBar from '@/components/NewPalette/NewPaletteAppBar/NewPaletteAppBar';
import NewPaletteForm from '@/components/NewPalette/NewPaletteForm/NewPaletteForm';
import NewPaletteNameDialog from '../../components/NewPalette/NewPaletteNameDialog/NewPaletteNameDialog';
import React from 'react';

type Props = {
  /**
   * Function to save the new palette in local storage
   */
  savePalette: (newPalette: ColorPalette) => void;
  /**
   * Array of palettes
   */
  palettes: ColorPalette[];
};

const NewPalettePage = ({
  palettes,
  savePalette
}: Props) => {
  const DRAWER_WIDTH = 360;
  const navigate = useNavigate();

  const [newPaletteName, setNewPaletteName] = React.useState('');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const [isNameDialogOpen, setIsNameDialogOpen] = React.useState(false);
  const [colors, setColors] = React.useState<ColorDefinition[]>([
    { color: '#0000ff', name: 'Blue' },
    { color: '#ff0000', name: 'Red' },
    { color: '#00ff00', name: 'Green' },
    { color: '#ffff00', name: 'Yellow' },
  ]);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleSavePalette = () => {
    const newPalette = {
      colors,
      emoji: '🐈',
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      paletteName: newPaletteName,
    };

    savePalette(newPalette);

    navigate('/');
  };

  return (
    <NewPalettePageContainer>
      <NewPaletteAppBar
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        setIsNameDialogOpen={setIsNameDialogOpen}
      />

      <CustomDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        drawerWidth={DRAWER_WIDTH}
      >
        <NewPaletteForm
          colors={colors}
          setColors={setColors}
        />
      </CustomDrawer>

      <DrawerHeader />

      <ColorBoxesContainer
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
      >
        {
          colors.map((color) => (
            <DraggableColorBox
              key={color.name}
              color={color}
            />
          ))
        }
      </ColorBoxesContainer>

      <NewPaletteNameDialog
        isDialogOpen={isNameDialogOpen}
        setIsDialogOpen={setIsNameDialogOpen}
        setNewPaletteName={setNewPaletteName}
        newPaletteName={newPaletteName}
        palettes={palettes}
      />
    </NewPalettePageContainer>
  );
};

export default NewPalettePage;
