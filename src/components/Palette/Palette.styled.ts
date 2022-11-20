import { styled } from '@mui/system';

export const PaletteColors = styled('section')(({ theme }) => ({
  display: 'grid',
  flex: 1,
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(4, minmax(0, 1fr))',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(20, minmax(0, 1fr))',
  },
}));
