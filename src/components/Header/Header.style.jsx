import { AppBar, Box, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";


const StyledAppbar = styled(AppBar)(
    ({ theme }) => `
    backgroud-color: ${theme.palette.primary.main};
  
    `
);

const UpperAppbar = styled(AppBar)(
    ({ theme }) => `
  backgroud-color: ${theme.palette.primary.main};

  `

)
const HeaderLink = styled(Link)(
    ({ theme }) => `
    color: white;
    float: right;
  
    `
)

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary, /* Default color for the link */
    
    '&.active': {
      color: 'white', /* Color when the link is active*/
  },
  }));

export { StyledAppbar, UpperAppbar, HeaderLink,StyledNavLink }