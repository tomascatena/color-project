import { BaseEmoji, Emoji } from 'emoji-mart/dist-es';
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
import EmojiPickerDialog from '@/components/NewPalette/EmojiPickerDialog/EmojiPickerDialog';
import NewPaletteAppBar from '@/components/NewPalette/NewPaletteAppBar/NewPaletteAppBar';
import NewPaletteForm from '@/components/NewPalette/NewPaletteForm/NewPaletteForm';
import NewPaletteNameDialog from '../../components/NewPalette/NewPaletteNameDialog/NewPaletteNameDialog';
import React from 'react';
import useGetDeviceSeize from '@/hooks/useGetDeviceSize';

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
  const { isMobile } = useGetDeviceSeize();

  const DRAWER_WIDTH = isMobile ? window.innerWidth : 360;
  const navigate = useNavigate();

  const [colors, setColors] = React.useState<ColorDefinition[]>(palettes[0].colors);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const [isEmojiPickerDialogOpen, setIsEmojiPickerDialogOpen] = React.useState(false);
  const [isNameDialogOpen, setIsNameDialogOpen] = React.useState(false);
  const [newPaletteName, setNewPaletteName] = React.useState('');

  const handleSavePalette = (emoji: BaseEmoji) => {
    const newPalette = {
      colors,
      emoji: emoji.id,
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

  const preFetchEmojisSheet = async () => {
    if (Emoji.defaultProps?.backgroundImageFn) {
      const url = Emoji.defaultProps.backgroundImageFn('apple', 32);

      await fetch(url);
    }
  };

  React.useEffect(() => {
    preFetchEmojisSheet();
  }, []);

  return (
    <NewPalettePageContainer>
      <NewPaletteAppBar
        drawerWidth={DRAWER_WIDTH}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        setIsNameDialogOpen={setIsNameDialogOpen}
        colors={colors}
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
        openEmojiPickerDialog={() => setIsEmojiPickerDialogOpen(true)}
      />

      <EmojiPickerDialog
        isDialogOpen={isEmojiPickerDialogOpen}
        setIsDialogOpen={setIsEmojiPickerDialogOpen}
        handleSavePalette={handleSavePalette}
      />
    </NewPalettePageContainer>
  );
};

export default NewPalettePage;
