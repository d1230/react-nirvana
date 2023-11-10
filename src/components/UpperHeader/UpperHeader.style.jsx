import { AppBar, Box, styled } from "@mui/material";

const UpperAppbar = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroudColor: theme.palette.primary.main,
    margin:1
 }));
 

  export {UpperAppbar, StyledAppbar};
  