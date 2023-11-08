import {   Toolbar, Typography } from '@mui/material';
import React from 'react'
import {FooterAppbar ,FooterText} from './Footer.style'
const Footer = () => {

  return (
    <FooterAppbar position="static" color="primary" >
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{float:'right'}}>
          &copy; 2023 Your Company Name
        </Typography>
      </Toolbar>
    </FooterAppbar>
  )
}

export default Footer