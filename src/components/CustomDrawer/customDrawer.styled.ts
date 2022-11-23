import { Theme } from '@mui/material';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';

export const DrawerHeader = styled(`div`)(({ theme }) => ({
  display: `flex`,
  alignItems: `center`,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...(theme as Theme).mixins.toolbar,
  justifyContent: `flex-end`,
}));

type StyledDrawerProps = {
  /**
   * Width of the drawer
   */
  drawerWidth: number | string;
}

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== `drawerWidth`,
})<StyledDrawerProps>(({ drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,

  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: `border-box`,
  },
}));
