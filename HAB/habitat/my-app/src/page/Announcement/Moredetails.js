import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Feecard from "../../Components/Feetypes/Feecard";
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Detail from "../../Components/Anouncement/Detail";
import Comment from "../../Components/Anouncement/Comment";

import Detailscard from "../../Components/Anouncement/Detailscard";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    marginTop: '-6%'   
  },

  root2: {
    display: 'flex', 
    marginTop: '-2%'   
  },


  Cards:{
    width: '55%',
    padding: theme.spacing(4),
    marginTop: "-7%",
    marginLeft: "15%",
    margin: 'auto',
    height: "450%"
  },

  Card:{
    width: '160%',
    padding: theme.spacing(4),
    marginTop: "-7%",
    marginLeft: "-130%",
    margin: 'auto',
    height: 450
  },

  heder:{
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '4%',
    
  },

  container: {
    maxHeight:440,
    width: '100%'
  },
  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 15),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    
  },

 Searchstyle: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    marginTop: -24,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  Field:{
    marginTop: "2%"
  },

  Heading:{
    marginTop: "3%"
  },

  Btn:{
    marginLeft: "93%",
    marginTop: "-6%"

  }

}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };


  /* Api call*/ 
  const [Fee, setFee] = useState([]);

  useEffect(() =>{
    async function fetchPost(){
      try{
        const requesUrl = '';
        const response = await fetch(requesUrl);
        const responseJSON =await response.json();
        console.log(responseJSON);
        setFee(responseJSON);    
    } catch{    
    }
   }
   fetchPost();


}, []);


  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>        
      <CssBaseline />     
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph className={classes.Heading} >
            <div class="container d-flex-end">
            </div>
          </Typography> 

    <div class="container d-flex-end">       
        <div className="row">     
            <div className="col-md"> 
                <Detail/>
            </div> 

            <div className="col-md"> 
                <Comment/>
            </div> 
     </div>
</div>


            








      </main>
  </div>
     
  );
}









