// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import { ScrollView } from 'react-native';
// import Datetoday from '../../Components/AllComponent/Datetoday';
// import { Paper } from '@material-ui/core';
// import { red } from 'chalk';
// import { Row } from 'react-bootstrap';
// import Petitiontable from './Petitioncompo/Petitiontable';
// import { Divider } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     frame: {
//         width: '1163px',
//         height: '232px',
//         backgroundColor: 'red',
//     },
//     scrollspace: {
//         height: "730px",
//         width: '1163px',
//         margin: 'auto',
//         paddingLeft: 110,
//         transition: 'all 0.5s ease'
//     },
//     scrollspace36: {
//         height: "730px",
//         width: '1163px',
//         margin: 'auto',
//         paddingLeft: 36,
//         transition: 'all 0.5s ease'

//     },
//     mainfame: {
//         width: '1163px',
//         height: '567px',
//         backgroundColor: 'blue',
//         position: 'relative'
//     },
//     miniXfame: {
//         width: '352px',
//         height: '147px',
//         backgroundColor: '#ffffff',
//         position: 'relative',
//         backgroundColor: '#ffffff'
//     },
//     Xfame: {
//         width: '731px',
//         height: '395px'
//     }
//     ,
//     Yfame: {
//         width: "407px",
//         height: "567px",
//         position: "absolute",
//         backgroundColor: "#ffffff",
//         right: 0
//     },
//     textDash: {
//         fontSize: 19,
//         color: "#4A4A4A",
//         fontWeight: 'bold'
//     },
//     textRoom: {
//         fontSize: 26,
//         color: "#4A4A4A",
//         fontWeight: 'bold'
//     },
//     normaltext: {
//         fontSize: 16,
//         color: "#4A4A4A",
//     },
//     circleborder: {
//         width: 18,
//         height: 18,
//         borderRadius: '9px',
//         marginRight: 20,
//         marginLeft: 40
//     },
//      papercard: {
//         width: '1163px',
//         boxShadow: "0px 0px 0px #E8E8E8",
//         minHeight: '233px',
//         //   margin: 'auto',
//         marginLeft: 0,
//         marginBottom: "16px",
//         //   backgroundColor:'green',
//         position: 'relative',
//         borderRadius: 5

//     },
//     headfloor: {
//         // display: 'block',
//         color: '#4A4A4A',
//         fontWeight: 'bold',
//         fontSize: '16px',
//         posiotion: 'absolute',
//         marginLeft: '45px',
//         paddingTop: '14px'
//     },
//     headfloor: {
//         // display: 'block',
//         color: '#4A4A4A',
//         fontWeight: 'bold',
//         fontSize: '16px',
//         posiotion: 'absolute',
//         marginLeft: '45px',
//         paddingTop: '14px'
//     },


// }));

// export default function Petitionpage({ isOpened }) {
//     const classes = useStyles();



//     return (
//         <div style={{ width: '100%' }}>
//             <ScrollView>
//             <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
//                 <div>
//                     <div className={classes.frame}>
//                         <Datetoday />

                        
//                         Petition
//                     </div>
//                     <div>
//                     <Paper className={classes.papercard}>
//                         <div className={classes.headfloor} >
//                             Select All
//                             <div style={{ position: 'absolute', paddingTop: '6px' }}>

                             
//                             </div>
//                         </div>
//                         <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
                        
//                        {/* {floors.room.map((sub) => { 
//                             return(
//                             <Exroomcard 
//                                 roomid = {sub.roomid}
//                             />
//                             )
//                         })} */}
//                     </Paper>
//                     </div>
//                 </div>
//             </div>
//             </ScrollView>

//         </div>


//     )
// }


import React,{useState, useEffect} from 'react'
import {lighten, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import Datetoday from '../../Components/AllComponent/Datetoday';
import { Paper } from '@material-ui/core';

import { Divider,IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from "@material-ui/core/Tooltip";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import InputBase from '@material-ui/core/InputBase';
import CircularProgress from '@mui/material/CircularProgress';

import {BrowserRouter as Router, Route, Link, NavLink, Switch, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        //backgroundColor: 'red',
    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 110,
        transition: 'all 0.5s ease'
    },
    scrollspace36: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 36,
        transition: 'all 0.5s ease'

    },
    mainfame: {
        width: '1163px',
        height: '567px',
        backgroundColor: 'blue',
        position: 'relative'
    },
    miniXfame: {
        width: '352px',
        height: '147px',
        backgroundColor: '#ffffff',
        position: 'relative',
        backgroundColor: '#ffffff'
    },
    Xfame: {
        width: '731px',
        height: '395px'
    }
    ,
    Yfame: {
        width: "407px",
        height: "567px",
        position: "absolute",
        backgroundColor: "#ffffff",
        right: 0
    },
    textDash: {
        fontSize: 19,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },
    textRoom: {
        fontSize: 26,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },
    normaltext: {
        fontSize: 16,
        color: "#4A4A4A",
    },
    circleborder: {
        width: 18,
        height: 18,
        borderRadius: '9px',
        marginRight: 20,
        marginLeft: 40
    },
     papercard: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    headfloor: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },
    headfloor: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },

    Fieldstyle: {
      backgroundColor: "#fff",
      borderRadius: '8px',
      width: 420,
      height:45,
      marginBottom: 6,
      marginTop: -16,
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    SearchBtn:{
      backgroundColor: "#fff",
      marginBottom: 10,
      borderRadius: '8px',
      marginRight: "125%",
      marginTop: "7%",
      width:"18%",
      height:"15%",
      '& > * + *': {
        marginTop: theme.spacing(0),
      },
    },

    Searchstyle: {
      backgroundColor: "#fff",
      borderRadius: '8px',
      width: 280,
      height:10,
      marginBottom: 11,
      marginLeft:"-0.3%",
      marginTop: "2%",
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    headBuilding: {
     
      marginLeft: '-25px',
      paddingTop: '14px'
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 98px 10px 12px',
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
}))(InputBase);


