import { styled } from '@mui/system';

export const MiniPaletteContainer = styled('div')(() => ({
  backgroundColor: '#fff',
  border: '1px solid transparent',
  borderRadius: '.5rem',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all .2s ease-in-out',

  '&:hover': {
    cursor: 'pointer',
  },
}));

export const MiniPaletteColors = styled('div')(() => ({
  backgroundColor: '#dae1e4',
  border: '1px solid transparent',
  borderRadius: '.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  height: '13rem',
  margin: '.5rem .5rem 0 .5rem',
  overflow: 'hidden',
}));

export const MiniPaletteFooter = styled('div')(() => ({
  alignItems: 'center',
  color: 'black',
  display: 'flex',
  fontSize: '1rem',
  justifyContent: 'space-between',
  padding: '.4rem .5rem',
}));
