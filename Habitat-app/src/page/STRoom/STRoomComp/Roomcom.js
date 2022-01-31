import React from 'react'
import { IconButton, makeStyles, Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({

    paperrow: {
        width: '195px',
        height: '85px',
        position: 'relative',
        boxShadow: 'none',
        borderRadius: '4px',
        border: '0.5px solid #AAAAAA',
        marginRight: '22.6px',
        marginBottom: '22.6px',
        // display: 'flex'



    },
    selectPaperrow:{
        width: '195px',
        height: '85px',
        position: 'relative',
        boxShadow: 'none',
        borderRadius: '4px',
        border: '2px solid #485D84',
        marginRight: '22.6px',
        marginBottom: '22.6px',
    }
    ,
    roomtext: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '22.6px',
        marginTop: "10px",
        fontWeight: 'bold',
        marginLeft: '17.8px'
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
        height: "20px",
        width: "61px",
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        marginTop: '16px',
        marginLeft: '81px',
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
        top: '1.2px',
        left: 6
    },
    aligninicon: {
        display: 'inline-block',
        marginTop: '0.5px',
        marginLeft: '25px'
    },
    typeroom: {
        fontSize: '13px',
        color: '#969696',
        fontWeight: 400,
        position: 'absolute',
        top: 50,
        marginLeft: '17.8px'

    },
    roomstatus: {
        height: '28.3px',
        width: '2.5px',
        backgroundColor: 'red',
        borderRadius: 4,
        position: 'absolute',
        marginLeft: '14.5px',
        marginTop: '15.3px'
    }




}));

export default function Roomcom(props) {
    const classes = useStyles()
  
    const [showNav, setShowNav] = useState(true)
    
    // const [allSelect, setAllSelect] = useState([]);

    
    function handlerclick () {
        setShowNav(!showNav)
        props.save(props.roomId)
        props.save2(props.roomNumber)

        props.getTorF(showNav)
        // allSelect.push(props.id)

        console.log(props.roomId + 'from Roomcard component')
        console.log(props.roomNumber + ' roomNumber from Roomcard component')
        console.log(props.roomTypeName)
        // console.log(allSelect)

    }
    return (
        // <Link to={`/personinfo/${props.roomId}`} onClick={() => handlerclick()}>

           
            <Paper className={showNav ? classes.paperrow : classes.selectPaperrow} onClick={() => handlerclick()} >

                <div className={classes.roomtext}>
                    {props.roomNumber}
                    {props.floorName}
                    
                </div>

                <div className={classes.typeroom}>
                    {/* {props.roomTypeName} */}
                    {props.roomTypeName == null ? "Not Specify Type": props.roomTypeName}

                </div>
                <ExitToAppIcon style={{ height: '40px', width: '40px', color: 'rgb(237, 237, 237)', position: "absolute", right: 10, top: 10 }} />

            </Paper >



        // </Link>
    )
}