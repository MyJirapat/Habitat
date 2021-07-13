import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CreateIcon from '@material-ui/icons/Create';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import IconButton from '@material-ui/core/IconButton';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SingleBedIcon from '@material-ui/icons/SingleBed';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import '../Css/Card-style.css';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    justifyContent: 'left',
    marginLeft: '17%'
    
  },

  

  border:{
    borderRadius: "25px"
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  move:{
    left: "180%",
    marginTop: "10%"
  },
  titilemove:{
    left: "10%"
  },

  BedIcon:{
    marginTop: "-55%"
  },
 
  PersonIcon:{
    marginTop: "-20%"
  },


});

const Card = props=>{
  const classes = useStyles();

  return(
  <Typography paragraph>

  <div className= "card text-center">
    <div className= "overflow">
      <CardActions>
      <h3 className="card-title"> {props.title} </h3>
      </CardActions>
    </div>

    <div className= "card-body text-dark"> 
      <Typography  color="textSecondary">
      {props.character}
      </Typography>
    </div>

    <CardActions >
      <IconButton className={classes.BedIcon} size="small"> {props.bed} </IconButton>
      <p  className= "card-bed"> {props.bednum}</p>
    </CardActions>

    <CardActions >
      <IconButton className={classes.PersonIcon} size="small">{props.person}</IconButton>
      <div class= "col">
      <p className= "card-text "> {props.text}</p>
      <p className= "card-text2 "> {props.text2}</p>
      <p className= "card-text3 "> {props.text3}</p>
      </div>
    </CardActions>
   
    <div class= "row">
      <CardActions>
           <IconButton className={classes.move} size="small">{props.erroricon}</IconButton>
           <IconButton className={classes.move} size="small">{props.delete}</IconButton>   
           <IconButton className={classes.move} size="small">{props.post}</IconButton>  
      </CardActions>      
    </div>  
</div>

  </Typography>
  );
}

export default Card;
