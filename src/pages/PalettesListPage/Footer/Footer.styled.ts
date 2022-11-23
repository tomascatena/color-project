import { styled } from "@mui/system";

export const FooterContainer = styled(`footer`)(({ theme }) => ({
  alignItems: `center`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: `flex`,
  flexDirection: `column`,
  gap: theme.spacing(1),
  justifyContent: `center`,
  marginTop: theme.spacing(10),
  padding: theme.spacing(2),
}));
