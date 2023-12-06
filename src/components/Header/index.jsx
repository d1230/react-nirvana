import {
  AppBar,
  Box,
  Button,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StyledAppbar, StyledNavLink, styledMenu } from "./Header.style";
import { Link } from "react-router-dom";
import React from "react";
//import moment from 'moment';

const LinkItems = [
  // { to: "/", name: "Home" },
  { to: "/about", type: "link", name: "About" },
  {
    to: "/services",
    type: "dropdown",
    name: "Services",
    items: [
      { label: "IT Services", to: "/services" },
      { label: "IT Staffing", to: "/services" },
    ],
  },
  {
    to: "/jobseekers",
    type: "dropdown",
    name: "Jobseekers",
    items: [
      { label: "Overview", to: "/jobseekers" },
      { label: "Brose IT Jobs", to: "/jobseekers" },
    ],
  },
  {
    to: "/clients",
    type: "dropdown",
    name: "Clients",
    items: [
      { label: "Overview", to: "/clients" },
      { label: "Industry Expertise", to: "/clients" },
      { label: "Client Q&A", to: "/clients" },
      { label: "IT Roles", to: "/clients" },
    ],
  },
  { to: "/contact", type: "link", name: "Contact" },
  { to: "/Login", type: "link", name: "Login" },
];

const Header = () => {
  //check if its small screen
  const isSmallScreen = useMediaQuery("(max-width:850px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
    console.log(`Mouse over item `);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log("Mouse out");
  };

  return (
    <>
      {isSmallScreen ? (
        <AppBar>
          <Toolbar>
            <Box>
              <img
                alt="Nirvana Enterprises"
                src="https://www.nirvanaenterprises.com/wp-content/uploads/nirvana-enterprises-logo-white.png"
                title="Nirvana Enterprises"
                width="120"
                height="30"
              ></img>
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <StyledAppbar className="header" container>
          {LinkItems.map((label, index) => (
            <Grid sx={{ color: "white", m: 1 }} item key={index}>
              {label.type === "link" ? (
                <StyledNavLink to={label.to}>{label.name}</StyledNavLink>
              ) : (
                <>
                  <Link
                    id={`basic-button-${index}`}
                    aria-controls={anchorEl ? `basic-menu-${index}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl ? "true" : undefined}
                    style={{color:'white',textDecoration:'none'}}
                    onMouseOver={handleClick}
                  >
                    {label.name}
                  </Link>

                  <Menu
                    to={label.to}
                    label={label.name}
                    id={`basic-menu-${index}`}
                    className="menu"
                    anchorEl={anchorEl}
                    open={Boolean(
                      anchorEl && anchorEl.id === `basic-button-${index}`
                    )}
                    
                    onClose={handleClose}
                    onMouseLeave={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}
                    sx={{
                      "& .MuiPaper-root": {
                        marginTop: 1,
                        backgroundColor: "#00296b",
                        "& .MuiButtonBase-root": {
                          backgroundColor: "#00296b",
                          "&:hover": {
                            backgroundColor: "#003F88",
                          },
                          "& .linkClass": {
                            color: "white",
                            textDecoration: "none",
                            "&:hover": {
                              color: "white",
                            },
                          },
                        },
                      },
                    }}
                  >
                    {label.items.map((subItem, subIndex) => (
                      <MenuItem
                        className="menuItem"
                        key={subIndex}
                        sx={{ backgroundColor: "blue" }}
                      >
                        <Link
                          to={subItem.to}
                          onClick={handleClose}
                          className="linkClass"
                        >
                          {subItem.label}{" "}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Grid>
          ))}
        </StyledAppbar>
      )}
    </>
  );
};

export default Header;
