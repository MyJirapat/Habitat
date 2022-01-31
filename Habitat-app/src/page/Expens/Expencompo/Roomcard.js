import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';

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
        color:"#485D84"
    },
    inputbox: {
        position: 'absolute',
        height: "24px",
        width: "101px",
        fontSize: '13px',
        fontWeight: '400',
        color: '#4A4A4A',
        marginTop: '14.7px'

    }



    

}));

export default function Roomcard(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paperrow}>
            <div className={classes.newdetext} style={{ left: 45 }}>
                {/* {props.roomid} */}
                101
            </div>
            <div className={classes.newdetext} style={{ left: 185 }}>
                Vacant     
            </div>
            <div className={classes.newdetext} style={{ left: 328 }}>
                27/04/2021
            </div>
            <div className={classes.newdetext} style={{ right: 545 }}>
                 3962
            </div>
            <input className={classes.inputbox} style={{ left: 722 }}>
                
            </input>
            <div className={classes.newdetext} style={{ right: 198 }}>
                96
            </div>
            <IconButton className={classes.infobutton}>
                <InfoOutlinedIcon/>
            </IconButton>

        </Paper>
    );
}


