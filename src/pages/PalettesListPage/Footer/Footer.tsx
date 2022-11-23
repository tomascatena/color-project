import { FooterContainer } from './Footer.styled';
import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
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

export default Footer;
