import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  useTheme,
} from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

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
  index,
  menuItemLength,
}) => {
  const { title, subMenus } = menuItem;
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(menuItem.title);
  }, [menuItem.title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const getBorderCss = (index, length) => {
    if (index === 0) {
      return {
        borderTopLeftRadius: "25px",
        borderTop: "2px solid white",
        borderBottom: "2px solid",
        borderBottomLeftRadius: "25px",
        borderLeft:"2px solid white",
        "&:hover":{
          borderTopLeftRadius: "25px",
        borderTop: "2px solid white",
        borderBottom: "2px solid",
        borderBottomLeftRadius: "25px",
        borderLeft:"2px solid white",
        }
      };
    } else if (index === length - 1) {
      return {
        borderTopRightRadius: "25px",
        borderTop: "2px solid white",
        borderBottom: "2px solid",
        borderBottomRightRadius: "25px",
        borderRight:"2px solid white",
        "&:hover":{
          borderTopRightRadius: "25px",
        borderTop: "2px solid white",
        borderBottom: "2px solid",
        borderBottomRightRadius: "25px",
        borderRight:"2px solid white",
        }
      };
    } else {
      return {
        borderTop: "2px solid white",
        borderBottom: "2px solid",
        "&:hover":{
          borderTop: "2px solid white",
        borderBottom: "2px solid",
        }
      };
    }
  };

  return (
    <span id={`menuItem-${title}`} key={`menuItem-${title}`}>
      <Button
        id={`menuItem-${title}`}
        key={`menuItem-${title}`}
        // sx={{ zIndex: theme.zIndex.modal + 1, color: "black" }}
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
          boxShadow: "none", // Remove shadow
          border: "none", // Remove border
          height: "100%",
          borderRadius: 0, // Remove border radius
          zIndex: theme.zIndex.modal + 1,
          ...getBorderCss(index, menuItemLength),
        }}
        onMouseLeave={() => {
          console.log("mouse leave");
          setMenuShowingDropdown("");
        }}
        onMouseEnter={(e) => {
          if (menuItem.subMenus) {
            setAnchorEl(e.currentTarget);
            showSubMenu();
            return;
          }
        }}
      >
        {title} {menuItem.subMenus ? <ExpandMoreRoundedIcon /> : ""}
      </Button>
      <Menu
        sx={{ "& .MuiPaper-root": { backgroundColor: "#00296b" } }}
        id={`menuItem-${title}`}
        key={`menuItem-${title}`}
        MenuListProps={{
          onMouseEnter: () => {
            showSubMenu();
          },
          onMouseLeave: () => {
            closeSubMenu();
          },
        }}
        anchorEl={anchorEl}
        // anchorEl={buttonRef.current}
        open={menuShowingDropdown === menuItem.title && anchorEl !== null}
        // open={menuShowingDropdown === menuItem.title && Boolean(anchorEl)}
        onClose={closeSubMenu}
      >
        {subMenus?.map((subMenuItem) => (
          <MenuItem
            onClick={() => {
              // closeSubMenu(); // Close the submenu after clicking
              navigate(subMenuItem.pathname);
            }}
            // disableScrollLock={true}
            key={subMenuItem.title}
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
        ))}
      </Menu>
    </span>
  );
};

const MenuItemComponent = () => {
  const [menuShowingDropdown, setMenuShowingDropdown] = useState("");

  const handleMenuShowingDropdownChange = useCallback((menuTitle) => {
    setMenuShowingDropdown(menuTitle);
  }, []);

  return (
    <>
      {MENU_ITEMS.map((menuItem, index) => (
        <DropdownMenuItem
          key={menuItem.title}
          index={index}
          menuItem={menuItem}
          menuItemLength={MENU_ITEMS?.length}
          menuShowingDropdown={menuShowingDropdown}
          setMenuShowingDropdown={handleMenuShowingDropdownChange}
          sx={{ color: "white" }}
        />
      ))}
    </>
  );
};

export default MenuItemComponent;
// export default {};
