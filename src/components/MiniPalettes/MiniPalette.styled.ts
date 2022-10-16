import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
}));

export const MiniPaletteContainer = styled('div')(() => ({
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '.5rem',
  overflow: 'hidden',
  position: 'relative',

  '&:hover': {
    cursor: 'pointer',
  },
}));

export const MiniPaletteColors = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  height: '10rem',
}));

export const MiniPaletteFooter = styled('div')(() => ({
  alignItems: 'center',
  backgroundColor: '#d4d4d4',
  color: 'black',
  display: 'flex',
  fontSize: '1rem',
  justifyContent: 'space-between',
  padding: '.2rem .5rem',
}));
