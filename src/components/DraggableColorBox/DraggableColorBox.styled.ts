import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

type DraggableColorBoxContainerProps = {
  color: string;
};

export const DraggableColorBoxContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<DraggableColorBoxContainerProps>(({ color }) => ({
  display: 'inline-block',
  backgroundColor: color,

  '&:hover': {
    cursor: 'grab',
  },
}));

type BoxContentProps = {
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const BoxContent = styled('div',
  { shouldForwardProp: (prop) => prop !== 'isDarkColor' }
)<BoxContentProps>(({ isDarkColor }) => ({
  alignItems: 'center',
  color: isDarkColor ? '#fff' : '#000',
  display: 'flex',
  fontSize: '1rem',
  fontWeight: 600,
  justifyContent: 'space-between',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  padding: '0.5rem',
  textTransform: 'uppercase',
}));

type StyledIconButtonProps = {
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const StyledIconButton = styled(IconButton,
  { shouldForwardProp: (prop) => prop !== 'isDarkColor' }
)<StyledIconButtonProps>(({ isDarkColor }) => ({
  color: isDarkColor ? '#fff' : '#000',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    transform: 'scale(1.1)'
  }
}));
