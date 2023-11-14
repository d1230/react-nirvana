import {
  Box,
  Button,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { StyledAppbar, StyledNavLink } from "./Header.style";
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
];

const Header = () => {
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
    <StyledAppbar className="header" container>
      {LinkItems.map((label, index) => (
        <Grid sx={{ color: "white", m: 1 }} item key={index}>
          {label.type === "link" ? (
            <StyledNavLink to={label.to}>{label.name}</StyledNavLink>
          ) : (
            <>
              <Box
                id={`basic-button-${index}`}
                aria-controls={anchorEl ? `basic-menu-${index}` : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? "true" : undefined}

                onClick={handleClick}
                onMouseOver={handleClick}
              >
                {label.name}
              </Box>
              <Menu
                to={label.to}
                label={label.name}
                id={`basic-menu-${index}`}
                anchorEl={anchorEl}
                open={Boolean(anchorEl && anchorEl.id === `basic-button-${index}`)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'your-dropdown-color',
                  },
                }}
              >
                {label.items.map((subItem, subIndex) => (
                  <MenuItem key={subIndex}>
                    <Link to={subItem.to} onClick={handleClose}>
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
  );
};

export default Header;
