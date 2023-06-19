import React from "react";
import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color="#141414"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#70d8bd">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
