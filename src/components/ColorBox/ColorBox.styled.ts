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
  cursor: 'pointer',
  display: 'inline-block',
  height: '25%',
  margin: '0 auto',
  position: 'relative',
  width: '20%',

  '&:hover button': {
    opacity: 1,
    transition: 'opacity 0.3s ease-in-out 0.1s',
  },
}));

export const CopyContainer = styled('div')(() => ({}));

export const BoxContent = styled('div')(() => ({}));

export const CopyButton = styled('button')(() => ({
  background: 'rgba(255, 255, 255, 0.3)',
  border: 'none',
  color: 'white',
  display: 'inline-block',
  fontSize: '1rem',
  height: '2rem',
  left: '50%',
  lineHeight: '2rem',
  outline: 'none',
  position: 'absolute',
  textAlign: 'center',
  textTransform: 'uppercase',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '8rem',
  opacity: 0,
}));

export const SeeMoreText = styled('span')(() => ({
  textTransform: 'uppercase',
}));
