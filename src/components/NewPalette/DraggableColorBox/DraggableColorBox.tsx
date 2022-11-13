import {
  BoxContent,
  DraggableColorBoxContainer,
  StyledIconButton
} from './DraggableColorBox.styled';
import { ColorDefinition } from '@/typings/typings';
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
  handleDeleteColor: (colorName: string) => void;
};

const DraggableColorBox = ({
  color,
  handleDeleteColor
}: Props) => {
  const isDarkColor = chroma(color.color).luminance() <= 0.35;

  const tooltipTitle = (
    <React.Fragment>
      <Typography variant="body2">Delete Color</Typography>
    </React.Fragment>
  );

  return (
    <DraggableColorBoxContainer color={color.color}>
      <BoxContent isDarkColor={isDarkColor}>
        <span>{color.name}</span>

        <Tooltip title={tooltipTitle}>
          <StyledIconButton
            onClick={() => handleDeleteColor(color.name)}
            isDarkColor={isDarkColor}
          >
            <DeleteOutlineIcon />
          </StyledIconButton>
        </Tooltip>
      </BoxContent>
    </DraggableColorBoxContainer>
  );
};

export default DraggableColorBox;
