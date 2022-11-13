import { Theme, styled } from '@mui/material/styles';

type MainProps = {
  /**
   * Width of the drawer
   */
  drawerWidth: number;
  /**
   * State of the drawer
   */
  isDrawerOpen: boolean;
}

export const ColorBoxesContainer = styled('main', {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen' && prop !== 'drawerWidth',
})<MainProps>(({ theme, isDrawerOpen, drawerWidth }) => ({
  display: 'grid',
  flexGrow: 1,
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  transition: (theme as Theme).transitions.create('margin', {
    duration: (theme as Theme).transitions.duration.leavingScreen,
    easing: (theme as Theme).transitions.easing.sharp,
  }),
  ...(isDrawerOpen && {
    marginLeft: `${drawerWidth}px`,
    transition: (theme as Theme).transitions.create('margin', {
      duration: (theme as Theme).transitions.duration.enteringScreen,
      easing: (theme as Theme).transitions.easing.easeOut,
    }),
  }),
}));
