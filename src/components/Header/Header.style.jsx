import { AppBar, Box, Grid, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledAppbar = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  width: 400,
  right: 100,
  marginTop: 30,
  position: "absolute",
  flexDirection: "row",
  zIndex: 2,
  padding: 5,

  border: "2px solid white", // Add white border
  borderRadius: "20px", // Set the border radius for rounded edges

  // Responsive styles
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Set width to 100% for small screens
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white /* Default color for the link */,
  height: "100%",
  width:"100%",
  flex: 1,

  "&.active": {
    color: "white" /* Color when the link is active*/,
    backgroundColor: theme.palette.primary.main, //I wnat this background color to cover full height//bigger
    padding: "10px 20px",
    borderRadius: "20px",
  },
}));

export { StyledAppbar, StyledNavLink };
