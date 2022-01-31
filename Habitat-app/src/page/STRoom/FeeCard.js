import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    fcframe: {
        width: '213px',
        height: '94px',
        backgroundColor: '#FFFFFF',
        border: 'solid 0.5px #AAAAAA',
        borderRadius: '5px',
        marginLeft: '23px',
        marginBottom: '23.5px'


    },
    fcframeSelect: {
        width: '213px',
        height: '94px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #485D84',
        borderRadius: '5px',
        marginLeft: '23px',
        marginBottom: '23.5px'
    },
    fctexttitle: {
        fontSize: '22.6px',
        fontWeight: 'bold',
        color: '#4A4A4A'
    },
    fcsubTitle: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold'

    },
    fcnamebed: {
        fontSize: '16px',
        color: '#4A4A4A'
    },
    fcfeedetail: {
        fontSize: '13px',
        color: '#4A4A4A'
    },
    fcreicon: {
        width: "18.3px",
        height: "18.3px",
        color: "#767676"
    }

}));

export default function FeeCard(props) {
    const classes = useStyles()
   

  

    return (

        <div className={true ? classes.fcframeSelect : classes.fcframe} >
            <div style={{ margin: '13px 0px 0px 21px', width: '190px' }}>
                <div style={{ display: 'flex' }}>
                    <div className={classes.fcsubTitle}>
                        {props.feeSetName}
                    </div>
                    <div style={{ width: 21 }} />
                    <div>
                        <InfoIcon className={classes.fcreicon}>

                        </InfoIcon>
                    </div>
                </div>
                <div className={classes.fcfeedetail}>
                    Room Price • Electricity • Water
                    • Car Parking, …
                </div>
            </div>
        </div>
    )
}
