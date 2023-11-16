import React from 'react'
import OverlayHeader from '../../components/OverlayHeader';
import text from '../../configs/Text';
import { Grid, Typography } from '@mui/material';
import geometry from "../../assets/geometry.jpg";
const About= () => {
  return (
    <>
      <OverlayHeader
        overlayImage={geometry}
        
        mainText={text.about.Header.main}
        subText={text.about.Header.sub}
      ></OverlayHeader>

      <Grid className="find" container sx={{ zIndex:2,height:'100%',p:10 }}>
        <Grid item sm={8} md={8}>
          <Typography>{text.contact.Body.First.Title}</Typography>
          <Typography>{text.contact.Body.First.Body}</Typography>
          <Typography>{text.contact.Body.Second.Title}</Typography>
          <Typography>{text.contact.Body.First.Body}</Typography>
        </Grid>
        <Grid item sm={4} md={4}>
          <Typography>{text.contact.Body.Third.Title}</Typography>
          <Typography>hhh</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About