import { Button, Theme } from '@mui/material';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  /**
   * State of the drawer
   */
  isDrawerOpen?: boolean;
  /**
   * Width of the drawer
   */
  drawerWidth: number | string;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== `isDrawerOpen` && prop !== `drawerWidth`,
})<AppBarProps>(({ theme, isDrawerOpen, drawerWidth }) => ({
  transition: (theme as Theme).transitions.create([`margin`, `width`], {
    easing: (theme as Theme).transitions.easing.sharp,
    duration: (theme as Theme).transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: (theme as Theme).transitions.create([`margin`, `width`], {
      easing: (theme as Theme).transitions.easing.easeOut,
      duration: (theme as Theme).transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled(`div`)(({ theme }) => ({
  display: `flex`,
  alignItems: `center`,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...(theme as Theme).mixins.toolbar,
  justifyContent: `flex-end`,
}));

interface StyledDrawerProps extends MuiAppBarProps {
  /**
   * State of the drawer
   */
  isDrawerOpen?: boolean;
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

export const StyledForm = styled(`form`)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  gap: theme.spacing(2),
  width: `100%`,
}));

export const NewPaletteFormContainer = styled(`div`)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));

interface AddColorButtonProps {
  /**
   * Background color of the button
   */
  backgroundColor: string;
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const AddColorButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== `backgroundColor` && prop !== `isDarkColor`,
})<AddColorButtonProps>(({
  backgroundColor,
  isDarkColor
}) => ({
  backgroundColor,
  color: isDarkColor ? `#fff` : `#000`,

  "&:hover": {
    backgroundColor,
  },
}));

export const ButtonsContainer = styled(`div`)(({ theme }) => ({
  display: `flex`,
  width: `100%`,
  flexDirection: `column`,
  gap: theme.spacing(2),
}));
