import {
  AppBar,
  Box,
  Button,
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
import { CustomAppBar, StyledAppbar, StyledNavLink } from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
//import moment from 'moment';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { styled, useTheme } from "@mui/material/styles";
import DropdownMenuItem from "./Menu";
import menuItems from "./Menu";
import MenuComponent from "./Menu";
import MenuItemComponent from "./Menu";

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
      { label: "Browse IT Jobs", to: "/jobseekers" },
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




//newDropdown
// export const MENU_ITEMS = [
//   {
//     title: "About",
//     pathname: "/about"
//   },
//   {
//     title: "Services",
//     pathname: "/services",
//     subMenus: [
//       {
//         title: "Services",
//         pathname: "/services"
//       },
//       {
//         title: "IT Staffing",
//         pathname: "/services"
//       }
//     ]
//   },
//   {
//     title: "Jobseekers",
//     pathname: "/jobseekers",
//     subMenus: [
//       {
//         title: "Overview",
//         pathname: "/jobseekers"
//       },
//       {
//         title: "Browse IT Jobs",
//         pathname: "/jobseekers"
//       }
//     ]
//   },
//   {
//     title: "Clients",
//     pathname: "/clients",
//     subMenus: [
//       {
//         title: "Overview",
//         pathname: "/clients"
//       },
//       {
//         title: "Industry Expertise",
//         pathname: "/clients"
//       }, {
//         title: "Client Q&A",
//         pathname: "/clients"
//       }, {
//         title: "IT Roles",
//         pathname: "/clients"
//       },
//     ]
//   },
//   {
//     title: "Contact",
//     pathname: "/contact"
//   },
//   {
//     title: "Login",
//     pathname: "/login"
//   },
// ];


// const DropdownMenuItem = ({
//   menuItem,
//   menuShowingDropdown,
//   setMenuShowingDropdown,
// }) => {
//   const { title, subMenus } = menuItem;
//   const buttonRef = useRef(null);

//   const showSubMenu = useCallback(() => {

//     setMenuShowingDropdown(menuItem.title,setMenuShowingDropdown);
//   }, [menuItem.title, setMenuShowingDropdown]);

//   const closeSubMenu = useCallback(() => {

//     setMenuShowingDropdown("");
//   }, [setMenuShowingDropdown]);

//   const subMenusNodes = subMenus?.map((subMenuItem) => {
//     return (
//       <MenuItem
//         onClick={() => {
//           console.log("second level menu tiem click");
//         }}
//         key={subMenuItem.title}
//       >
//         {subMenuItem.title}
//       </MenuItem>
//     );
//   });

//   const theme = useTheme();

//   return (
//     <>
//       <Button
//         id={`menuItem-${title}`}
//         // higher zIndex to make button show submenu when move mouse from another submenu
//         sx={{ zIndex: theme.zIndex.modal + 1, color: "black" }}

//         ref={buttonRef}
//         onClick={() => {
//           if (!menuItem.subMenus) {
//             console.log("first level menu click");
//           }
//         }}
//         onMouseLeave={() => {


//           setTimeout(() => {
//             console.log('mouseleave')
//           setMenuShowingDropdown("");
//           }, 300);

//           //setMenuShowingDropdown("");
//         }}
//         onMouseEnter={() => {
//           console.log('onMouseEnter')
//           if (menuItem.subMenus) {
//             showSubMenu();
//             return;
//           }
//         }}
//       >
//         {title} {menuItem.subMenus ? "↓" : ""}
//       </Button>
//       <Menu
//         PaperProps={{
//           onMouseEnter: () => {
//             showSubMenu();
//           },
//           onMouseLeave: () => {
//             closeSubMenu();
//           },
//         }}
//         anchorEl={buttonRef.current}
//         open={menuShowingDropdown === menuItem.title}
//         onClose={closeSubMenu}
//       >
//         {subMenusNodes}
//       </Menu>
//     </>
//   );
// };
///////////////////////////


///main menu header

const Header = () => {



  const theme = useTheme();
  const navigate = useNavigate();
  //check if its small screen
  const isSmallScreen = useMediaQuery("(max-width:850px)");
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   console.log(event.currentTarget);
  //   if (anchorEl !== event.currentTarget) {
  //     setAnchorEl(event.currentTarget);
  //   }
  //   console.log(`Mouse over item `);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  //   console.log("Mouse out");
  // };
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
                  <ListItemButton onClick={() => navigate(item.to)}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider />
          </Drawer>
        </AppBar>
      ) : (   //this is for bigger screen
        <CustomAppBar className="header" position="static">
          {/* <Toolbar > */}
            <div>
            <MenuItemComponent />
            </div>
            {/* </Toolbar> */}
        </CustomAppBar>
      )}
    </>
  );
};

export default Header;
