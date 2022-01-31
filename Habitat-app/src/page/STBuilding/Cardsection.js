import React from 'react'
import { IconButton, makeStyles, Paper } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    paperrow: {
        width: '470px',
        height: '224px',
        position: 'relative',
        boxShadow: 'none',
        borderRadius: '4px',
        border: '1px solid #AAAAAA',
        marginRight: '70.6px',
        marginBottom: '22.6px',

        // display: 'flex'



    },
    roomtext: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '22.6px',
        fontWeight: 'bold',
        marginLeft: '26.6px',
        marginTop: '26.6px',

    },
    infobutton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        marginTop: "14.5px",
        marginLeft: "1086px",
        color: "#485D84"
    },
    numinroom: {
        height: "28.3px",
        width: "100px",
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        marginTop: '26.6px',
        marginLeft: '81px',
        borderRadius: '13px',
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: '400',
        display: 'block',
        right: 29.1
    },
    personicon: {
        width: '18px',
        height: '18px',
        position: 'absolute',
        top: '1.2px',
        left: 6
    },
    aligninicon: {
        display: 'inline-block',
        marginTop: '2px',
        right: 14,
        fontSize: "17px",
        color: "#4A4A4A",
        position: "absolute"
    },
    typeroom: {
        fontSize: '17px',
        color: '#4A4A4A',
        fontWeight: 400,
        position: 'relative',
        top: 50,

    },
    roomstatus: {
        height: '28.3px',
        width: '2.5px',
        backgroundColor: 'red',
        borderRadius: 4,
        position: 'absolute',
        marginLeft: '14.5px',
        marginTop: '15.3px'
    },
    buttondown1: {
        width: 107.5,
        height: 31.5,
        backgroundColor: "#485D84",
        color: "#FFFFFF"

    },
    buttondown2: {
        width: 107.5,
        height: 31.5,
        backgroundColor: "#FFFFFF",
        color: "#4A4A4A",
        border: " 1px solid #AAAAAA"


    }




}));

export default function Cardsection(props) {
    const classes = useStyles()
    
    
    return (

        <Paper className={classes.paperrow}>
            <div className={classes.roomtext}>
                {props.buildingName}
            </div>
            <div className={classes.numinroom}>
                <div className={classes.aligninicon}>{props.numberOfRoom} rooms</div>
            </div>
            <div style={{ marginTop: 32.6, marginLeft: 28.3 }}>
                <div className={classes.typeroom}>
                    Overdue {props.overdue} rooms
                </div>
                <div className={classes.typeroom}>
                    Tenant {props.tenant} rooms
                </div>
                <div className={classes.typeroom}>
                    Vacant {props.vacant} rooms
                </div>
            </div>


            <div style={{ display: 'flex', position: 'absolute', bottom: 19.4, right: 29.1 }}>

                {/* <Link to={`/setting2/${props.id}`}> */}
                    <Button className={classes.buttondown1}>
                        {props.Manage}
                    </Button>
                {/* </Link> */}
                
                <div style={{ width: 10 }}></div>

                <Button className={classes.buttondown2}>
                    {props.Edit}
                </Button>

            </div>


        </Paper>
    )
}
