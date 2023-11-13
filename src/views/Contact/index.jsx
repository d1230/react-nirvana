import { Box, Grid, Typography } from "@mui/material";
import contact from "../../assets/contact.jpg";
import text from "../../configs/Text";
import OverlayHeader from "../../components/OverlayHeader";

const staticServicesR = "1581 Route 27,Suite 107,Edison";

const Contact = () => {
  return (
    <>
      <OverlayHeader
        overlayImage={contact}
        
        mainText={text.contact.main}
        subText={text.contact.sub}
      ></OverlayHeader>

      <Grid className="find" container sx={{ zIndex:2,height:'100%',p:10 }}>
        <Grid item sm={8} md={8}>
          <Typography variant="h3">{text.contact.Body.First.Title}</Typography>
          <Typography>{text.contact.Body.First.Body}</Typography>
          <Typography variant="h3">{text.contact.Body.Second.Title}</Typography>
          <Typography>{text.contact.Body.First.Body}</Typography>
        </Grid>
        <Grid item sm={4} md={4} >
          <Typography variant="h3" >{text.contact.Body.Third.Title}</Typography>
          <Typography variant="h5">Corporate HQ</Typography>
          
          <Typography variant="body" >1581 Route 27,
          Suite 107,
          Edison, NJ 08817</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
