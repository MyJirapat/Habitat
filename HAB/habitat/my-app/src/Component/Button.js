import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '310%',
    marginTop: "-50%",
    display: "block",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
      variant="contained" 
      color="primary" 
      href="#contained-buttons">
        Create
      </Button>
    </div>
  );
}