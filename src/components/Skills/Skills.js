import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@material-ui/core";
import Typed from "react-typed";
import "./skill.css";
const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    textAlign: "center",
    fontSize: "50px",
    marginTop: "40px",
    "@media (max-width: 425px)": {
      fontSize: `30px !important`,
    }
  },
  course: {
    color: "white",
    fontSize: "30px",
    width: "100%",
    paddingTop: "50px",
    "@media (max-width: 425px)": {
      fontSize: `20px !important`,
    }
  },

  subcontainer: {
    padding: "30px",
  },
  container: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  slider: {
    "@media (max-width: 425px)": {
      width: `60% !important`,
    }
  }
}));

export default function SliderSizes() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography className={classes.header} variant="h4">
          <Typed
            strings={["Skillsets"]}
            typeSpeed={60}
            backSpeed={60}
            loop
            startDelay={500}
          />
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.subcontainer}>
          <Box width={500} >
            <Typography className={classes.course}>HTML:</Typography>
            <Slider
              className={classes.slider}
              defaultValue={90}
              disabled
              valueLabelDisplay="on"
            />
          </Box>

          <Box width={500}>
            <Typography className={classes.course}>CSS:</Typography>
            <Slider className={classes.slider} defaultValue={80} disabled valueLabelDisplay="on" />
          </Box>

          <Box width={500}>
            <Typography className={classes.course}>Javascript:</Typography>
            <Slider className={classes.slider} defaultValue={60} disabled valueLabelDisplay="on" />
          </Box>
        </Box>

        <Box className={classes.subcontainer}>
          <Box width={500}>
            <Typography className={classes.course}>React:</Typography>
            <Slider className={classes.slider} defaultValue={70} disabled valueLabelDisplay="on" />
          </Box>

          <Box width={500}>
            <Typography className={classes.course}>React Native:</Typography>
            <Slider className={classes.slider} defaultValue={50} disabled valueLabelDisplay="on" />
          </Box>

          <Box width={500}>
            <Typography className={classes.course}>Typescript:</Typography>
            <Slider className={classes.slider} defaultValue={40} disabled valueLabelDisplay="on" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
