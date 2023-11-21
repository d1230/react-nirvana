import { AppBar, Box, Grid, Menu, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledAppbar = styled(Grid)(({ theme }) => ({
  backgroundColor: 'rgb(0, 41, 107)',
  color: theme.palette.common.white,
  width: 'auto',
  right: 100,
  marginTop: 30,
 
  position: "absolute",
  flexDirection: "row",
  zIndex: 3,
  padding:'4px 0px   ',

  border: "2px solid white", // Add white border
  borderRadius: "30px", // Set the border radius for rounded edges

  // Responsive styles
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Set width to 100% for small screens
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white /* Default color for the link */,
  height: "100%",
  width:"100%",
  flex: 1,
  padding: "10px 15px",
  margin: "8px 0px !important",
  "&.active": {
    color: "white" /* Color when the link is active*/,
    backgroundColor: theme.palette.primary.main, //I wnat this background color to cover full height//bigger
    
    borderRadius: "20px",
  },
  "&:hover": {
    color:'gray'
  },
}));



const  styledMenu = styled(Menu)(({theme})=>({
  
    '& .MuiPaper-root': {
      marginTop: 1,
      backgroundColor: '#00296b',
      '& .MuiButtonBase-root': {
        backgroundColor: '#00296b',
        "&:hover":{
          backgroundColor:  theme.palette.secondary.main
        },
        "& .nav-link": {
          color: 'white',
          textDecoration: "none",
          "&:hover":{
            color: theme.palette.common.white,

          },
        }}}

}));

export { StyledAppbar, StyledNavLink ,styledMenu };
