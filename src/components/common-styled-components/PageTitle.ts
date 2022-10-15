import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const PageTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
}));
