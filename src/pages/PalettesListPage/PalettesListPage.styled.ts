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
}));
