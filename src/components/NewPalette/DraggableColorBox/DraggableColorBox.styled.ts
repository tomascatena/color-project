import { styled } from '@mui/system';

type DraggableColorBoxContainerProps = {
  color: string;
};

export const DraggableColorBoxContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<DraggableColorBoxContainerProps>(({ color }) => ({
  display: 'inline-block',
  backgroundColor: color,
}));
