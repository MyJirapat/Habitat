import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import '../Css/Setup.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '58%',
    marginTop: "-3%",
    display: "block",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

    left:{
      marginright: '300%'
    },   
    
    Btn:{
      padding: '10px 170px'
    },

  },

  Title:{
    marginright: '10%'
  }
}));

export default function BuildingDialog() {
  const classes =useStyles(); 
  /*const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [totalinput, setTotalinput] = useState("");

  const add = () => {
    setTotal({ total: totalinput });
  };*/ 
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [totalinput, setTotalinput] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const add = () => {
    setTotal({ total: totalinput });
  };

  const onChange = (event) => {
    setName({
      [event.target.name]: event.target.value
    });
  };

  
  
  return (
    <div className={classes.root} >
      <Typography gutterBottom variant="h5" component="h1">    
                  <h3>Setup</h3> 
      </Typography >     

          <form noValidate>
          
          </form>
    </div>
  );
}
