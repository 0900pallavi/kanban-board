import React from "react";
import { Typography, Box } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
const Header = ({ title, subtitle }) => {
  const { broken } = useProSidebar();
  return (
    <Box mb="30px">
      <Typography
        // variant="h2"
        color="#141414"
        fontWeight="bold"
        fontSize={broken ? "35px" : "46px"}
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
