import { AppBar, Box, Grid, styled } from "@mui/material";
import {  NavLink } from "react-router-dom";


const StyledAppbar = styled(Grid)(({ theme }) => ({
   backgroundColor: theme.palette.secondary.main,
   color: theme.palette.common.white,
   width:400,
   left:800,
   marginTop:30,
   position:'relative',
   flexDirection: "row",


  border: '2px solid black', // Add white border
  borderRadius: '20px', // Set the border radius for rounded edges

})

    
   
  
   
);



const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.common.white, /* Default color for the link */
    
    '&.active': {
      color: 'white', /* Color when the link is active*/
      backgroundColor: theme.palette.primary.main,
  },
  }));

export { StyledAppbar,StyledNavLink }