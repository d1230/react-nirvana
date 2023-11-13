import { Box, Typography } from "@mui/material";
import React from "react";

const OverlayHeader = (props) => {
  const { overlayImage, mainText, subText } = props;
  console.log(overlayImage, mainText, subText);

  return (
    <Box
      sx={{
        //overlay image css
        //position: "absolute",
        top:'21px',
        left:0,
        right:0,
        width: "100%",
        height: "50vh", // Set the height as needed
        overflow: "hidden", // Hide overflowing content
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${overlayImage})`,
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
      {/* Gray background for the image */}
      {/* <Box
        sx={{
          //position: "absolute",
          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.35)", // Use your desired gray color
          zIndex: 1,
        }}
      /> */}
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
        <Box>
          <img
            alt="Nirvana Enterprises"
            src="https://www.nirvanaenterprises.com/wp-content/uploads/nirvana-enterprises-logo-white.png"
            title="Nirvana Enterprises"
            width="250"
            height="60"
            
          ></img>
        </Box>

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
          {mainText}
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
          {subText}
        </Typography>
      </Box>
      
    </Box>
  );
};

export default OverlayHeader;
