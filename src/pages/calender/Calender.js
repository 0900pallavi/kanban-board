import React from 'react'
import { useState } from 'react';
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import img from '../../assets/img';
import '../global/sidebar/sidebar.css'

function Calender() {
  return (
    <div  style={{width:'19%'}}>
      <div className='filter_section calender-sec'>
        <Box style={{display:'flex', alignItems:'center'}}
          className="filter_box"
        >
          <img src={img.calender} alt="" />
          <InputBase sx={{ ml: 1, flex: 1, width:'6%' }} placeholder="Today" />
          <ExpandMoreOutlinedIcon />
        </Box>
      </div>
      
    </div>
  )
}

export default Calender