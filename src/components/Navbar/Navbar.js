import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DensityMedium from '@mui/icons-material/DensityMedium';
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import girl from "../../assets/images/girl2.jpg";
import avatarpic from "../../assets/images/avatar.png";
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "white",
  },
  title: {
    color: "white",
    "@media (max-width: 425px)": {
      fontSize: `20px !important`,
    }
  },
  menuSliderContainer: {
    width: 250,
    background: "white",
    height: "100%",
  },
  avatar: {

    margin: "0.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),

  },
  listItem: {
    color: "black",
  },
  close:{
    display:"flex",
    flexDirection:"row-reverse"
  }
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Skillsets", listPath: "/skill" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/projects" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} >
      <Box className={classes.close}>
       <IconButton onClick={() => setOpen(false)}>
          <CloseIcon className={classes.close} />
        </IconButton>
        </Box>
      <Avatar className={classes.avatar} src={avatarpic} />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            key={i}
            className={classes.listItem}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <DensityMedium className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClick={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
