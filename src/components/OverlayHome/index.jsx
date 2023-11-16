import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import overlayImage from "../../assets/clients-small.jpg";
import overlayImage2 from "../../assets/job-career.jpg";
import overlayImage3 from "../../assets/services.jpg";
import { Link } from "react-router-dom";
const OverlayHome = () => {
  //check if its small screen
  const isSmallScreen = useMediaQuery("(max-width:850px)");

  return (
    <Box
      sx={{
        //overlay image css
        //position: "absolute",
        top: "21px",
        left: 0,
        right: 0,
        width: "100%",
        height: "50vh", // Set the height as needed
        overflow: "hidden", // Hide overflowing content
      }}
    >
      <Box
        className="logoName"
        sx={{ position: "absolute", zIndex: 2, top: 30, left: 20 }}
      >
        <Link to="/">
          <img
            alt="Nirvana Enterprises"
            src="https://www.nirvanaenterprises.com/wp-content/uploads/nirvana-enterprises-logo-white.png"
            title="Nirvana Enterprises"
            width="250"
            height="60"
          ></img>
        </Link>
      </Box>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        sx={{ mt: "20px" }}
      >
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              filter: "grayscale(0.4)",
            }}
          >
            <img src={`${overlayImage}`} loading="lazy" />
          </Box>
          <Box sx={{ position: "relative", textAlign: "left" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Digitally Transform your business with our IT Services
            </Typography>
            <Button>LEARN MORE</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              filter: "grayscale(0.4)",
            }}
          >
            <img src={`${overlayImage2}`} loading="lazy" />
          </Box>
          <Box sx={{ position: "relative", textAlign: "left" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Turn your passion into a Career
            </Typography>
            <Button>LEARN MORE</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              filter: "grayscale(0.4)",
            }}
          >
            <img src={`${overlayImage3}`} loading="lazy" />
          </Box>
          <Box sx={{ position: "relative", textAlign: "left" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Why our clients love us...
            </Typography>
            <Button>LEARN MORE</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              filter: "grayscale(0.4)",
            }}
          >
            <img src={`${overlayImage2}`} loading="lazy" />
          </Box>
          <Box sx={{ position: "relative", textAlign: "left" }}>
            <Typography variant="h4" sx={{ color: "white" }}>
              Learning creates Opportunities
            </Typography>
            <Button>LEARN MORE</Button>
          </Box>
        </SwiperSlide>
      </Swiper>

      {/* Background image
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //backgroundImage: `url(${overlayImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 0,
          height:'100%',
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.35)',
          //backgroundColor: "rgba(0, 0, 0, 0.35)",
          //filter: 'grayscale(100%)'
        }}
      />
    
      <Box className="over"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          position: "absolute",
          zIndex: 2, // Ensure the content is above the background color overlay
          // Add other styles as needed
          top:30,
          left:20,
          width:'100%',
          height:  '100px',

          

        }}
      >
        {!isSmallScreen?
        <Box>
          <img
            alt="Nirvana Enterprises"
            src="https://www.nirvanaenterprises.com/wp-content/uploads/nirvana-enterprises-logo-white.png"
            title="Nirvana Enterprises"
            width="250"
            height="60"
            
          ></img>
        </Box>:<></>}
        

        <Typography
          sx={{
            fontWeight: "600",
            display: 'flex',
            flexDirection: 'column',
            color: "white",
            fontSize: 50,
            textAlign: "center",
            alignItems: 'center',
            justifyContent: 'center',
            height: '20vh',
          }}
        >
         main
        </Typography>
        <Typography
          sx={{
            fontWeight: "100",

            color: "white",
            fontSize: 30,
            textAlign: "center",
            height: '20vh',
          }}
        >
          sub
        </Typography>
      </Box> */}
    </Box>
  );
};

export default OverlayHome;
