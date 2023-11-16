import React from 'react'
import OverlayHeader from '../../components/OverlayHeader';
import { Box, Divider, Grid, Icon, Typography } from '@mui/material';
import text from '../../configs/Text';
import clients from "../../assets/clients-small.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Clients = () => {
  return (
    <>
      <OverlayHeader
        overlayImage={clients}
        
        mainText={text.clients.Header.main}
        subText={text.clients.Header.sub}
      ></OverlayHeader>

      <Grid className="find" container sx={{ zIndex:2,height:'100%',p:10 }}>
      <Grid item sm={1} md={1}></Grid>
        <Grid item sm={6} md={6}>
          <Typography variant="subtitle3" sx={{mb: '1.5em'}}>Experience success. True success comes from working with an IT partner you can trust to deliver the know-how, support and expertise that will drive your business forward.</Typography>
          <Divider sx={{mt: '1.5em', mb:'1.5rem'}} />
          <Box>
          <Typography variant="h4" sx={{mb: '1.5em'}}>Our Unmatched Service Offering</Typography>
          <Typography variant="subtitle3"><ArrowForwardIosIcon sx={{fontSize:'14px'}} />IT Services</Typography>
          <Typography>{''}</Typography>
          <Typography variant="subtitle3"> <ArrowForwardIosIcon sx={{fontSize:'14px'}} /> IT Staffing & Recruitment</Typography>
          <Typography>{''}</Typography>
          <Typography variant="subtitle3"><ArrowForwardIosIcon sx={{fontSize:'14px'}} />IT Business Solutions</Typography>
          </Box>
          <Box>
          <Typography variant="h6" sx={{mt: '1.5em', mb:'1.5rem'}}>We deliver excellence and certainty across all of your enterprise’s IT needs. Learn more:</Typography>
          <Typography variant="subtitle3"><ArrowForwardIosIcon sx={{fontSize:'14px'}} />Learn from our Industry Expertise</Typography>
          <Typography>{''}</Typography>
          <Typography variant="subtitle3"><ArrowForwardIosIcon sx={{fontSize:'14px'}} />View our diverse IT Roles</Typography>
          
          </Box>
          <Box sx={{backgroundColor:'#A2C5E2' , padding:'20px', m:'20px 0px '}}>
            <Typography sx={{fontSize:'20px',mb:4}}>“Nirvana Enterprises helped our law firm achieve the kind of success only possible with a committed IT partner. They have helped us every step of the way. With strong consulting skills and robust project execution capabilities, they implemented a cost effective, highly customized legal software for us which helped us reduce the operational costs and achieve efficiency.”</Typography>
            <Typography>{''}</Typography>
          <Typography variant="subtitle3">–– Sharon KhunKhun – Attorney at Law.</Typography>
          </Box>
          <Typography sx={{fontSize:'16px'}}>If you are a company looking for IT Services, please contact us here.</Typography>
        </Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={4} md={3} sx={{backgroundColor:'#1E72BD', color:'white', padding:5, height:'200px'}}>
          <Typography variant="h4" sx={{mb:1}}>NEXT STEPS</Typography>
          <Typography variant="body1" sx={{mb: '1.5em'}}>Nirvana Enterprises has the world-class experience and expertise that you need.</Typography>
          
          <Typography variant="body1" sx={{textDecoration: 'underline'}}>Contact a consultant today.</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Clients