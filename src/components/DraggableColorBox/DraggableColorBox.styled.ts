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
  /**
   * Weather the drawer is open.
   */
  isDrawerOpen: boolean;
}

export const BoxContent = styled('div',
  { shouldForwardProp: (prop) => prop !== 'isDarkColor' && prop !== 'isDrawerOpen' }
)<BoxContentProps>(({
  isDarkColor,
  isDrawerOpen,
  theme
}) => ({
  alignItems: 'center',
  color: isDarkColor ? '#fff' : '#000',
  display: 'flex',
  fontSize: '1rem',
  fontWeight: 400,
  justifyContent: 'space-between',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  padding: '0.5rem',
  textTransform: 'uppercase',

  '@media (max-width: 400px)': {
    padding: '0.1rem',
  },

  ...(isDrawerOpen && {
    [`@media (max-width: ${theme.breakpoints.values.sm + 200}px)`]: {
      padding: '0.1rem',
    },
  }),
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
