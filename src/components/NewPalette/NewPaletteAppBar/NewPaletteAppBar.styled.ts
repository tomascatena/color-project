import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/system";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

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

type AppBarContentProps = {
  /**
   * Wether the drawer is open or not
   */
  isDrawerOpen?: boolean;
};

export const AppBarContent = styled(`div`, {
  shouldForwardProp: (prop) => prop !== `isDrawerOpen`,
})<AppBarContentProps>(({
  theme,
  isDrawerOpen,
}) => ({
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `space-between`,
  width: `100%`,

  ...(isDrawerOpen && {
    [theme.breakpoints.down(`md`)]: {
      flexDirection: `column`,
    },
  }),

  [theme.breakpoints.down(`sm`)]: {
    flexDirection: `column`,
  },
}));

export const ButtonsContainer = styled(`div`)(({ theme }) => ({
  display: `flex`,
  gap: theme.spacing(6),

  [theme.breakpoints.down(`sm`)]: {
    gap: theme.spacing(2),
  },
}));

type AppBarTitleProps = {
  /**
   * Wether the drawer is open or not
   */
  isDrawerOpen: boolean;
};

export const AppBarTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== `isDrawerOpen`,
})<AppBarTitleProps>(({
  isDrawerOpen,
  theme
}) => ({
  fontSize: `1.5rem`,
  fontWeight: 500,
  color: theme.palette.text.primary,

  ...(isDrawerOpen && {
    [theme.breakpoints.down(`md`)]: {
      display: `none`,
    },
  }),

  [theme.breakpoints.down(`sm`)]: {
    display: `none`,
  },
}));
