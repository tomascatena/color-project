import { Theme } from '@mui/material';
import { styled } from '@mui/system';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  /**
   * State of the drawer
   */
  isDrawerOpen?: boolean;
  /**
   * Width of the drawer
   */
  drawerWidth: number;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isDrawerOpen' && prop !== 'drawerWidth',
})<AppBarProps>(({ theme, isDrawerOpen, drawerWidth }) => ({
  transition: (theme as Theme).transitions.create(['margin', 'width'], {
    easing: (theme as Theme).transitions.easing.sharp,
    duration: (theme as Theme).transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: (theme as Theme).transitions.create(['margin', 'width'], {
      easing: (theme as Theme).transitions.easing.easeOut,
      duration: (theme as Theme).transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBarContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const ButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
}));
