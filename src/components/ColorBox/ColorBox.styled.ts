import { styled } from '@mui/system';

type StyledColorBoxProps = {
  /**
   * The color of the box.
   */
  backgroundColor: string;
}

export const StyledColorBox = styled('div',
  { shouldForwardProp: (prop) => prop !== 'backgroundColor' }
)<StyledColorBoxProps>(({ backgroundColor }) => ({
  backgroundColor,
  width: '20%',
  height: '25%',
  margin: '0 auto',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
}));
