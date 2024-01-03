import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { StyledAppbar, StyledNavLink } from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
//import moment from 'moment';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { styled, useTheme } from "@mui/material/styles";

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
  { to: "/login", type: "link", name: "Login" },
];
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      {isSmallScreen ? (
        <AppBar>
          <Toolbar sx={{ "justify-content": "space-between" }}>
            <Box>
              <img
                alt="Nirvana Enterprises"
                src="https://www.nirvanaenterprises.com/wp-content/uploads/nirvana-enterprises-logo-white.png"
                title="Nirvana Enterprises"
                width="120"
                height="30"
              ></img>
            </Box>



            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(drawerOpen && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={drawerOpen}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />



            <List>
              {LinkItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton onClick = {()=>navigate(item.to)}>
 
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
         
            <Divider />
          </Drawer>
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
                    style={{ color: "white", textDecoration: "none" }}
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
