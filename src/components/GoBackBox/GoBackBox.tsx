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
