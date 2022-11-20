import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const NavbarContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  height: '3rem',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#000',
  backgroundColor: '#d4d4d4',
  lineHeight: '3rem',
  padding: '0 1rem',
  fontSize: '1.2rem',
  fontWeight: 500,

  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
}));

export const NavbarTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,
  alignSelf: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },

  '@media (max-width: 660px)': {
    display: 'none'
  }
}));
