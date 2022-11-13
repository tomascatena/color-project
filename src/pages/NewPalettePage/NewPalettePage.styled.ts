import { Theme, styled } from '@mui/material/styles';

export const NewPalettePageContainer = styled('div')(() => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

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
  flexGrow: 1,
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
