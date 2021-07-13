import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar , TextField,Button} from  '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    
    root:{
       /* background: "#fff",*/
        width: "100%",       
    },

    outlined:{
        width: "100%",   
        marginBottom: "20%",
        backgroundColor: "#fff",
        borderRadius: "5px"   
    },

    outlined2:{
        width: "100%",
        marginTop: "-60px",   
        backgroundColor: "#fff",
        borderRadius: "5px",     
    },

    contained:{
        width: "100%",
        marginTop: "5px",
        
          borderRadius: "5px"
    },
    
    form:{
        backgroud: "#fff",
    }
}));


export default function Text(){
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
        
        <TextField className={classes.outlined} 
         id="outlined-basic" 
         label="Username"
         variant="outlined"
          />

        <TextField className={classes.outlined2} 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        />
        
        <Link to= "/menu">
        <Button className={classes.contained} variant="contained" color="primary" href="#contained-buttons">
         Login
       </Button>
       </Link>

      </form>
       
   
    );
}