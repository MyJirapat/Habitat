import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import "./../../Css/Announcement/general.css"


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
    boxShadow: "0px 0px 0px 0px #ffffff",
   


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
    width: 48,
    height: 48,
    objectFit: 'cover',
    borderRadius: 24,
    potition: 'absolute',
    marginLeft: '20px',
    marginTop: "20px"

  },
  papercard: {
      width: '436px',
      boxShadow: "0px 0px 0px #E8E8E8",
    //   margin: 'auto',
      marginLeft: 0,
      marginBottom: "4px",
    //   backgroundColor:'green',
        position:'relative',
        
  },
  typography: {
    fontFamily: "Helvetica Neue",
    color:  "#4A4A4A",
    width: "320px",
    marginLeft: "16px",
    paddingBottom: "20px",
    paddingTop: "45px",
    // marginRight: "auto",
    // maxInlineSize: "571px",


  },
}));

export default function Cardcomment(props) {
  const classes = useStyles();
  const str = props.Date


 //API id, current date and role haven't been add yet

  return (
    <div>
      <Paper className={classes.papercard}>
      {/* <Paper className={classes.paper}> */}
        <Grid container spacing={0}>
          <Grid item>
            {/* <ButtonBase className={classes.img} > */}
              <img className={classes.img} src={props.profileUrl} />
            {/* </ButtonBase> */}
          </Grid>
          <Grid item xs={12} sm container>
            {/* <Grid item xs container direction="column" spacing={2}> */}
              <Grid>
                {/* <Typography gutterBottom variant="subtitle1">  
                </Typography> */}
                {/* <Typography variant="body2" color="textSecondary"> */}
                 <p style={{marginLeft:"16px", paddingTop:"20px", fontSize:"15.4px", fontWeight:"bold", color:"#4A4A4A",position:"absolute"}}>
                  
                   {props.firstName} {props.lastName} 

                  </p> 
                {/* </Typography> */}
                <Typography className={classes.typography}>
                 {/* <p id="generalcelltitle" > */}
                     {props.message} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {props.remove}
                </Typography>
                <div style={{fontSize:"9.7px" , fontWeight:'bold', color:"#D8D8D8", position:"absolute", bottom:0, left:0, marginLeft:84}}>
                    {props.commentDate}
                </div>
                

            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
