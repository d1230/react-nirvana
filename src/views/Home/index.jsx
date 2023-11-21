import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import OverlayHeader from "../../components/OverlayHeader";
import text from "../../configs/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import OverlayHome from "../../components/OverlayHome";

const Home = () => {
  return (
    <>
      <OverlayHome></OverlayHome>

      <Paper
        className="find"
        container
        sx={{ zIndex: 2, height: "100%", p: 10 }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            
          <Typography
            variant="h4"
            sx={{ mb: "20px", fontWeight: "300", fontSize: "30px" }}
          >
            An{" "}
            <Typography component="span" variant="h4" sx={{ color: "#1e73be" }}>
              IT Services, Staffing
            </Typography>{" "}
            and{" "}
            <Typography component="span" variant="h4" sx={{ color: "#1e73be" }}>
              Training
            </Typography>{" "}
            company.
          </Typography>
          <Box sx={{ mb: "24px", textAlign: "center", fontSize: "16px" }}>
            <Typography>
              Our company has the right experience, expertise and client network
              you need to land the right IT job.
            </Typography>
            <Typography
              sx={{
                borderBottom: "1px dashed",
                borderBottomWidth: "1px",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              Start your search for a bright career with us.
            </Typography></Box>
          </Box>
          <Grid container sx={{ width: '100%' }}>
            <Grid item md={4} sx={{m:'10px'}}>
              {" "}
              <TextField
                id="outlined-basic"
                label="job title, keywords. e.g. hadoop"
                variant="outlined" fullWidth 
              />
            </Grid>
            <Grid item md={4} sx={{m:'10px'}}>
              {" "}
              <TextField
                id="outlined-basic"
                label="city, state. e.g. california"
                variant="outlined" fullWidth 
              />{" "}
            </Grid>
            <Grid item md={3} sx={{mt:'15px', float:'right', height:'100%'}}>
              
              <Button>Search IT Jobs</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Typography>{''}</Typography>
          <Typography>{''}</Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;
