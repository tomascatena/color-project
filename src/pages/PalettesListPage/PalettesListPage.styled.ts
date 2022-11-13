import { styled } from '@mui/system';

export const PalettesList = styled('main')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
}));

export const PalettesListHeader = styled('header')(() => ({
  color: 'white',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5rem 0',

  '& a': {
    color: 'white',
    textDecoration: 'underline',
  }
}));

export const PalettesListContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'steelblue',
  minHeight: '100vh',
  paddingBottom: theme.spacing(10),
}));
