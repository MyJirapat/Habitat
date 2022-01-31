import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import "./../../Css/Announcement/general.css"
import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginRight: 40

  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 340,
    height: 80,
    borderRadius: 8,
    boxShadow: "1px 1px 3px #E8E8E8"
  },
  image: {
    width: 100,
    height: 63,
    position: 'relative',
  },
  img: {
    // margin: 'auto',
    // display: 'block',
    // maxWidth: '100%',
    // maxHeight: '100%',
    width: 100,
    height: 63,
    objectFit: 'cover',
    borderRadius: 8
  },

  move: {
    marginRight: "-17%",
    marginTop: "2%"
    
  },

}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  const str = props.Date

  return (
      <div className={classes.root}>
        <CardActionArea className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <img className={classes.img} src={props.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography className={classes.move} variant="body2" style={{ cursor: 'pointer' }}>
                    {props.remove}
                  </Typography>
                  <p id="generalcelldate">

                    {moment(str.replace(/[^a-zA-Z0-9]/g, "")).format("L")}
                  </p>
                  <p id="generalcelltitle" >{props.Name} </p>
                </Grid>
                <Grid item>
                 
                </Grid>
              </Grid>
              <Grid item>

              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </div>
  );
}