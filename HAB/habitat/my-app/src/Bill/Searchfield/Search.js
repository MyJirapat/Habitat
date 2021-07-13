/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


/*const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginTop: "-30%",
   
    
    

  },
}));*/


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    marginTop: 5,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    

  },

  textf:{
    width: 200,
  }
}));


export default function SearchBill() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Autocomplete
        id="size-small-outlined"
        size="small"
        options={Search}
        getOptionLabel={(option) => option.Buildingname}   
        renderInput={(params) => (<TextField className={classes.textf}
          {...params} 
          variant="outlined" label="Search" placeholder="Search" />
        )}
      />
    </Paper>
  );
}


// Building Data
const Search = [
  { Buildingname: "King David room 112 floor 1 Great"},
  { Buildingname: "King David room 122 floor 2 Jame"},
  { Buildingname: "Queen Vv room 112 floor 3 My" },
  { Buildingname: "Queen Vv room 132 floor 3 Zhang" },
  { Buildingname: "Queen Vv room 132 floor 3 Zhang" },
  { Buildingname: "King David room 112 floor 1 Great"},
  { Buildingname: "King David room 122 floor 2 Jame"},
  

  
];
