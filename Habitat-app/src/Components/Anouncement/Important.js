import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";
import { styled } from  '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Grid } from "@material-ui/core/";
import "./../../Css/Announcement/Anouce.css"
import moment from 'moment';
// import "./../../Css/Announcement/Socialcard.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 281,
    minWidth: 281,
    maxHeight: 228,
    minHeight: 228,
    //marginLeft: "50%",
    margin: theme.spacing(-2),
    borderRadius: 8,
    boxShadow: "1px 2px 3px #E8E8E8"

  },

  CardActionArea: {
    borderRadius: 8,
    maxWidth: 281,
    minWidth: 281,
    maxHeight: 228,
    minHeight: 228,
  },

  paper: {
    height: "14%",
    width: "100%",
  },
  media: {
    height: 142,
    width: 261,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 8
    // marginLeft:"3%",
    // paddingLeft: 10,
    // paddingRight: 30,
    // paddingTop: 10,
    // paddingBottom: 10


  },

  move: {
    marginLeft: "7%",
    marginTop: "-10%"
    
  }
}));


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ImportantNews(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const str = props.Date

  return (
    // <Grid >  
    <div className="padleft">
      <Card className={classes.root} >
        {/*<CardActionArea className={classes.CardActionArea}>*/}
          <img src={props.img} className={classes.media} />
          {/* <h3 className={classes.move}>{props.name} </h3> */}
          <CardContent>

            {/* <Typography gutterBottom variant="h6" component="h2"> */}
            <div id="importantdate">
              {moment(str.replace(/[^a-zA-Z0-9]/g, "")).format("L")}
             
            </div>
            <div id="importanttopic">{props.Name}</div>
               
            {/* </Typography> */}
            <Typography className={classes.move} gutterBottom variant="h5"component="h2">
                {props.delete}
            </Typography>
        
            <Typography  variant="body2" color="textSecondary" component="p">
              {props.cell}
            </Typography>
          
          </CardContent>
        {/*</CardActionArea>*/}
        <CardActions>
          {/*<Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">{props.btn2}</Button>*/}
        </CardActions>
      </Card>
    </div>

    // </Grid>
  );
}
export default ImportantNews;
