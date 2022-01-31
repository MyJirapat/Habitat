import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
import "../../Css/Account/Login.css";
import Axios from "axios";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(7),
    marginRight: 540,
    maxWidth: 510,
    borderRadius: 18
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
  fabButton: {
    
    width: 400,
    height:38,
    margin: '0 auto',
  },

  Move:{
    marginLeft: "30%",
  }
}));

function Login(props){
  const classes = useStyles();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = event => {
    event.preventDefault();
    Axios.post("/staff/login", {
      "username": username,
      "password": password,
    }).then ( (response)=>{
      //window.location.href = '/building_sp';
      props.isLog(false)
      
      console.log(response);
      
    })
};
   return (
        <div className="wrappers">
          <div className="container-fruid">
            <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
          <h2 style={{ color: '#485D84' }} > Habitat </h2>
          <p className={classes.Move} style={{ color: '#485D84'}}>Residence hall</p>
         </Typography>
                <div className="forms">
              <div className="email">
                  <input
                   type="text"
                    placeholder="Username"
                    onChange={(event)=>{
                    setUsername(event.target.value);
                  }}         
                />     
              </div>
              <div className="email">
                  <input
                  type="password"
                    placeholder="Password"
                    onChange={(event)=>{
                    setPassword(event.target.value);
                  }}            
                />     
              </div>          
                  <Button
                      type="submit"   
                       variant="contained" 
                      onClick={Login}
                            color="primary" disableElevation
                            style={{ backgroundColor: '#485D84' }} 
                            className={classes.fabButton}>                   
                    Log In
                  </Button>
                  <br/>
                  <br/>
                  <br/>
                 
                  <NavLink to="/registration" style={{ textDecoration: 'none' }}> 
                  <Button   
                      variant="contained" 
                      disableElevation 
                            style={{ backgroundColor: '#E4F0FE' }} 
                            className={classes.fabButton}>                   
                    Create 
                  </Button>
                  </NavLink>
                  </div>
          </Paper>
          </div>
        </div>         
      );
  } 
 export default Login;
