import {
  ColorBoxContainer,
  CopyButton,
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
      <CopyButton onClick={() => navigate(`/palettes/${paletteId}`)}>
        Go Back
      </CopyButton>
    </ColorBoxContainer>
  );
};

export default GoBackBox;
