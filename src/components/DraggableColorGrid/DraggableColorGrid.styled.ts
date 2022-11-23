import { Theme, styled } from "@mui/material/styles";

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

export const ColorBoxesContainer = styled(`main`, {
  shouldForwardProp: (prop) => prop !== `isDrawerOpen` && prop !== `drawerWidth`,
})<MainProps>(({
  theme,
  isDrawerOpen,
  drawerWidth
}) => ({
  display: `grid`,
  flexGrow: 1,
  gridTemplateColumns: `repeat(5, 1fr)`,
  gridTemplateRows: `repeat(4, 1fr)`,
  transition: (theme as Theme).transitions.create(`margin`, {
    duration: (theme as Theme).transitions.duration.leavingScreen,
    easing: (theme as Theme).transitions.easing.sharp,
  }),

  [theme.breakpoints.down(`md`)]: {
    gridTemplateColumns: `repeat(4, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(5, minmax(0, 1fr))`,
  },

  [theme.breakpoints.down(`sm`)]: {
    gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(10, minmax(0, 1fr))`,
  },

  "@media (max-width: 400px)": {
    gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(20, minmax(0, 1fr))`,
  },

  ...(isDrawerOpen && {
    marginLeft: `${drawerWidth}px`,
    transition: (theme as Theme).transitions.create(`margin`, {
      duration: (theme as Theme).transitions.duration.enteringScreen,
      easing: (theme as Theme).transitions.easing.easeOut,
    }),

    [`@media (max-width: ${theme.breakpoints.values.md + drawerWidth}px)`]: {
      gridTemplateColumns: `repeat(4, 1fr)`,
      gridTemplateRows: `repeat(5, 1fr)`,
    },

    [`@media (max-width: ${theme.breakpoints.values.sm + drawerWidth + 100}px)`]: {
      gridTemplateColumns: `repeat(2, 1fr)`,
      gridTemplateRows: `repeat(10, 1fr)`,
    },

    [`@media (max-width: ${theme.breakpoints.values.sm + 200}px)`]: {
      gridTemplateColumns: `repeat(1, 1fr)`,
      gridTemplateRows: `repeat(20, 1fr)`,
    },
  }),
}));
