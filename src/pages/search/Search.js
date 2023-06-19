import React from 'react'
import { useState } from 'react';
import { useTheme, Box, IconButton, InputBase, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import img from '../../assets/img';
import '../global/sidebar/sidebar.css'

function search() {
  return (
    <div  style={{width:'18%'}}>
      <div className='filter_section'>
        <Box style={{display:'flex', alignItems:'center'}}
          className="filter_box"
        >
          <img src={img.filter} alt="" />
          <InputBase sx={{ ml: 1, flex: 1, width:'6%' }} placeholder="Filter" />
          <ExpandMoreOutlinedIcon />
        </Box>
      </div>
      
    </div>
  )
}

export default search