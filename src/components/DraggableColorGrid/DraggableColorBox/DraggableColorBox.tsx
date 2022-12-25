import {
  BoxContent,
  DraggableColorBoxContainer,
  StyledIconButton
} from './DraggableColorBox.styled';
import { ColorDefinition } from '@/@types/typings';
import { SortableElement } from 'react-sortable-hoc';
import {
  Tooltip,
  Typography
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react';
import chroma from 'chroma-js';

type Props = {
  /**
   * Color definition (color name and hex color)
   */
  color: ColorDefinition;
  /**
   * Function to delete a color
   */
  deleteColor: (colorName: string) => void;
  /**
   * Whether the drawer is open or not
   */
  isDrawerOpen: boolean;
};

/**
 * <h3>Draggable color box component</h3>
 * <p>
 * This component must be wrapped in a SortableContainer component.
 * </p>
 */
const DraggableColorBox = ({
  color,
  deleteColor,
  isDrawerOpen
}: Props) => {
  const isDarkColor = chroma(color.color).luminance() <= 0.35;

  const tooltipTitle = (
    <React.Fragment>
      <Typography variant="body2">Delete Color</Typography>
    </React.Fragment>
  );

  return (
    <DraggableColorBoxContainer color={color.color}>
      <BoxContent
        isDrawerOpen={isDrawerOpen}
        isDarkColor={isDarkColor}
      >
        <span>{color.name}</span>

        <Tooltip title={tooltipTitle}>
          <StyledIconButton
            onClick={() => deleteColor(color.name)}
            isDarkColor={isDarkColor}
          >
            <DeleteOutlineIcon />
          </StyledIconButton>
        </Tooltip>
      </BoxContent>
    </DraggableColorBoxContainer>
  );
};

export default SortableElement<Props>(DraggableColorBox);
