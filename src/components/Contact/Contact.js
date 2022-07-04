import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({

  heading: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "white",
  },
  button: {
    marginTop: "1rem",
    color: "#32CD30",
    borderColor: "white",
    fontSize:"20px"
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "White",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "white",
      },
    },
  },
})(TextField);



const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [msg, setmsg] = useState('');
  const localsave = () => {
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("message", msg)
  }
  return (
    <Box component="div">

        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            value={name}
            variant="outlined"
            inputProps={{ className: classes.input }}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            value={email}
            inputProps={{ className: classes.input }}
            className={classes.field}
            onChange={(e) => setemail(e.target.value)}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            value={msg}
            rows={4}
            inputProps={{ className: classes.input }}
            onChange={(e) => setmsg(e.target.value)}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={localsave}
          >
            Contact Me
          </Button >
        </Box>
    
    </Box>
  );
};

export default Contact;
