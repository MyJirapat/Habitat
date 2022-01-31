import React, { useState } from "react";
 import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
 import TextField from '@material-ui/core/TextField';
 import Grid from '@material-ui/core/Grid';
 import Typography from '@material-ui/core/Typography';
 import Paper from '@material-ui/core/Paper';
 import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

 import Axios from "axios";
 import "../../Css/Account/Registration.css";
 
 import {storage } from '../../base'
 import Avatar from '@mui/material/Avatar';

 import Container from '@material-ui/core/Container';
 import InputLabel from '@mui/material/InputLabel';

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
    margin: '0 auto',
  },

  Move:{
    right: 10,
  }
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

 
 export default function UserCreate() {
   const classes = useStyles();
   const [datepick, setDatePick] = useState(new Date());

   const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  //const [confirmpass, setConfirmpass] = useState("");
  const [genderId, setGenderId] = useState(2);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmpass, setConfirmpass] = useState("")
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("")
  const [progress, setProgress] = useState("")

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      //handleUpload()
      const uploadTask = storage.ref(`/${e.target.files[0].name}`).put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => { 
            storage.ref()
               .child(e.target.files[0].name)
               .getDownloadURL()
               .then(url => {
                  setUrl(url);
            });
        }
      );
    }
  };

  const handleSubmit = event => {
     event.preventDefault();
     Axios.post("/staff/register", {
      "FirstName": firstname,
      "LastName": lastname, 
      "Username": username,
      "Password": password,
      "BirthDate": birthDate,
      "GenderId": parseInt(genderId),
      "Email": email,
      "PhoneNo": phoneNo,
      "ProfileUrl": url
     
    }).then((response)=>{
          window.location.href = '/login';
      console.log(response);
    })
};

function confirmPassword(event) {
  let val = event.target.value;
  console.log(confirmPass);
  if (password === val) {
    console.log(confirmPass);
    setConfirmPass("");
    // setConfirmPass("Password matched");
  } else {
    console.log(confirmPass);
    setConfirmPass("password dont match");
  }
}

   return(
       <div className="wrappers">
       <Paper className={classes.paper}>
         <Typography 
         component="h1" variant="h5">
          <h2 style={{ color: '#485D84' }} > REGISTRATION</h2>
         </Typography>
         <form className={classes.form} onSubmit={handleSubmit}>
         <Grid item xs={12} sm={6}>
              <div className="firstName">
                  <img style={{ borderRadius: "100%", marginLeft: "75%"}} src={url} alt="" width="105" height="105" />
              </div>
                
              <input style={{ display: "none" }} type="file" 
                                        id="raised-button-file" onChange={handleChange}/>
                                            <Button  size="small" style={{ marginTop: "1%", marginLeft: "85%"  }} htmlFor="raised-button-file"
                                            component="label"> {/*<ImageIcon />*/} Insert </Button>
                                            {/*<Avatar/>*/}
             </Grid>
           <Grid container spacing={2}>   
             <Grid item xs={12} sm={6}>
              <div className="firstName">
                 <input
                      placeholder="First Name"
                      type="text"
                      //name="firstName"
                      onChange={(event)=> {
                        setFirstname(event.target.value);
                        }}             
                    />
                  </div>
             </Grid>

             <Grid item xs={10} sm={6}>
             <div className="firstName">
                    <input
                      placeholder="Last Name"
                      type="text" 
                      onChange={(event)=> {
                        setLastname(event.target.value);
                        }}    
                  />
                  </div>
                
              
             </Grid>
             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input
                      placeholder="First Name"
                      type="Date"
                      //name="firstName"
                      onChange={(event)=> {
                        setBirthDate(event.target.value);
                      }}     
                    />
                    </div>
             </Grid>
             <Grid item xs={12} sm={6}>
             <div >
         
               <select className="gen">
                    {/*<input  
                      placeholder="Gender"
                      type="number" 
                      onChange={(event)=> {
                        setGenderId(event.target.value);
                    }}                      
                  />*/}
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                  </select> 
              </div>
             </Grid>
            
             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Email"
                      type="text"  
                      onChange={(event)=> {
                        setEmail(event.target.value);
                      }}
                             
                 />
              </div>
             </Grid>

             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Phone number"
                      type="text"  
                      onChange={(event)=> {
                        setPhoneNo(event.target.value);
                      }}
                             
                 />
              </div>
             </Grid>

             <Grid item xs={12}>
             <div className="firstName">
                  <input
                    placeholder="Username"
                    type="text"     
                    onChange={(event)=> {
                      setUsername(event.target.value);
                    }}
                             
                />     
              </div>
             </Grid>

             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Password"
                      type="password"
                      onChange={(event)=> {
                        setPassword(event.target.value);
                      }}/>
              </div>
             </Grid>

             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Confirm Password"
                      type="password"
                      onChange={confirmPassword}
                    />
                      <h6> {confirmPass} </h6>
                    </div>
                  
             </Grid>      
           </Grid>
           <br/>

           <Button 
                type="submit" variant="contained" 
                color="primary" disableElevation
                style={{ backgroundColor: '#485D84' }} 
                className={classes.fabButton}>                   
                    Sign Up
          </Button>
         </form>
         </Paper>
         </div>
 
   );
 }


 