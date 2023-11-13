import { Box, Grid } from "@mui/material";
import { StyledAppbar, StyledNavLink } from "./Header.style";
//import moment from 'moment';

const LinkItems = [
  // { to: "/", name: "Home" },
  { to: "/about", name: "About" },
  { to: "/services", name: "Services" },
  { to: "/jobseekers", name: "Jobseekers" },
  { to: "/clients", name: "Clients" },
  { to: "/contact", name: "Contact" },
];

const Header = () => {
  return (
    
      <StyledAppbar className="header" container>
        {LinkItems.map((label, index) => (
          <Grid sx={{ color: "white", m: 1 }} item key={index}>
            <StyledNavLink to={label.to}>{label.name}</StyledNavLink>
          </Grid>
        ))}
      </StyledAppbar>
  
  );
};

export default Header;
