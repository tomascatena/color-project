import { styled } from '@mui/material/styles';

export const DeletePaletteIcon = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.error.light,
  color: 'white',
  cursor: 'pointer',
  padding: theme.spacing(0.5),
  position: 'absolute',
  right: '0',
  top: '0',
  transition: 'all .3s ease-in-out .1s',
  border: `1px solid ${theme.palette.error.main}`,
  borderRadius: '0 0 0 .5rem',
  opacity: 0,
}));

export const MiniPaletteFooter = styled('div')(() => ({
  alignItems: 'center',
  color: 'black',
  display: 'flex',
  fontSize: '1rem',
  justifyContent: 'space-between',
  padding: '.4rem .5rem',
}));

export const MiniPaletteColors = styled('div')(() => ({
  backgroundColor: '#dae1e4',
  border: '1px solid transparent',
  borderRadius: '.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  height: '10rem',
  margin: '.5rem .5rem 0 .5rem',
  overflow: 'hidden',
}));

export const MiniPaletteContainer = styled('div')(() => ({
  backgroundColor: '#fff',
  border: '1px solid transparent',
  borderRadius: '.5rem',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all .2s ease-in-out',

  '&:hover': {
    cursor: 'pointer',

    [`& ${DeletePaletteIcon}`]: {
      opacity: 1,
    }
  },
}));
