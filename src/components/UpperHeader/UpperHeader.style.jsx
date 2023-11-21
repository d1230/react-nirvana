import { AppBar, Box, styled } from "@mui/material";

const UpperAppbar = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroudColor: theme.palette.primary.main,
    padding:5,
    marginBottom:5
 }));
 

  export {UpperAppbar, StyledAppbar};
  