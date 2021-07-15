import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import ImpNews from '../../Components/Anouncement/Important';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from '@material-ui/core/Typography';
import General from "../../Components/Anouncement/General";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Details from '../../Components/Anouncement/Detail';
import Comment from '../../Components/Anouncement/Comment';

//import "../../Css/Announcement/Anouce.css";
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    marginTop: -25,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

    change:{
        color:'black'
    },

    Font:{
      fontFamily: [
        '"Helvetica Neue"',

        
      ].join(','),
    },

    Move: {
        marginright: '500%',
        marginTop: "-5%",
        display: "block",
        '& > * + *': {
          marginTop: theme.spacing(5),
        },

        Btn:{
          marginleft: '5%',     
        }
    }
  },
}));

/*const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        
      </MuiDialogTitle>
    );
  });

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
     
  }))(MuiDialogActions);

const DialogContent = withStyles((theme) => ({
}))(MuiDialogContent);*/
  
function Social() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
          console.log(value);
          result = allData.filter((data) => {
          return data.tite.search(value) != -1;
    });
    setFilteredData(result);
    }

useEffect(() => {
    axios('https://60aa459d66f1d000177729b4.mockapi.io/api/v1/announcement')
    .then(response => {
         console.log(response.data)
    setAllData(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);
    
return (  
    <div className="row">                
           <div className="col-md">    
        <Paper component="form" className={classes.root}>
        <TextField 
              size="small"
              variant="outlined" 
              label="Search" 
              onChange={(event) =>handleSearch(event)} 
              placeholder="Search..."
            />
      </Paper>
      </div>
      
    <div className="col-md-2">    
        <div className={classes.Move} >
        <Button variant="contained" color="primary" disableElevation
          style={{ backgroundColor: '#485D84' }}
        onClick={handleClickOpen}>
        Compose
      </Button>   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
      <DialogTitle id="edit-apartment">
      <h4>  New Announcement </h4> 
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          
    <form noValidate>
          <div className="Title">
                <label >Title</label>
                <input   
                  placeholder="Title"
                  type="Buildingname"
                  name="text"
                  noValidate           
                />    
              </div>
      
              <div className="Type">
                <label htmlFor="Province">Type</label>
                <input   
                  placeholder="Type"
                  type="Province"
                  name="Province"
                  noValidate           
                />    
              </div>

              <div className="Date">
                <label htmlFor="Date">Date</label>
                <input   
                  placeholder="Date"
                  type="date"
                  name="Date"
                  noValidate           
                />    
              </div>

              <div className="Description">
                <label htmlFor="Date">Description</label>
                <textarea  className="Des"
                  placeholder="Description"
                  type="text"
                  name="Description"
                  noValidate           
                />    
              </div>
            
            </form>
        </DialogContent>      
        <DialogActions >
            <Button  className={classes.Btn} variant="contained" color="primary" disableElevation
              style={{ backgroundColor: '#485D84' }}
              onClick={handleClickOpen}>
              Announce
            </Button>   
            <Button className={classes.Btn} variant="contained" color="primary" disableElevation
              style={{ backgroundColor: '#485D84' }}
              onClick={handleClickOpen}>
              Cancel
          </Button>   
        </DialogActions>
      </Dialog>
</div>

</div>

        <div className="row">                
           <div className="col-md">           
                               
                <div className="cards-container">
                 <Typography gutterBottom variant="h5" component="h1">    
                  <h3>Announcement</h3>    
                  <Divider variant="middle"/>
                 </Typography>                       
                    {filteredData.map((value,index)=>(                 
                    <Details
                        key={index} 
                        Name={value.tite}
                        img={value.image}
                        //cell={value.description}
                        ID ={value.id}/>
                         ))}                
                    </div>                
                </div>                    
             </div>
             
            <div className="col-md">
              
                <div className="cards-container">  
                  <Typography gutterBottom variant="h5" component="h1">    
                  <h3 >Comment</h3>    
                  <Divider variant="middle"/>                
                 </Typography>                                      
             
                   <Comment/>
                                                                              
                 </div>                   
            </div>                
        </div>
   

);
}

export default Social;














