import OverlayHeader from "../../components/OverlayHeader";
import services from "../../assets/services.jpg";
import text from "../../configs/Text";
import { Grid, Typography } from "@mui/material";
import jobcareer from "../../assets/job-career.jpg";
import { Box, Divider } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Services = () => {
  return (
    <>
      <>
        <OverlayHeader
          overlayImage={services}
          mainText={text.services.Header.main}
          subText={text.services.Header.sub}
        ></OverlayHeader>

        <Grid
          className="find"
          container
          sx={{ zIndex: 2, height: "100%", p: 10 }}
        >
          <Grid item sm={1} md={1}></Grid>
          <Grid item sm={6} md={6}>
            <Typography variant="subtitle3" sx={{ mb: "1.5em" }}>
            In a competitive and demanding business world, a robust IT platform is absolutely necessary to achieve flexibility, speed and efficiency in business operations. We are committed to help you achieve this objective through our IT services and solutions.
            </Typography>
            <Divider sx={{ mt: "1.5em", mb: "1.5rem" }} />
            <Box sx={{mb:'1.5em'}}>
              <Typography variant="h4" sx={{ mb: "1.5em" }}>
              What Nirvana Enterprises Provides
              </Typography>
              <Typography variant="body3" sx={{ mb:'10px' }}>
              
              We deliver excellence and certainty across all of your enterprise’s IT needs. Learn more about our IT Services offering:
              </Typography>
              <Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Application Outsourcing
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Business Process Outsourcing (BPO)
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Business Consulting
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Custom Application Development
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                BI & Performance Management
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
               Application Management & System Integration
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Cloud, Infrastructure & Security
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Portal & Content Management
              </Typography>
              <Typography>{""}</Typography>
            </Box>



            <Box sx={{mb:'1.5em'}}>
              <Typography variant="h5" sx={{ mb: "1.5em" }}>
              Business Value
              </Typography>
              
              <Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Increased productivity at a lower cost
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Speedier delivery time
              </Typography>
              <Typography>{""}</Typography><Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                Scalable solutions for future growth
              </Typography>

</Box>

            <Box sx={{ mt: "1.5em", mb: "1.5rem" }}>
              <Typography variant="subtitle3" >
              If you are a company looking for IT Services, please contact us here.
              </Typography>
            </Box>
            
          </Grid>

          <Grid item sm={1} md={1}></Grid>
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
            Nirvana Enterprises has the world-class experience and expertise that you need.
            </Typography>

            <Typography variant="body1" sx={{ textDecoration: "underline" }}>
            Contact a consultant today.
            </Typography>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default Services;
