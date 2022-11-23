import { FooterContainer } from "./Footer.styled";
import { Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <Typography
        variant="body1"
        textAlign="center"
      >
        Created by Tomas Catena. All rights reserved. Copyright &copy; 2022.
      </Typography>

      <Typography
        variant="body2"
        textAlign="center"
      >
        Free SVG Background by{` `}
        <Link
          rel="noreferrer"
          target="_blank"
          href="https://bgjar.com"
          color="inherit"
          variant="body2"
        >
          BGJar
        </Link>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
