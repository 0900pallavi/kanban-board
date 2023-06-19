import React from "react";
import { useContext } from "react";
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import img from "../../assets/img";
import './sidebar/sidebar.css'
const Topbar = () => {
  const theme = useTheme();
  const { toggleSidebar, broken, rtl, collapsed } = useProSidebar();

  return (
    <Box className="main-right-col" display="flex" justifyContent="space-between">
      <Box display="flex">
        {broken && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        {/* {collapsed.toString()} */}
        <Box
        className="search_box"
          display="flex"
          backgroundColor="#F5F5F5"
          p={0.2}
          borderRadius={1}
        >
          <IconButton type="button" className="search_btn">
            <img src={img.search} alt="" />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for anything..." />
        </Box>
      </Box>
      <Box className="right_icons" display="flex">
        <IconButton>
        <img src={img.calender} aboutlt=""/>
        </IconButton>
        <IconButton>
        <img src={img.messageNotify} aboutlt=""/>
        </IconButton>
        <IconButton>
        <img src={img.Notification} aboutlt=""/>
        </IconButton>
        <Typography className="user_info">
           <h5>
            Anima Agrawal
           </h5>
           <span>U.P, India</span>
        </Typography>
        <img style={{borderRadius:'50%', padding:'15px'}} src={img.image1} alt="" />
        <KeyboardArrowDownIcon/>
      </Box>
    </Box>
  );
};

export default Topbar;
