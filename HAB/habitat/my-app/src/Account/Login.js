import React, { Component } from "react";

import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from  '@material-ui/core';
import Headers from "../Component/Header"
import TextField from "../Component/Textfield"
//import Button from "../components/Button";

import "../Css/Login.css";



function Login(){
    return (
        <div className=":Login">
          <header className="Log-header">
          <form className= "form">
          <Headers/>
          <TextField/>

          
          </form>
          </header>
        </div>
      );
    }


export default Login;


/*<Header/>
          <TextField/>*/