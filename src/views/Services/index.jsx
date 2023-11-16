
import OverlayHeader from "../../components/OverlayHeader";
import services from '../../assets/services.jpg'
import text from '../../configs/Text'
import { Grid, Typography } from "@mui/material";

const Services = () => {
  return (
    <>
      
      <>
      <OverlayHeader
        
        overlayImage={services}
        
        mainText={text.services.Header.main}
        subText={text.services.Header.sub}
      ></OverlayHeader>

      <Grid className="find" container sx={{ zIndex:2,height:'100%',p:10 }}>
        <Grid item sm={8} md={8}>
          <Typography>In a competitive and demanding business world, a robust IT platform is absolutely necessary to achieve flexibility, speed and efficiency in business operations. We are committed to help you achieve this objective through our IT services and solutions.</Typography>
         

        </Grid>
       <Grid item sm={4} md={4} >
          <Typography variant="h3" >NEXT STEPS</Typography>
          <Typography variant="h5">Nirvana Enterprises has the world-class experience and expertise that you need.</Typography>
          
          <Typography variant="body" >Contact a consultant today.</Typography>
        </Grid>
      </Grid>
    </>
    </>
  );
};

export default Services;
