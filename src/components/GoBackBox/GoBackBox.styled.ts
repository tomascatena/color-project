import { styled } from '@mui/system';

type ColorBoxContainerProps = {
  /**
   * The color of the box.
   */
  backgroundColor: string;
}

export const ColorBoxContainer = styled('div',
  { shouldForwardProp: (prop) => prop !== 'backgroundColor' }
)<ColorBoxContainerProps>(({
  backgroundColor,
}) => ({
  backgroundColor,
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  height: '100%',
}));

export const GoBackButton = styled('button')(() => ({
  background: 'rgba(255, 255, 255, 0.3)',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '1.2rem',
  left: '50%',
  outline: 'none',
  position: 'absolute',
  padding: '0.5rem 1rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
}));