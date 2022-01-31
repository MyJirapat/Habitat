import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

export default function Exroomcard(props) {
    const classes = useStyles();
    const [total, setTotal] = useState([])

    useEffect(() => {
      setTotal(props.expenses)
    }, [])
    

    return (
        <Paper className={classes.paperrow}>
            <div className={classes.newdetext} style={{ left: 45 }}>
                {props.roomNumber}
            </div>
            <div className={classes.newdetext} style={{ left: 212 }}>
                {/* {total.length > 0 ? props.expenses.totalPrice : ""} */}
                {/* {total.length > 0 ? props.expense : ""} */}
                {/* {total == [] ? total: "yes"} */}

                <button onClick={() => console.log(total)}>

                </button> 
                
            </div>
            <div className={classes.newdetext} style={{ left: 487 }}>
                {props.occupant}
            </div>
            <div className={classes.newdetext} style={{ right: 447 }}>
                {/* {props.expense.totalPrice} */}
            </div>
            <div className={classes.newdetext} style={{ right: 245 }}>
                {props.statusInfo}
            </div>
            <Link to='/historydetails'>

                <IconButton className={classes.infobutton}>
                    <InfoOutlinedIcon />
                </IconButton>
            </Link>

        </Paper>
    );
}


