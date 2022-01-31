import React, {useEffect, useState} from "react";
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import axios from "axios";

//import "../../Css/Fee/Fee.css";

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

  Card:{
    width: '100%',
    padding: theme.spacing(3),
    margin: 'auto',
  },

  root2: {
    flexGrow: 1,
  },
  papers: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  images: {
    width: 128,
    height: 128,
  },
  imgs: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  Dialog:{
    padding: theme.spacing(2),
    width: 450,
    
  }

}));


export default function Feetype(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [allfeeset, setAllfeeset] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(()=>{
    axios.get('/feeset/fee-sets').then(response =>{
      console.log(response.data);
      setAllfeeset(response.data);
      
    })
    .catch(error => {
      console.log('Error data: ' + error);
      })
  }, []);


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography  style={{ marginLeft: "-12%" }}
                gutterBottom variant="h5">
                  {props.Set} 
                  <Button size="small">{props.info}</Button>   
                {/*<Button 
                        onClick={handleClickOpen} size="small">
                <InfoIcon size="small"/>{props.dialogaction}</Button>*/}
                    
     {/* <Dialog open={open} onClose={handleClose} 
              aria-labelledby="edit-apartment">
        
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>Set</DialogTitle>
        <DialogContent className={classes.Dialog}>
          <DialogContentText>
            <form >
            <Grid container spacing={2}>
              <Grid item xs={5}>
                  <Typography gutterBottom variant="subtitle1">
                    {props.name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {props.name}
                  </Typography>
              
              </Grid>
          <Grid item xs={5}>
            <Typography gutterBottom variant="subtitle1">
                  {props.roomprice}
                </Typography>
               
          </Grid>
          <Grid item xs={2} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={5}>
                <Typography gutterBottom variant="subtitle1">
                    {props.currency}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>                    
            <DialogActions className="createAccount">
            </DialogActions>
            </form>
          </DialogContentText>
        </DialogContent>      
  </Dialog>*/}
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
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
                <Button size="small">{props.Edit}</Button>
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