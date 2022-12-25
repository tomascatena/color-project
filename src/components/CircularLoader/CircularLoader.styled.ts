import { styled } from '@mui/system';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';

export const CircularProgressBackground = styled(CircularProgress,)(({ theme }) => ({
  color: theme.palette.mode === `light` ? theme.palette.grey[200] : theme.palette.grey[800],
}));

type CircularProgressAnimatedProps = {
  duration: number;
};

export const CircularProgressAnimated = styled(CircularProgress, {
  shouldForwardProp: (prop) => prop !== `duration`,
})<CircularProgressAnimatedProps>(({ duration }) => ({
  animationDuration: `${duration}ms`,
  position: `absolute`,
  left: 0,

  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: `round`,
  }
}));
