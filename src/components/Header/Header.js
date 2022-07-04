import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatarpic from "../../assets/images/avatar.png";
const useStyles = makeStyles((theme) => ({

  title: {
    color: "white",
    "@media (max-width: 425px)": {
      fontSize: `25px !important`,
    }
  },
  subtitle: {
    color: "grey",
    textTransform: "uppercase",
    "@media (max-width: 425px)": {
      fontSize: `20px !important`,
    }
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
  },
  avatar: {
    margin: "0.5rem auto",
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Box >
      <Box className={classes.typedContainer}>
        <Avatar className={classes.avatar} src={avatarpic} />
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Web Dev "]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={["Frontend Developer"]}
            startDelay={1000}
            typeSpeed={30}
            backSpeed={30}
            loop
          />
        </Typography>
 
      </Box>
      {children}
    </Box>
  );
};

export default Header;
