import React, { useCallback, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MENU_ITEMS = [
    {
      title: "About",
      pathname: "/about",
    },
    {
      title: "Services",
      pathname: "/services",
      subMenus: [
        {
          title: "Services",
          pathname: "/services",
        },
        {
          title: "IT Staffing",
          pathname: "/services/it-staffing",
        },
      ],
    },
    {
      title: "Jobseekers",
      pathname: "/jobseekers",
      subMenus: [
        {
          title: "Overview",
          pathname: "/jobseekers",
        },
        {
          title: "Browse IT Jobs",
          pathname: "/jobseekers",
        },
      ],
    },
    {
      title: "Clients",
      pathname: "/clients",
      subMenus: [
        {
          title: "Overview",
          pathname: "/clients",
        },
        {
          title: "Industry Expertise",
          pathname: "/clients",
        },
        {
          title: "Client Q&A",
          pathname: "/clients",
        },
        {
          title: "IT Roles",
          pathname: "/clients",
        },
      ],
    },
    {
      title: "Contact",
      pathname: "/contact",
    },
    {
      title: "Login",
      pathname: "/login",
    },
  ];
  

const DropdownMenuItem = ({
  menuItem,
  menuShowingDropdown,
  setMenuShowingDropdown
}) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(menuItem.title);
  }, [menuItem.title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);
  const navigate = useNavigate();

  const subMenusNodes = subMenus?.map((subMenuItem) => (
    <MenuItem
      onClick={() => {
        navigate(subMenuItem.pathname)
      }}
      key={subMenuItem.title}
    >
      {subMenuItem.title}
    </MenuItem>
  ));

  const theme = useTheme();

  return (
    <>
      <Button
        id={`menuItem-${title}`}
        // higher zIndex to make button show submenu when move mouse from another submenu
        sx={{ zIndex: theme.zIndex.modal + 1, color: "black" }}
        ref={buttonRef}
        onClick={() => {
          if (!menuItem.subMenus) {
            console.log("first level menu click");
          }
        }}
        onMouseLeave={() => {
          setMenuShowingDropdown("");
        }}
        onMouseEnter={() => {
          if (menuItem.subMenus) {
            showSubMenu();
            return;
          }
        }}
      >
        {title} {menuItem.subMenus ? "↓" : ""}
      </Button>
      <Menu
        PaperProps={{
          onMouseEnter: () => {
            showSubMenu();
          },
          onMouseLeave: () => {
            closeSubMenu();
          }
        }}
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === menuItem.title}
        onClose={closeSubMenu}
      >
        {subMenusNodes}
      </Menu>
    </>
  );
};

export const TopMenu = () => {
  const [menuShowingDropdown, setMenuShowingDropdown] = useState("");

  const handleMenuShowingDropdownChange = useCallback((menuTitle) => {
    setMenuShowingDropdown(menuTitle);
  }, []);

  const menuItems = MENU_ITEMS.map((menuItem) => (
    <DropdownMenuItem
      key={menuItem.title}
      menuItem={menuItem}
      menuShowingDropdown={menuShowingDropdown}
      setMenuShowingDropdown={handleMenuShowingDropdownChange}
    />
  ));

  return (
    <AppBar position="static">
      <Toolbar>{menuItems}</Toolbar>
    </AppBar>
  );
};
