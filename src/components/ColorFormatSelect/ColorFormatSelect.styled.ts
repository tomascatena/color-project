import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';

export const SelectContainer = styled(FormControl)(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  marginLeft: `auto`,

  [theme.breakpoints.up(`lg`)]: {
    marginRight: `3rem`,
    minWidth: `17rem`,
  },

  [theme.breakpoints.down(`lg`)]: {
    marginRight: `1rem`,
    minWidth: `10rem`,
  },
}));
