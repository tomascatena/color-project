import { ColorBoxesContainer } from './DraggableColorGrid.styled';
import { ColorDefinition } from '@/@types/typings';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '@/components/DraggableColorGrid/DraggableColorBox/DraggableColorBox';
import React from 'react';

interface Props {
  /**
   * Array of colors (name and hex code)
   */
  colors: ColorDefinition[];
  /**
   * Function to delete a color
   */
  deleteColor: (colorName: string) => void;
  /**
   * Width of the drawer
   */
  drawerWidth: number | string;
  /**
   * Whether the drawer is open or not
   */
  isDrawerOpen: boolean;
};

/**
 * <h3>Draggable color grid component</h3>
 * <p>
 * This component must be wrapped in a flex container to use the full height of the parent.
 * </p>
 */
const DraggableColorGrid = ({
  colors,
  deleteColor,
  drawerWidth,
  isDrawerOpen
}: Props) => {
  return (
    <ColorBoxesContainer
      drawerWidth={drawerWidth}
      isDrawerOpen={isDrawerOpen}
    >
      {
        colors.map((color, index) => (
          <DraggableColorBox
            index={index}
            key={color.name}
            color={color}
            deleteColor={deleteColor}
            isDrawerOpen={isDrawerOpen}
          />
        ))
      }
    </ColorBoxesContainer>
  );
};

export default SortableContainer<Props>(DraggableColorGrid);
