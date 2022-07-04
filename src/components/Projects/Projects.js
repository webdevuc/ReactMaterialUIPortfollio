import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../../assets/images/css.png";
import project2 from "../../assets/images/react-redux.jpg";
import project3 from "../../assets/images/react2.png";
import project4 from "../../assets/images/saga.png";
import project5 from "../../assets/images/mui.png";
import project6 from "../../assets/images/thunk.png";
const useStyles = makeStyles(() => ({

  cardContainer: {
  display: "block",
    height: "90%",
    margin: "1rem ",

  },
  img: {
    width: "auto",
    margin: "auto",
  }
}));

const projects = [
  {
    name: "Project 1",
    description: `Created sign in and sign up page using HTML , CSS and JS..There I have designed
     a form with textfields ,selects,and buttons components ..Also I have the form responsive with all the devices using mediaquery in css`,
    image: project1,
  },

  {
    name: "Project 2",
    description: `Created Crud operation using react functional component,class component and 
    also using redux!..Also I have the form responsive with all the devices using mediaquery in css`,
    image: project2,
  },
  {
    name: "Project 3",
    description: `Created Sign up and sign in form using react...Also
     I have the form responsive with all the devices using mediaquery in css`,
    image: project3,
  },
  {
    name: "Project 4",
    description: `Created Project in Redux-Saga which is used for handling side effects ,
    using both connect and useselector method ,here I 
    have performed Add,delete,read,update functionality `,
    image: project4,
  },
  {
    name: "Project 5",
    description: `Created Portfollio website using react and material UI where 
    I have used MUI components like slider, cards,grid etc..`,
    image: project5,
  },
  {
    name: "Project 6",
    description:`Created  project in Redux-Thunk which is used for handling 
    side effects using both connect and useselector method .here I have performed
     Add,delete,read,update functionality`,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea >
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                  className={classes.img}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
