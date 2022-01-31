import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Navbar2 from '../../Components/AllComponent/Navbar2';
import ExRoomdetail from '../Expens/DetailExpenseCompo/RoomExpenseCompo/ExRoomdetail.js';
import ExOtherdetail from '../Expens/DetailExpenseCompo/OtherExpenseCompo/ExOtherdetail.js';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '113px',
        position: 'relative'
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

    //Exroom

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
        border: '0.75px solid #AAAAAA'


    },
    floortext: {
        display: 'inline',
        marginRight: '73px',
        color: '#4A4A4A',
        fontSize: '13px',
        fontWeight: 'bold',
        position: 'relative',

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
        top: 0,
        marginTop: '13px',




    }


    //Exstudent

    ,
    paperrow: {
        margin: 'auto',
        maxWidth: '1163px',
        height: '54px',
        position: 'relative',
        boxShadow: 'none',
        borderBottom: '1px solid #D8D8D8',
        borderRadius: '0px'
    },
    newdetext: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '13px',
        marginTop: "17px",
        fontWeight: '400'
    },
    infobutton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        marginTop: "14.5px",
        marginLeft: "1086px",
        color: "#485D84"
    },

    //exother

    root1: {
        flexGrow: 1,
        margin: theme.spacing(1),
        marginRight: 40

    },
    papercard1: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5,
        border: '0.75px solid #AAAAAA'

    },
    floortext1: {
        display: 'inline',
        marginRight: '167px',
        color: '#4A4A4A',
        fontSize: '13px',
        fontWeight: 'bold',
        position: 'relative',

    },
    headfloor1: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },
    minitext1: {
        fontSize: '11.3px',
        color: '#AAAAAA',
        position: 'absolute',
        fontWeight: '300',
        top: 0,
        marginTop: '13px',




    },

    //Exother row
    paperrow2: {
        margin: 'auto',
        maxWidth: '1163px',
        height: '54px',
        position: 'relative',
        boxShadow: 'none',
        borderBottom: '1px solid #D8D8D8',
        borderRadius: '0px'
    },
    newdetext2: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '13px',
        marginTop: "17px",
        fontWeight: '400'
    },
    infobutton2: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        marginTop: "14.5px",
        marginLeft: "1086px",
        color: "#485D84"
    },

    //text
    title2: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',
        top: 60

    }

    , title2bl: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',
        top: 184
    },
}));

export default function Exdetailpage({ isOpened }) {
    const classes = useStyles();
    const {id} = useParams()

    



    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />
                        <div className={classes.title2}>
                            Expense History Detail

                        </div>
                    </div>
                    <div>
                        {/* <ExRoomdetail/> */}
                        <Paper className={classes.papercard}>
                            <div className={classes.headfloor} >
                                Room 101
                                <div style={{ position: 'absolute', paddingTop: '6px' }}>

                                    <div className={classes.floortext} style={{ paddingRight: 120 }}>
                                        Name
                                    </div>
                                    <div className={classes.floortext}>
                                        Bed
                                    </div>
                                    <div className={classes.floortext} style={{ paddingRight: 40 }}>
                                        Date

                                    </div>
                                    <div className={classes.floortext}>
                                        Rent
                                        <div className={classes.minitext} style={{ paddingLeft: '1px' }}> (THB) </div>

                                    </div>
                                    <div className={classes.floortext}>
                                        Electricity
                                        <div className={classes.minitext} style={{ paddingLeft: '18px' }}> (THB) </div>

                                    </div>
                                    <div className={classes.floortext}>
                                        Water
                                        <div className={classes.minitext} style={{ paddingLeft: '5px' }}> (THB) </div>
                                    </div>
                                    <div className={classes.floortext}>
                                        Others
                                        <div className={classes.minitext} style={{ paddingLeft: '8px' }}> (THB) </div>
                                    </div>
                                    <div className={classes.floortext}>
                                        Total
                                        <div className={classes.minitext} style={{ paddingLeft: '3px' }}> (THB) </div>
                                    </div>
                                    <div className={classes.floortext}>
                                        Status
                                    </div>
                                </div>
                            </div>
                            <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px", height: 0.5 }} />

                            {/* <ExStudentdetail /> */}
                            <Paper className={classes.paperrow}>
                                <div className={classes.newdetext} style={{ left: 45 }}>
                                    {/* {props.roomid} */}
                                    Krittamet Chuwongworaphinit
                                </div>
                                <div className={classes.newdetext} style={{ left: 275.5 }}>
                                    A
                                </div>
                                <div className={classes.newdetext} style={{ left: 372.5 }}>
                                    27/04/2021
                                </div>
                                <div className={classes.newdetext} style={{ right: 620 }}>
                                    4,700.00
                                </div>
                                <div className={classes.newdetext} style={{ right: 485 }}>
                                    575.00
                                </div>
                                <div className={classes.newdetext} style={{ right: 375 }}>
                                    90.00
                                </div>
                                <div className={classes.newdetext} style={{ right: 260.5 }}>
                                    0.00
                                </div>
                                <div className={classes.newdetext} style={{ right: 158 }}>
                                    5,366.00            </div>
                                <div className={classes.newdetext} style={{ right: 45 }}>
                                    unpaid
                                </div>

                            </Paper>

                        </Paper>

                        {/* <ExOtherdetail /> */}
                        <Paper className={classes.papercard1}>
                            <div className={classes.headfloor1} >
                                Other
                                <div style={{ position: 'absolute', paddingTop: '6px' }}>

                                    <div className={classes.floortext1}>
                                        Date
                                    </div>
                                    <div className={classes.floortext1}>
                                        Fine
                                        <div className={classes.minitext1} style={{ paddingLeft: '1px' }}> (THB) </div>

                                    </div>
                                    <div className={classes.floortext1}>
                                        Furniture
                                        <div className={classes.minitext1} style={{ paddingLeft: '16px' }}> (THB) </div>

                                    </div>
                                    <div className={classes.floortext1}>
                                        Internet

                                        <div className={classes.minitext1} style={{ paddingLeft: '12px' }}> (THB) </div>
                                    </div>
                                    <div className={classes.floortext1}>
                                        Parking

                                        <div className={classes.minitext1} style={{ paddingLeft: '11px' }}> (THB) </div>
                                    </div>
                                    <div className={classes.floortext1}>
                                        Total
                                        <div className={classes.minitext1} style={{ paddingLeft: '3px' }}> (THB) </div>
                                    </div>

                                </div>
                            </div>
                            <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px", height: 0.5 }} />
                            {/* <ExOtherRow/> */}
                            <Paper className={classes.paperrow2}>
                                <div className={classes.newdetext2} style={{ left: 45 }}>
                                    27/04/2021
                                </div>
                                <div className={classes.newdetext2} style={{ right: 894 }}>
                                    100.00
                                </div>
                                <div className={classes.newdetext2} style={{ right: 671 }}>
                                    550.00
                                </div>
                                <div className={classes.newdetext2} style={{ right: 456 }}>
                                    750.00
                                </div>
                                <div className={classes.newdetext2} style={{ right: 242.5 }}>
                                    200.00
                                </div>
                                <div className={classes.newdetext2} style={{ right: 45 }}>
                                    1600.00
                                </div>
                            </Paper>
                        </Paper>

                    </div>
                </div>
            </div>
        </ScrollView>

    )
}