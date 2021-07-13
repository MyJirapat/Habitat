/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    //marginleft: "90%",
    //marginLeft: '60%',
  
    marginTop: -50,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

  },

  textf:{
    width: 200,
  }
}));




/*const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

    

  },
}));*/


export default function Sizes() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Autocomplete
        id="size-small-outlined"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.title}
       
        renderInput={(params) => (
          <TextField className={classes.textf}
          {...params} variant="outlined" label="Floor" placeholder="Floor" href="#" />
        )}
      />
    </Paper>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  
  
];
