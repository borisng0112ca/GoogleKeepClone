import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderLogin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#4fc3f7' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            KEEP
          </Typography>
          <Button color="inherit" href="http://localhost:4000/auth/twitter">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
