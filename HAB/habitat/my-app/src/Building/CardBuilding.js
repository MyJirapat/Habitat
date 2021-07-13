import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 500,
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

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={10}>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.Title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.Description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.Listname1}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.Listname2}
                </Typography>            
                <Typography variant="body2" color="textSecondary">
                  {props.Listname3}
                </Typography>         
              </Grid>                        
              <CardActions>
                <Button size="small" variant="contained" color="primary" disableElevation
                style={{ backgroundColor: '#485D84' }}>
                {props.Manage}
                </Button>
                <Button size="small" variant="contained" color="primary" disableElevation
                style={{ backgroundColor: '#485D84' }}>
                {props.Edit}
                </Button>
               </CardActions>
              </Grid> 
            <Grid item>
              <Typography variant="subtitle1">{props.Roomnumber}</Typography>
            </Grid>
            
            
          </Grid>    
          
        </Grid>
      </Paper>
    </div>
  );
}

/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>*/