import {
  ColorBoxContainer,
  GoBackButton,
} from './GoBackBox.styled';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Props = {
  /**
   * Background color of the color box
   */
  backgroundColor: string;
  /**
   * Id of the palette
   */
  paletteId: string;
};

/**
 * <h3>Component with the link to navigate back to the palette</h3>
 * <p>
 * The container component must specify the height and width.
 * </p>
 */
const GoBackBox = ({
  backgroundColor,
  paletteId,
}: Props) => {
  const navigate = useNavigate();

  return (
    <ColorBoxContainer backgroundColor={backgroundColor}>
      <GoBackButton onClick={() => navigate(`/palettes/${paletteId}`)}>
        Go Back
      </GoBackButton>
    </ColorBoxContainer>
  );
};

export default GoBackBox;
