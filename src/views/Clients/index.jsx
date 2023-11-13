import React from 'react'
import OverlayHeader from '../../components/OverlayHeader';
import { Box, Grid, Typography } from '@mui/material';
import text from '../../configs/Text';
import clients from "../../assets/clients-small.jpg";
const Clients = () => {
  return (
    <>
      <OverlayHeader
        overlayImage={clients}
        
        mainText={text.contact.main}
        subText={text.contact.sub}
      ></OverlayHeader>

      <Grid className="find" container sx={{ zIndex:2,height:'100%',p:10 }}>
        <Grid item sm={8} md={8}>
          <Typography>{text.contact.Body.First.Title}</Typography>
          <Box>{text.contact.Body.First.Body}</Box>
          <Typography>{text.contact.Body.Second.Title}</Typography>
          <Box>{text.contact.Body.First.Body}</Box>
        </Grid>
        <Grid item sm={4} md={4}>
          <Typography>{text.contact.Body.Third.Title}</Typography>
          <Box>hhh</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Clients