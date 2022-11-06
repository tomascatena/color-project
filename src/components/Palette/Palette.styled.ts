import { styled } from '@mui/system';

export const PaletteColors = styled('section')(() => ({
  display: 'grid',
  flex: 1,
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
}));
