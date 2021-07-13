import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '100%',
    
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Feetype(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {props.Set}
                </Typography>
                <Typography variant="body2" gutterBottom>       
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {props.Roomprice}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {props.Electric}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {props.Water}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                 {props.Delete}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button size="small">{props.delete}</Button>
            </Grid>       
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
