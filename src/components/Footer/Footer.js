import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "white",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "black",
      "&:hover": {
        fill: "tan",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="#" target="_black"> <BottomNavigationAction icon={<Facebook />} className={classes.root} /></a>
      <a href="#" target="_blank"><BottomNavigationAction icon={<LinkedInIcon/>} className={classes.root} /></a>
      <a href="#" target="_blank"><BottomNavigationAction icon={<Instagram />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;
