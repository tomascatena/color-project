import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const FooterContainer = styled(`footer`)(({ theme }) => ({
  alignItems: `center`,
  display: `flex`,
  fontSize: `1.2rem`,
  fontWeight: 500,
  gap: theme.spacing(2),
  height: `2.5rem`,
  justifyContent: `space-between`,
  padding: `0 ${theme.spacing(2)}`,
  borderTop: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.down(`sm`)]: {
    justifyContent: `center`,
  },
}));

export const PaletteDescription = styled(`p`)(({ theme }) => ({
  alignItems: `center`,
  display: `flex`,
  gap: theme.spacing(2),
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(0.5),

  [theme.breakpoints.down(`sm`)]: {
    display: `none`,
  },
}));
