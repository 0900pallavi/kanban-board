import React from 'react'
import { useState } from 'react';
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import img from '../../assets/img';
import { useProSidebar } from "react-pro-sidebar";
import '../global/sidebar/sidebar.css'

function Share() {
  const { toggleSidebar, broken, rtl, collapsed } = useProSidebar();
  return (
    
    <div
      style={{width:'28%'}}>
      <div className='filter_section'>
        <Box style={{display:'flex', alignItems:'center'}}
          className="filter_box"
        >
          <img src={img.profile} alt="" />
          <InputBase sx={{ ml: 1, flex: 1, width:'6%' }} placeholder="Share" />
        </Box>
      </div>
      
    </div>
  )
}

export default Share