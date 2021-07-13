import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '325%',
    height: 310
    
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

  media: {
    height: 230,
    marginLeft:"3%"
  },
}));

export default function Details(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
          <CardActionArea>
            <img src={props.img} className={classes.media}/>  
            <h3 className={classes.move}>{props.name} </h3>
          </CardActionArea>
        </Paper>

          <Typography 
              gutterBottom variant="h5" 
              component="h2">
              {props.Description}
          </Typography>
    </div>
  );
}
