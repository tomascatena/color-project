import { styled } from '@mui/system';

type ColorBoxContainerProps = {
  /**
   * The color of the box.
   */
  backgroundColor: string;
}

export const ColorBoxContainer = styled(`div`,
  { shouldForwardProp: (prop) => prop !== `backgroundColor` }
)<ColorBoxContainerProps>(({ backgroundColor, }) => ({
  backgroundColor,
  display: `inline-block`,
  height: `100%`,
  margin: `0 auto`,
  position: `relative`,
  width: `100%`,

  "&:hover button": {
    opacity: 1,
    transition: `opacity 0.3s ease-in-out 0.1s`,
  },
}));

type BoxContentProps = {
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const BoxContent = styled(`div`, {
  shouldForwardProp: (prop) => prop !== `isDarkColor`,
})<BoxContentProps>(({ isDarkColor }) => ({
  color: isDarkColor ? `#fff` : `#000`,
  fontSize: `1rem`,
  fontWeight: 400,
  overflow: `hidden`,
  padding: `0.5rem`,
  textTransform: `uppercase`,

  "& span": {
    overflowWrap: `break-word`,
  }
}));

type CopyButtonProps = {
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const CopyButton = styled(`button`, {
  shouldForwardProp: (prop) => prop !== `isDarkColor`,
})<CopyButtonProps>(({ isDarkColor, theme }) => ({
  background: isDarkColor ? `rgba(255, 255, 255, 0.3)` : `rgba(0, 0, 0, 0.1)`,
  border: `none`,
  color: isDarkColor ? `#fff` : `#000`,
  cursor: `pointer`,
  display: `inline-block`,
  fontWeight: 500,
  fontSize: `1.2rem`,
  left: `50%`,
  opacity: 0,
  outline: `none`,
  position: `absolute`,
  padding: `0.5rem 1rem`,
  textAlign: `center`,
  textTransform: `uppercase`,
  top: `50%`,
  transform: `translate(-50%, -50%)`,
  width: `40%`,

  [theme.breakpoints.down(`md`)]: {
    fontSize: `1rem`,
    padding: `0.4rem 0.5rem`,
    top: `50%`,
  },

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `0.8rem`,
    padding: `0.3rem 0.4rem`,
    top: `50%`,
    left: `60%`,
  },
}));

type SeeMoreTextProps = {
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const SeeMoreText = styled(`span`, {
  shouldForwardProp: (prop) => prop !== `isDarkColor`,
})<SeeMoreTextProps>(({ isDarkColor }) => ({
  backgroundColor: `rgba(255, 255, 255, 0.3)`,
  bottom: `0`,
  color: isDarkColor ? `#fff` : `#000`,
  fontSize: `0.8rem`,
  height: `2rem`,
  letterSpacing: `1.5px`,
  lineHeight: `1rem`,
  padding: `0.5rem`,
  position: `absolute`,
  right: `0`,
  textAlign: `center`,
  textTransform: `uppercase`,
  width: `5rem`,
  cursor: `pointer`,
}));

type CopyOverlayProps = {
  /**
   * The background color of the overlay.
   */
  backgroundColor: string;
}

export const CopyOverlay = styled(`div`, {
  shouldForwardProp: (prop) => prop !== `backgroundColor`,
})<CopyOverlayProps>(({ backgroundColor }) => ({
  backgroundColor,
  height: `100%`,
  opacity: 0,
  position: `absolute`,
  transform: `scale(0.1)`,
  width: `100%`,
  zIndex: 0,

  "&.showCopyOverlay": {
    opacity: 1,
    overflow: `hidden`,
    transform: `scale(50)`,
    transition: `transform .8s ease-in-out`,
    zIndex: 1,
  },
}));

type CopyMessageProps = {
  /**
   * Weather the color is dark.
   */
  isDarkColor: boolean;
}

export const CopyMessage = styled(`div`, {
  shouldForwardProp: (prop) => prop !== `isDarkColor`,
})<CopyMessageProps>(({
  isDarkColor,
  theme
}) => ({
  color: isDarkColor ? `#fff` : `#000`,
  fontSize: `3rem`,
  left: `50%`,
  opacity: 0,
  position: `fixed`,
  textAlign: `center`,
  textTransform: `uppercase`,
  top: `50%`,
  transform: `translate(-50%, -50%) scale(0.1)`,
  width: `100%`,
  zIndex: 2,

  "&.showCopyMessage": {
    opacity: 1,
    transform: `translate(-50%, -50%) scale(1)`,
    transition: `all 0.4s ease-in-out 0.3s`,
  },

  "& h1": {
    background: `rgba(255, 255, 255, 0.3)`,
    color: isDarkColor ? `#fff` : `rgba(0, 0, 0, 0.7)`,
    fontWeight: 500,
    textShadow: isDarkColor ? `1px 2px #000` : `1px 2px #fff`,
    width: `100%`,
  },

  [theme.breakpoints.down(`sm`)]: {
    fontSize: `2rem`,
  },
}));
