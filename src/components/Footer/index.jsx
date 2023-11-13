import {   Toolbar, Typography } from '@mui/material';
import React from 'react'
import {FooterAppbar ,FooterText} from './Footer.style'
const Footer = () => {

  return (
    <FooterAppbar position="static" color="primary" >
      <Toolbar sx={{backgroundColor:'#00263b'}}>
        <Typography variant="body1" color="#00bced" sx={{float:'right'}}>
           Innovative Solutions. Better Careers.
        </Typography>
      </Toolbar>
    </FooterAppbar>
  )
}

export default Footer