import { AppBar, Typography, styled } from "@mui/material";


const FooterAppbar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    bgcolor: '#0E3745', // Set the custom background color
  }));
  const FooterText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white, // Customize the text color
  }));


export { FooterAppbar ,FooterText}