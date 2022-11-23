import { styled } from '@mui/system';

export const SliderContainer = styled(`div`)(({ theme }) => ({
  alignItems: `center`,
  display: `flex`,
  gap: `1rem`,
  width: `20rem`,

  [theme.breakpoints.down(`md`)]: {
    maxWidth: `13rem`,
  },
}));

export const LevelText = styled(`span`)(({ theme }) => ({
  fontSize: `1.2rem`,
  fontWeight: 500,

  [theme.breakpoints.down(`md`)]: {
    fontSize: `1.1rem`,
  },
}));
