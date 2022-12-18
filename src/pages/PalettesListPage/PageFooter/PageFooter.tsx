import { FooterContainer } from './PageFooter.styled';
import { Typography } from '@mui/material';
import React from 'react';

const PageFooter = () => {
  return (
    <FooterContainer>
      <Typography
        variant="h6"
        textAlign="center"
      >
        Created by Tomas Catena. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default PageFooter;
