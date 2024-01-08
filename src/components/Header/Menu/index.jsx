import { useTheme } from "@emotion/react";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
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

const DropdownMenuItem = ({ menuItem, menuShowingDropdown, setMenuShowingDropdown }) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(title);
  }, [title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => (
    <MenuItem
      onClick={() => {
        navigate(subMenuItem.pathname);
        closeSubMenu(); // Close the submenu after clicking
      }}
      key={subMenuItem.title}
      sx={{
        color: "#ffffff",
        backgroundColor: '#00296b',
        "&:hover": {
          backgroundColor: '#00296b', // Keep the same background color on hover
          color: "grey",
        },
      }}
    >
      {subMenuItem.title}
    </MenuItem>
  ));

  return (
    <>
      <Button
        id={`menuItem-${title}`}
        key={`menuItem-${title}`}
        sx={{  color: "#ffffff", backgroundColor:'#00296b' , "&:hover": {
          backgroundColor: '#00296b', // Keep the same background color on hover
          color: "grey",
          boxShadow: "none", // Remove shadow
    border: "none", // Remove border
    borderRadius: 0, // Remove border radius
        },
      


        boxShadow: "none", // Remove shadow
    border: "none", // Remove border
    borderRadius: 0, // Remove border radius
      
      
      }}
        ref={buttonRef}
        onClick={() => {
          if (!subMenus) {
            console.log("first level menu click");
            navigate(menuItem.pathname);
          } else {
            showSubMenu();
          }
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            closeSubMenu();
          }, 300);
        }}
        onMouseEnter={() => {
          if (subMenus) {
            showSubMenu();
          }
        }}
      >
        {title} {subMenus ? "↓" : ""}
      </Button>
      <Menu
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === title}
        onClose={closeSubMenu}
        
      >
        {subMenusNodes}
      </Menu>
    </>
  );
};

const MenuItemComponent = () => {
  const [menuShowingDropdown, setMenuShowingDropdown] = useState("");

  const handleMenuShowingDropdownChange = useCallback((menuTitle) => {
    setMenuShowingDropdown(menuTitle);
  }, []);

  return (
    <>
      {MENU_ITEMS.map((menuItem) => (
        <DropdownMenuItem
          key={menuItem.title}
          menuItem={menuItem}
          menuShowingDropdown={menuShowingDropdown}
          setMenuShowingDropdown={handleMenuShowingDropdownChange}
          sx={{color:'white'}}
        />
      ))}
    </>
  );
};

export default MenuItemComponent;