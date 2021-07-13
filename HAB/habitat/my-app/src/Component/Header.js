import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar , TextField} from  '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    appbar:{
        background: "none",
    },

    icon: {
        color: '#fff',
        fontSize: "1rem",
    } ,

    form:{
        backgroud: "#fff",
        

    },

    font:{
        color:"#2c41b5",
    }


}));
export default function Header(){
    const classes = useStyles();
    return(
         <div className={classes.appbar} elevation={0}>     
            <h1 className={classes.font} elevation={0}  >  Habitat   </h1>
            <IconButton>
            </IconButton>
            
       
    </div>
    );
}