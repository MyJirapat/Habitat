import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import "./../../Css/Announcement/detail.css"
import { Divider } from '@material-ui/core';
import moment from 'moment';
import Comment from './Comment';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
  },
  paper: {
    padding: theme.spacing(0),
    marginLeft: 0,
    width: "708.5px",
    borderRadius: "8.5px",
    boxShadow: "0 0px 0px 0 #ffffff"
  },

  img: {
    margin: 'auto',
    display: 'block',
    // maxWidth: '100%',
    // maxHeight: '100%',
    width: "571px",
    height: "289.5px",
    borderRadius: "8.5px",
    display: "block",
    marginLeft: "70px",
  },

  heder:{
    height: "105px",
  },

  typography: {
    fontFamily: "Helvetica Neue",
    color:  "#4A4A4A",
    width: "571px",
    marginLeft: "auto",
    marginRight: "auto"
  },
}));


export default function Detail(props) {
  const classes = useStyles();
  return (
    <div >
      <Paper className={classes.paper}>
            <div className={classes.heder} >     
                  <p style={{marginLeft:"25px", paddingTop:"32.36px", fontSize:"19.4px", fontWeight:"bold", color:"#4A4A4A"}}>
                    {props.title}
                    </p>
                  <p style={{marginLeft:"25px", paddingTop:"68.18px", fontSize:"16.18px", fontWeight:400, color:"#4A4A4A", position:"absolute", top:0}}>
                  {props.type} • {props.announceDate}
                  </p>
            </div>
        <Divider style={{backgroundColor:"#AAAAAA", margin: "0px 13.7px"}}/>
        <Grid container spacing={1}>
          
          <Grid item>
            <div style={{height:"25px"}}/>

              <img className={classes.img} alt="complex" src={props.imageUrl} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
              </Grid>
              {/* <Grid item> */}
                <div style={{height:"20px"}}/>

                <Typography className={classes.typography} style={{paddingBottom:"50px"}}>


                  {props.description}
                </Typography>
              {/* </Grid> */}
            </Grid>           
          </Grid>
        </Grid>
      </Paper>

    </div>


  );
}












/*<Paper className={classes.paper}>
<Grid container spacing={2}>
  <Grid item xs={12} sm container>
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs>
      <CardActionArea>
      <img src={props.img} className={classes.media}/>  
      </CardActionArea>
      </Grid>
      <Grid item>
        <Typography variant="body2" style={{ cursor: 'pointer' }}>
         {props.Delete}
        </Typography>
      </Grid>
    </Grid>
    <Grid item>
    </Grid>       
  </Grid>
</Grid>
</Paper>*/