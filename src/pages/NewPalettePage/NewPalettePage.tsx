
import {
  ColorDefinition,
  ColorPalette
} from '@/typings/typings';
import { DrawerHeader } from '@/components/CustomDrawer/customDrawer.styled';
import { NewPalettePageContainer } from './NewPalettePage.styled';
import { arrayMoveImmutable } from '@/utils/arrayMove/arrayMove';
import { useNavigate } from 'react-router-dom';
import CustomDrawer from '@/components/CustomDrawer/CustomDrawer';
import DraggableColorGrid from '@/components/DraggableColorGrid/DraggableColorGrid';
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
    { color: '#ff00ff', name: 'Magenta' },
    { color: '#00ffff', name: 'Cyan' },
    { color: '#000000', name: 'Black' },
    { color: '#ffffff', name: 'White' },
  ]);

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

  const deleteColor = (colorName: string) => {
    setColors(colors.filter(({ name }) => name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number; }) => {
    setColors(arrayMoveImmutable(colors, oldIndex, newIndex));
  };

  return (
    <NewPalettePageContainer>
      <NewPaletteAppBar
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
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

      <DraggableColorGrid
        axis='xy'
        colors={colors}
        deleteColor={deleteColor}
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
        onSortEnd={onSortEnd}
      />

      <NewPaletteNameDialog
        isDialogOpen={isNameDialogOpen}
        setIsDialogOpen={setIsNameDialogOpen}
        setNewPaletteName={setNewPaletteName}
        newPaletteName={newPaletteName}
        palettes={palettes}
        handleSavePalette={handleSavePalette}
      />
    </NewPalettePageContainer>
  );
};

export default NewPalettePage;
