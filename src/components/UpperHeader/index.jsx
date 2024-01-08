import { Box } from "@mui/material";

import React, { useEffect } from "react";
import { StyledAppbar, UpperAppbar } from "./UpperHeader.style";
import moment from "moment-timezone";

const UpperHeader = () => {
  const [clock, setClock] = React.useState(() =>
  moment().tz("America/New_York").format("MMMM Do YYYY, h:mm a z")
  );
  useEffect(() => {
    let intervalID = setInterval(() => {
      //console.log("hello");
      setClock(
        moment().tz("America/New_York").format("MMMM Do YYYY, h:mm a z")
      );
    }, 60000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <StyledAppbar>
      <UpperAppbar>
        {" "}
        <Box sx={{ float: "right" }}>{clock}</Box>
      </UpperAppbar>
    </StyledAppbar>
  );
};

export default UpperHeader;
