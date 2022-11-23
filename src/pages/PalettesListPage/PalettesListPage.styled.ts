import { styled } from '@mui/system';
import backgroundImage from './background.svg';

export const PalettesList = styled(`main`)(({ theme }) => ({
  display: `grid`,
  gridTemplateColumns: `repeat(3, 1fr)`,
  gap: `2rem`,

  [theme.breakpoints.down(`md`)]: {
    gridTemplateColumns: `repeat(2, 1fr)`,
  },

  [theme.breakpoints.down(`sm`)]: {
    gridTemplateColumns: `repeat(1, 1fr)`,
  },
}));

export const PalettesListHeader = styled(`header`)(({ theme }) => ({
  color: `white`,
  alignItems: `center`,
  display: `flex`,
  justifyContent: `space-between`,
  padding: `1.5rem 0`,

  "& a": {
    color: `white`,
    textDecoration: `underline`,
  },

  [theme.breakpoints.down(`sm`)]: {
    flexDirection: `column`,
    alignItems: `flex-start`,
    gap: theme.spacing(1),
  },
}));

export const PalettesListContainer = styled(`div`)(() => ({
  backgroundImage: `url(${backgroundImage})`,
  /* background by SVGBackgrounds.com */

  backgroundPosition: `center`,
  backgroundSize: `cover`,
  minHeight: `100vh`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
}));

export const TitleContainer = styled(`div`)(({ theme }) => ({
  display: `flex`,
  gap: theme.spacing(1),
}));
