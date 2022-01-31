import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import Roomsection from './Roomsection';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        marginRight: 40

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
        borderRadius: 5,
        border: "solid 1px #AAAAAA"
    },
    headfloor: {
        // display: 'block',
        posiotion: 'relative',
        marginLeft: '45px',
        paddingTop: '0px',
        verticalAlign: 'middle'

    },
    floortext: {
        color: '#4A4A4A',
        fontSize: '16px',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: '28px'
    },
    numinroom: {
        height: "25px",
        width: "84px",
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        marginTop: '28px',
        marginLeft: '86px',
        borderRadius: '13px',
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: '400',
        display: 'block'
    },
    personicon: {
        width: '18px',
        height: '18px',
        position: 'absolute',
        top: 4,
        left: 10
    },
    aligninicon: {
        display: 'inline-block',
        marginTop: '3px',
        marginLeft: '30px'
    }
}));

export default function Floorsection(props) {
    const classes = useStyles();
    const str = props.Date

    // const [allFloor, setAllFloor] = useState([]);
    const [allRoom, setAllRoom] = useState(props.allFloor);


    return (
        <div>
            <Paper className={classes.papercard}>
              
                <div className={classes.headfloor}>
                    <div className={classes.floortext}>
                        Floor {props.floorName}
                    </div>
                    {/*<div className={classes.numinroom}>
                        <PersonIcon className={classes.personicon} />

                        <div className={classes.aligninicon}>{props.numPeople} / {props.numBed}</div>

    </div>*/}
                </div>
                <Divider style={{ backgroundColor: "#AAAAAA", marginTop: 81 }} />
                <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '50.5px', marginTop: '32.36px', marginBottom: '21.8px' }}>
                    {allRoom.map((sub, value) => (

                        <Roomsection 
                        id = {sub.roomId}
                        beds = {sub.beds}
                        roomNumber = {sub.roomNumber} 
                        roomTypeName = {sub.roomTypeName}
                        numberOfBed = {sub.numberOfBed}
                        />

                    ))}

                </div>



            </Paper>

        </div>
    );
}


