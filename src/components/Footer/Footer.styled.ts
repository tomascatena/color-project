import { styled } from "@mui/system";

export const FooterContainer = styled(`footer`)(({ theme }) => ({
  alignItems: `center`,
  display: `flex`,
  fontSize: `1.2rem`,
  fontWeight: 500,
  gap: theme.spacing(2),
  height: `2.5rem`,
  justifyContent: `flex-end`,
  marginRight: theme.spacing(2),
}));