const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    title: {
      flex: "1 1 100%"
    }
  }));

  const DeletpopUp = (props) => {
    const classes = useToolbarStyles();
    const {numSelected, deleteUserHandler, solveStatus} = props
    return (
      <Toolbar>
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            //color="inherit"
            //variant="subtitle1"
            //component="div"
          >
            {numSelected} Selected All
          </Typography>
        ) : (
        <Typography
            className={classes.Move}
            //variant="h6"
            id="tableTitle"
            component="div"
          >
            Select All
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="solve">
            <IconButton aria-label="delete" onClick={solveStatus}>
              <EmojiObjectsIcon/>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip >
            <IconButton></IconButton>
          </Tooltip>
        )}
  
          {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={deleteUserHandler}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip >
            <IconButton></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

export default function Petitionpage({ isOpened }) {
  const classes = useStyles();
  const [note, setNote] = useState([])
  const [selected, setSelected] = useState([]);
  const [search,  setSearch ] = useState([]);
  //const [status, setStatus] = useState(true)
  const [ ispetitionload, setIspetitionload] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const {id} = useParams();

 
  useEffect(() => {
    axios("/petition/petitions")
      .then(response => {
      console.log("hi" + response.data)
      setNote(response.data);
      setIsloading(true)
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  }, []);


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = note.map((n) => n.roomNumber);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const Deletelist =() => {
    axios.post("/petition/delete-petition-list/", {
      "PetitionIds": selected
    
    }).then((response)=>{
      window.location.href = `/petitionpage/${id}`
      console.log(response);
    })
};

const Petitionstatus =() => {
  axios.post("/petition/edit-petition-list", {
    "PetitionIds": selected,
    "Status": true
  
  }).then((response)=>{
    window.location.href = `/petitionpage/${id}`
    console.log(response);
  })
};

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
    );
  }  
  setSelected(newSelected);
};
  console.log(selected)

  const isSelected = (name) => selected.indexOf(name) !== -1;
  
  
    return (
        <div style={{ width: '100%' }}>
           <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday/>                        

                         <h5 className={classes.headBuilding} id="newannouncetitle">  Petitions </h5>   

        <div className="row align-items-start">                
            <div className="col align-self-start">
            <Paper component="form" className={classes.Searchstyle}>
              <BootstrapInput
                  type="text"
                  size="small"
                  variant="outlined" 
                  //label="Date"     
                  placeholder="search"
                  onChange={(e)=>{
                    setSearch(e.target.value);
                  }}                  
                />
            </Paper>
              </div>
                <div className="col align-self-end">    
                {/*<Button className={classes.SearchBtn}
                        style={{ backgroundColor: '#485D84'}}>
                  Search
                </Button>*/}
            </div>
        </div> 
      </div>

      <div>
          <Paper className={classes.papercard}>        
             <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                 <TableHead>
                   <TableRow>
                      <TableCell>
                        <Checkbox 
                            size="small"
                            color="primary"rowCount={note.length}
                            onChange={handleSelectAllClick}
                            />   
                        </TableCell>
                        <TableCell> 
                            <DeletpopUp 
                                solveStatus={Petitionstatus}
                                deleteUserHandler={Deletelist }
                                numSelected={selected.length}
                            />   
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                    {note.map((row, index)=>{
                        return(
                    <TableBody>
                        {row.petition.filter(val=>{
                        if (search== ''){
                            return val;
                        }else if
                            (val.roomNumber.toLowerCase().includes(search.toLowerCase())){
                        }else if
                            (val.title.toLowerCase().includes(search.toLowerCase()))
                        return val
                    }).map((info,index) => { 
                    const isItemSelected = isSelected(info.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                        return(
                         <TableRow 
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={index.id}
                            selected={isItemSelected}>   
                            <TableCell>
                                <Checkbox
                                    onClick={(event) => handleClick(event, info.id)}
                                    size="small"
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{ "aria-labelledby": labelId }}
                                    
                                    />
                                    
                                <Link to={`/notedetails/${info.id}`} 
                                    style={{ textDecoration: 'none' }}>
                                    Room: {info.roomNumber}
                                </Link>
                            </TableCell> 
                             <TableCell>
                               {info.title} - {info.description.length > 100 ?
                                      `${info.description.substring(0, 100)}...` : 
                                      info.description} </TableCell> 
                            <TableCell align="right">{info.statusInfo}</TableCell> 
                        </TableRow>     
                         )
                         
                         })}         
                </TableBody>                                        
                    )})} 
                </Table>    
                </TableContainer>                 
                </Paper>
                    </div>
                </div>
               
            </div>
        </ScrollView>
    </div>
    );
}