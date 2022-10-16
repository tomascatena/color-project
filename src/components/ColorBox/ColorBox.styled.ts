import { styled } from '@mui/system';

type ColorBoxContainerProps = {
  /**
   * The color of the box.
   */
  backgroundColor: string;
}

export const ColorBoxContainer = styled('div',
  { shouldForwardProp: (prop) => prop !== 'backgroundColor' }
)<ColorBoxContainerProps>(({ backgroundColor }) => ({
  backgroundColor,
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

export const ColorBoxContent = styled('div')(() => ({
  alignContent: 'flex-end',
  alignItems: 'flex-end',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  marginTop: 'auto',
}));

export const BoxContent = styled('div')(() => ({
  padding: '0.5rem',
  width: '100%',
  color: '#000',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontSize: '0.8rem',
}));

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
  cursor: 'pointer',
}));

export const SeeMoreText = styled('span')(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  bottom: '0',
  color: '#fff',
  fontSize: '0.8rem',
  height: '2rem',
  letterSpacing: '1.5px',
  lineHeight: '1rem',
  padding: '0.5rem',
  position: 'absolute',
  right: '0',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '5rem',
}));

type CopyOverlayProps = {
  /**
   * The color of the box.
   */
  backgroundColor: string;
}

export const CopyOverlay = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<CopyOverlayProps>(({ backgroundColor }) => ({
  backgroundColor,
  height: '100%',
  opacity: 0,
  position: 'absolute',
  transform: 'scale(0.1)',
  width: '100%',
  zIndex: 0,

  '&.show': {
    opacity: 1,
    overflow: 'hidden',
    transform: 'scale(50)',
    transition: 'transform 0.6s ease-in-out',
    zIndex: 10,
  },
}));
