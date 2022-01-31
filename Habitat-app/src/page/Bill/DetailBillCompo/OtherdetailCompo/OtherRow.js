import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

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





}));

export default function OtherRow(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paperrow}>
            <div className={classes.newdetext} style={{ left: 45 }}>
                27/04/2021
            </div>
            <div className={classes.newdetext} style={{ right: 895 }}>
                100.00
            </div>
            <div className={classes.newdetext} style={{ right: 672 }}>
                550.00
            </div>
            <div className={classes.newdetext} style={{ right: 456 }}>
                750.00
            </div>
            <div className={classes.newdetext} style={{ right: 242.5 }}>
                200.00
            </div>
            <div className={classes.newdetext} style={{ right: 45  }}>
                1600.00
            </div>


        </Paper>
    );
}


