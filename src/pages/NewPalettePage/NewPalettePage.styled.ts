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

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen' && prop !== 'drawerWidth',
})<MainProps>(({ theme, isDrawerOpen, drawerWidth }) => ({
  transition: (theme as Theme).transitions.create('margin', {
    easing: (theme as Theme).transitions.easing.sharp,
    duration: (theme as Theme).transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    transition: (theme as Theme).transitions.create('margin', {
      easing: (theme as Theme).transitions.easing.easeOut,
      duration: (theme as Theme).transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  })
}));
