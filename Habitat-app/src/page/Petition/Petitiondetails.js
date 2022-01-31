
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import Table from '@material-ui/core/Table';
import Avatar from '@mui/material/Avatar';

import axios from 'axios';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { IconButton } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import Datetoday from '../../Components/AllComponent/Datetoday';

import NumberFormat from 'react-number-format';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';
import { ScrollView } from 'react-native';

import { BrowserRouter as Rounter, Route, Link, NavLink, Switch, useParams, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },

    frame: {
        width: '1163px',
        //height: '232px',
        //backgroundColor: 'red',
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%',
    },

    heder2: {
        width: '100%',
        marginRight: "15%",
      
    },


    Titleheder: {
        width: '100%',
        padding: theme.spacing(2),
        marginTop: '4%',
    },

    Card: {
        width: '90%',
        marginLeft: '15%',
        padding: theme.spacing(0),
        margin: 'auto',
    },

    DateMove: {

        marginLeft: '15%',
        marginRight: '17%',
        //marginTop: '5%',
        padding: theme.spacing(1),
        margin: 'auto',
    },

    Hederpettition: {
        marginLeft: '-3%',
        marginTop: '-3%'
    },

    Cards: {
        width: '90%',
        padding: theme.spacing(0),
        margin: 'auto',
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    title: {
        fontSize: 14,
    },

    pos: {
        marginBottom: 12,
    },

    Btn: {
        marginLeft: "92%",
        marginTop: "-6%",
    },

    media: {
        height: "60%",
        width: "52%",
        marginLeft: "44%",
        marginTop: 10,
        borderRadius: 8
    },

   Datemove: {   
        marginLeft: "95%",   
    },

    Statusmove: {
        marginLeft: "82%",
    },

    Profiles: {
       //marginRight: "50%"
       marginLeft: "-830%",
       //marginButtom: "65%"
    },

    Avatarpro: {
        marginLeft: "0%",
        //marginButtom: "65%"
     },

     DeleteBtn: {
        marginLeft: "65%",
        //marginButtom: "65%"
     },

     SloveBtn: {
        marginLeft: "185%",
        //marginButtom: "65%"
     },

     scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 10,
        transition: 'all 0.5s ease'
    },
    scrollspace36: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 6,
        transition: 'all 0.5s ease'
    },

}));

/*export default function (props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [allroom, setAllroom] = useState([]);
  //const location = useLocation()
  //const { id } = useParams();
  useEffect(() => {
    axios("/petition/petitions" )
        .then(response => {
            console.log("hi" + response.data)
            setAllroom(response.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
}, []);
console.log(allroom)
  return (
  <div className="container ">
    {allroom.map((rooms)=>{
      return(   
        <Card className={classes.Card} variant="outlined">
           {rooms.petition.map((pet)=>{
            return(
            <Table 
              aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>{pet.title} </h4>     
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="delete">
                                <EmojiObjectsIcon/>
                            </IconButton>  
                        </TableCell>
                        <TableCell>
                           <IconButton aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>  
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell //value={pet.roomNumber} 
                          className={classes.heder}>
                            <p>Room {pet.roomNumber}</p>    
                        </TableCell>
                        <TableCell className={classes.heder}>
                            {pet.petitionDate} 
                        </TableCell>
                        <TableCell >
                            Status: {pet.statusInfo}
                        </TableCell> 
                    </TableRow>
                </TableHead>  
            <TableBody>
      
            <div className="container ">
                <Table>
                   <TableRow>
                      {pet.description} 
                    </TableRow>
                    <TableBody></TableBody>                     
                </Table>  
            </div>
      </TableBody>
    </Table>    
     )})}                
    </Card>
  )})}  
</div> 
  );
}*/

export default function Petitiondetails({ isOpened }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [allroom, setAllroom] = useState([]);
    const [isdetailload, setIsdetailload] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        //const petitiondetails=(id) =>{

        axios("/petition/petitions/" + id)
            .then(response => {
                console.log("hi" + response.data)
                setAllroom(response.data);
                setIsdetailload(true)
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

    }, [id]);

    const PetitionNote = (id) => {
        axios.post(`/petition/delete-petition/${id}`)
            .then(() => {
                setAllroom(
                    allroom.filter((row) => {
                        return row.id != id;
                    })
                );
            });
    };

    const Solve = (id) => {
        axios.post(`/petition/solve-petition/${id}`, {

            "Status": true

        }).then((response) => {
            window.location.href = `/notedetails/${id}`
            console.log(response);
        })
    };

    console.log(allroom)

    if (isdetailload){
    return (
        <div style={{ width: '100%' }}>
        <ScrollView>
        <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
               
        <div className="container ">
            <div className={classes.DateMove}>
                <Datetoday/>
                <h5 className={classes.Hederpettition} id="newannouncetitle">
                    Petition Detail
                </h5>
            </div>

            {allroom.map((row) => {
                return (
                    <Card className={classes.Card} variant="outlined">
                        {row.petition.map((x) => {
                            return (
                                <Table
                                    aria-label="caption table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell className={classes. Titleheder}>
                                                <h4> {x.title} </h4>
                                            </TableCell>
                                            <TableCell >
                                            
                                            </TableCell>
                                            <TableCell>
                                                <IconButton className={classes.SloveBtn} aria-label="delete">
                                                    <EmojiObjectsIcon 
                                                        onClick={() => { Solve(id) }}
                                                    />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton  className={classes.DeleteBtn} aria-label="delete">
                                                    <DeleteIcon
                                                        onClick={() => { PetitionNote(id) }}
                                                    />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                        <TableCell >
                                            <Avatar className={classes.Avatarpro}   src={x.userProfile}/>
                                            </TableCell>
                                            
                                            <TableCell className={classes.heder}>
                                            <h6 className={classes.Profiles}>{x.userFirstName}</h6>
                                              <h6 className={classes.Profiles}>Room:{x.roomNumber}</h6>
                                            </TableCell>
                                            <TableCell className={classes.heder2}> 
                                            <h6 className={classes. Datemove}>{moment(x.petitionDate).format("DD/MM/yyyy")}</h6>
                                              <h6 className={classes.Statusmove}>  Status:{x.statusInfo}</h6>
                                            </TableCell>
                                            
                                            <TableCell >
                                            {/*<h6>{moment(x.petitionDate).format("DD/MM/yyyy")}</h6>
                                            Status:{x.statusInfo*/}
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <div className="container ">
                                            <Table>
                                                <TableRow className={classes.heder}>
                                                    <h5> {x.description}</h5>
                                                </TableRow>
                                                <TableRow>
                                                    <img className={classes.media}
                                                        src={x.image} />
                                                </TableRow>
                                            </Table>
                                        </div>
                                    </TableBody>
                                </Table>
                            )
                        })}
                    </Card>
                )
            })}
        </div>
        </div>
        </ScrollView>
        </div>
       
    );
    } else {
        return (
            <div>
                <CircularProgress color="secondary" />
            </div>
          )
    }
}