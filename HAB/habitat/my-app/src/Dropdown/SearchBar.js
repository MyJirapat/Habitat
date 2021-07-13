/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
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

export default function Sizes() {
  const classes = useStyles();

  const [rows, setRows] = useState(SearchData);
  const [searched, setSearched] = useState("")
  return (
    <Paper component="form" className={classes.root}>
      <Autocomplete
        id="size-small-outlined"
        size="small"
        options={SearchData}
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
const SearchData = [
  { Buildingname: "King David room 112 floor 1 Great"},
  { Buildingname: "King David room 122 floor 2 Jame"},
  { Buildingname: "Queen Vv room 112 floor 3 My" },
  { Buildingname: "Queen Vv room 132 floor 3 Zhang" },
  { Buildingname: "Queen Vv room 132 floor 3 Zhang" },
  { Buildingname: "King David room 112 floor 1 Great"},
  { Buildingname: "King David room 122 floor 2 Jame"},
  

  
];



















































/*import React from 'react'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function SearchBar() {
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  return (
    <div className="Search">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </div>
  )
}

export default SearchBar*/