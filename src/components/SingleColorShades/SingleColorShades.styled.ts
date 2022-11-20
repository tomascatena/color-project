import { styled } from '@mui/system';

export const SingleColorShadesContainer = styled('section')(({ theme }) => ({
  display: 'grid',
  flex: 1,
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',

  [`@media (max-width: ${theme.breakpoints.values.md + 100}px)`]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(3, minmax(0, 1fr)) 8rem',
    gridTemplateAreas: `
      'a a a'
      'b b b'
      'c c c'
      'go-back-box go-back-box go-back-box'
    `,
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
    gridTemplateAreas: `
      'a' 'a' 'a' 'a' 'a' 'a' 'a' 'a' 'a'
      'go-back-box'
    `,
  },
}));
