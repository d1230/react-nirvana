import React from 'react'
import OverlayHeader from '../../components/OverlayHeader';
import text from '../../configs/Text';
import { Grid, Typography } from '@mui/material';
import geometry from "../../assets/geometry.jpg";
import { Box, Divider } from '@mui/material';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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


        <Typography variant="body3" sx={{mb: '1.5em'}}>Nirvana Enterprises is a leading IT Services, Staffing and Business Solutions company. We collaborate with your clients to simplify, strengthen and transform their businesses by ensuring the highest levels of quality and satisfaction.</Typography>
          <Divider sx={{mt: '1.5em', mb:'1.5rem'}} />
          <Box sx={{textAlign: 'center'}}>
          <Typography variant="body3" sx={{mb: '1.5em', fontStyle: 'italic'}}>Innovative Solutions. Better Careers.</Typography></Box>
          <Divider sx={{mt: '1.5em', mb:'1.5rem'}} />
          <Box>
          <Typography variant="h4" sx={{mb: '1.5em'}}>IT Services Solutions</Typography>
          <Box sx={{m:'0 0 1.5em 1.5em'}}>
          <Typography variant="body3"><ArrowForwardIosIcon sx={{ fontSize: "14px", color: "blue", mr: "1vh" }} />We provide custom application development and legacy migration services in areas of Business Analysis, Data Analysis, Quality Assurance and Testing, UI/UX Design and Development, implementing and upgrading Enterprise Resource Planning (ERP) & Enterprise Cloud solutions, Data Warehousing (DW), and Business Intelligence (BI).</Typography>
          <Typography>{''}</Typography>
          <Typography variant="body3"> <ArrowForwardIosIcon sx={{ fontSize: "14px", color: "blue", mr: "1vh" }} /> We believe in nurturing client and employee relationships that reflect our culture of unwavering ethics and mutual respect.</Typography>
          <Typography>{''}</Typography>
          <Typography variant="body3"><ArrowForwardIosIcon sx={{ fontSize: "14px", color: "blue", mr: "1vh" }} />We strive by bringing to life great ideas and enterprise solutions that drive progress for our clients.</Typography>
          </Box></Box>
          <Box>
          <Typography variant="h4" sx={{mt: '1.5em', mb:'1.5rem'}}>IT Staffing Solutions</Typography>
          <Box sx={{m:'0 0 1.5em 1.5em'}}>
          <Typography variant="body3" ><ArrowForwardIosIcon sx={{ fontSize: "14px", color: "blue", mr: "1vh" }} />We commit to delivering quality, experienced and committed IT professionals who help fill our client needs for nearly any IT requirement or assignment length, quickly, and efficiently.</Typography>
          <Typography>{''}</Typography>
          <Typography variant="body3"><ArrowForwardIosIcon sx={{ fontSize: "14px", color: "blue", mr: "1vh" }} />We help our clients supplement their staff on a permanent or consultant/freelance basis.</Typography>
          <Typography>{''}</Typography>
          <Typography variant="body3"><ArrowForwardIosIcon sx={{ fontSize: "14px", color: "blue", mr: "1vh" }} />We specialize in staffing all kinds of IT professionals including, but not limited to Programmers, QA Analysts & Testers, Business Analysts, System Analysts, Database Administrators (DBA), Database Developers, Data Analysts, Data Warehouse and Business Intelligence Experts, Network Security and IT Help Desk Support Personnel, Network Administrators, ERP Developers, UI/UX Developers and Designers.</Typography>
          </Box>
          </Box>
          <Box sx={{mb:'1.5em'}}><Typography variant="body3" >If you are company who has IT Consulting or Staffing related inquiry, please contact us here.</Typography></Box>
          <Box sx={{mb:'1.5em'}}><Typography variant="body3" >If you are an IT professional or someone looking to begin a career in IT, please contact us here.</Typography></Box>
        </Grid>
        <Grid
            item
            sm={4}
            md={3}
            sx={{
              backgroundColor: "#1E72BD",
              color: "white",
              padding: 5,
              height: "50%",
            }}
          >
            <Typography variant="h4" sx={{ mb: 1 }}>
              NEXT STEPS
            </Typography>
            <Typography variant="body1" sx={{ mb: "1.5em" }}>
              Take the first step to connecting with exceptional IT Job
              opportunities.
            </Typography>

            <Typography variant="body1" sx={{ textDecoration: "underline" }}>
              Contact our HR today..
            </Typography>
          </Grid>
      </Grid>


      
    </>
  );
};

export default About