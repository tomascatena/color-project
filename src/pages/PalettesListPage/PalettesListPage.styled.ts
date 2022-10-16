import { styled } from '@mui/system';

export const PalettesList = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  padding: '2rem 0',
}));
