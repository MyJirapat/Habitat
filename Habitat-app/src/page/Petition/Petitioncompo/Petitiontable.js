import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        borderRadius: 5

    },
    floortext: {
        display: 'inline',
        marginRight: '162px',
        color: '#4A4A4A',
        fontSize: '13px',
        fontWeight: 'bold',
        position: 'relative'
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
    minitext: {
        fontSize: '11.3px',
        color: '#AAAAAA',
        position: 'absolute',
        fontWeight: '300',
        marginLeft: '643.5px',
        top: 0,
        marginTop: '25px'
    }
}));

export default function Petitiontable(props) {
    const classes = useStyles();
    const str = props.Date


    const [allFloor, setAllFloor] = useState([]);

    useEffect(() => {
        axios('https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/floorexpense')
            .then(response => {
                console.log("hi" + response.data)
                setAllFloor(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    //API id, current date and role haven't been add yet

    return (
        <div>
            {allFloor.map((floors) => { 
                return (
                    <Paper className={classes.papercard}>
                        <div className={classes.headfloor} >
                            Floor {floors.floorName}
                            <div style={{ position: 'absolute', paddingTop: '6px' }}>

                                <div className={classes.floortext}>
                                    Room
                                </div>
                                <div className={classes.floortext}>
                                    Billed at
                                </div>
                                <div className={classes.floortext}>
                                    Occupants
                                </div>
                                <div className={classes.floortext}>
                                    Total
                                </div>
                                <div className={classes.minitext}> (THB) </div>
                                <div className={classes.floortext}>
                                    Status
                                </div>
                                <div className={classes.floortext}>
                                    Detail
                                </div>
                            </div>
                        </div>
                        {/* <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
                        {floors.room.map((sub) => { 
                            return(
                            <Exroomcard 
                                roomid = {sub.roomid}
                            />
                            )
                        })} */}
                    </Paper>
                )
            })} 
        </div>
    );
}


