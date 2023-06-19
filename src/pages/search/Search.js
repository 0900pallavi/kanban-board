import React from 'react'
import { useState } from 'react';
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import img from '../../assets/img';
import '../global/sidebar/sidebar.css'
import { useProSidebar } from "react-pro-sidebar";
import {
  useMediaQuery,
} from "@mui/material";


function search() {
   const theme = useTheme();
  const { toggleSidebar, broken, rtl, collapsed } = useProSidebar();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (

<>
{broken ? (
    <div
    style={{width:'35%'}}>
      <div className='filter_section'>
        <Box style={{display:'flex', alignItems:'center'}}
          className="filter_box"
        >
          <img src={img.filter} alt="" />
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Filter" />
          <ExpandMoreOutlinedIcon />
        </Box>
      </div>
      
    </div>
    ) : (
   
      <div
      style={{width:'18%'}}>
        <div className='filter_section'>
          <Box style={{display:'flex', alignItems:'center'}}
            className="filter_box"
          >
            <img src={img.filter} alt="" />
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Filter" />
            <ExpandMoreOutlinedIcon />
          </Box>
        </div>
        
      </div>
    )}

{/* 
    <div
    style={{width:'18%'}}>
      <div className='filter_section'>
        <Box style={{display:'flex', alignItems:'center'}}
          className="filter_box"
        >
          <img src={img.filter} alt="" />
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Filter" />
          <ExpandMoreOutlinedIcon />
        </Box>
      </div>
      
    </div> */}
</>
  )
}

export default search