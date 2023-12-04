import { Grid, Typography } from "@mui/material";
import OverlayHeader from "../../components/OverlayHeader";
import text from "../../configs/Text";
import jobcareer from "../../assets/job-career.jpg";
import { Box, Divider } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const JobSeekers = () => {
  return (
    <>
      <>
        <OverlayHeader
          overlayImage={jobcareer}
          mainText={text.jobSeekers.Header.main}
          subText={text.jobSeekers.Header.sub}
        ></OverlayHeader>

        <Grid
          className="find"
          container
          sx={{ zIndex: 2, height: "100%", p: 10 }}
        >
          <Grid item sm={1} md={1}></Grid>
          <Grid item sm={6} md={6}>
            <Typography variant="subtitle3" sx={{ mb: "1.5em" }}>
              Start fresh. Explore bright opportunities every day in IT at
              Nirvana Enterprises.
            </Typography>
            <Divider sx={{ mt: "1.5em", mb: "1.5rem" }} />
            <Box>
              <Typography variant="h4" sx={{ mb: "1.5em" }}>
                Why join Nirvana Enterprises?
              </Typography>
              <Typography variant="subtitle3" sx={{ fontSize: "16px" }}>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                <Box fontWeight="600" display="inline">
                  OPPORTUNITY,
                </Box>{" "}
                Our reputation attracts Fortune 500 employers offering you the
                best job opportunities for your career growth.
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3">
                {" "}
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />{" "}
                <Box fontWeight="600" display="inline">
                  SALARY AND REWARD,
                </Box>{" "}
                We not only offer a highly competitive salary but also reward
                and recognize your hard-work, passion and commitment.
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3">
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                <Box fontWeight="600" display="inline">
                  TRAINING,
                </Box>{" "}
                We offer online IT training across a variety of courses through
                our education portal – EDUZZA.com
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3">
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                <Box fontWeight="600" display="inline">
                  INTERVIEW,
                </Box>{" "}
                We help you with interviews to uncover your skill set and career
                aspirations.
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3">
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                <Box fontWeight="600" display="inline">
                  RESUME,
                </Box>{" "}
                We help you with creating a professional resume to showcase your
                experience and knowledge.
              </Typography>
              <Typography>{""}</Typography>
              <Typography variant="subtitle3">
                <ArrowForwardIosIcon
                  sx={{ fontSize: "14px", color: "blue", mr: "1vh" }}
                />
                <Box fontWeight="600" display="inline">
                  CARE,
                </Box>{" "}
                We genuinely care about our employees, and our goal is to help
                you become successful.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ mt: "1.5em", mb: "1.5rem" }}>
                So are you ready to start fresh?
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ mt: "1.5em", mb: "1.5rem" }}>
                <Box color="blue" display="inline">
                  Browse our IT Jobs opportunities
                </Box>{" "}
                today and apply for a position that suits you.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ mt: "1.5em", mb: "1.5rem" }}>
                At Nirvana Enterprises, we work on matching your skills to IT
                jobs that are right for you. Whether you need a temporary or
                permanent position, we can help. Take the first step by
                submitting your resume.
              </Typography>
            </Box>
          </Grid>

          <Grid item sm={1} md={1}></Grid>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              backgroundColor: "#f08804",
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
    </>
  );
};

export default JobSeekers;
