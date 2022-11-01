import { DRAWER_WIDTH } from '@/constants/drawer';
import { Theme } from '@mui/material';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  /**
   * State of the drawer
   */
  isDrawerOpen?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen',
})<AppBarProps>(({ theme, isDrawerOpen }) => ({
  transition: (theme as Theme).transitions.create(['margin', 'width'], {
    easing: (theme as Theme).transitions.easing.sharp,
    duration: (theme as Theme).transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: (theme as Theme).transitions.create(['margin', 'width'], {
      easing: (theme as Theme).transitions.easing.easeOut,
      duration: (theme as Theme).transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...(theme as Theme).mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const StyledDrawer = styled(Drawer,)(() => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
  },
}));
