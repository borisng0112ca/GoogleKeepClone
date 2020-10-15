import Typewriter from "typewriter-effect";
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from 'react-bootstrap/Button';
import CreateArea from "./CreateArea";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CreateArea/>
        <Button className = "loginButton" varient="primary" size="lg" block href="http://localhost:4000/auth/twitter">Sign In with Twitter<i className="fab fa-twitter"></i></Button>
        <div className="typeWriter">
          <Typewriter
          options={{
            loop: true,
          }}
            onInit={(typewriter) => {
              typewriter.typeString("Hi there, I'm Boris. Welcome to KEEP!").start().pauseFor(3000).deleteAll();
            }}
          />
      </div>
      </div>
    </Container>
  );
}



