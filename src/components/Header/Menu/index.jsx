import { useTheme } from "@emotion/react";
import { Button, Icon, Menu, MenuItem } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
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
  setMenuShowingDropdown,
}) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    console.log("isSubmenuOpen,isHover", isSubmenuOpen, isHover);
    //setTimeout(() => {
      if ((isHover || isSubmenuOpen) && subMenus) {
        console.log( title, subMenus,"open");
        showSubMenu();
      } else {
        console.log( title, subMenus,"close");
        closeSubMenu();
      }
    //}, 300);
  }, [isSubmenuOpen, isHover]);
   useEffect(()=>{console.log('buttonRef',buttonRef.current)},buttonRef)
  useEffect(()=>{console.log(menuItem);});

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
      onMouseLeave={() => {
        //console.log(subMenuItem,"leave");
        setIsSubmenuOpen(false);
      }}
      onMouseEnter={() => {
        //console.log(subMenuItem,"enter");
        setIsSubmenuOpen(true);
      }}
      sx={{
        color: "#ffffff",
        backgroundColor: "#00296b",
        "&:hover": {
          backgroundColor: "#00296b", // Keep the same background color on hover
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
        sx={{
          color: "#ffffff",
          backgroundColor: "#00296b",
          "&:hover": {
            backgroundColor: "#00296b", // Keep the same background color on hover
            color: "grey",
            boxShadow: "none", // Remove shadow
            border: "none", // Remove border
            borderRadius: 0, // Remove border radius
          },
          // "& .MuiPaper-root":{backgroundColor: "#00296b"},

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
            // showSubMenu();
          }
        }}
        onMouseLeave={() => {
          setIsHover(false);
          // setTimeout(() => {
          //   closeSubMenu();
          // }, 300);
        }}
        onMouseEnter={() => {
          console.log(title,' to enter');
          setIsHover(true);
          if (subMenus) {
            showSubMenu();
          }
        }}
        className='coco22'
      >
        {title} {subMenus ?  <ExpandMoreRoundedIcon /> : ""}
      </Button>
      <Menu
     sx={{"& .MuiPaper-root":{backgroundColor: "#00296b"},}}
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === title}
        onClose={closeSubMenu}
        onMouseEnter={() => {
          setIsSubmenuOpen(true);

          showSubMenu();
        }}
       
        
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
          sx={{ color: "white" }}
        />
      ))}
    </>
  );
};

export default MenuItemComponent;
