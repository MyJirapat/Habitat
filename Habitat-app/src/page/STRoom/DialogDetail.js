import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    texttitle: {
        fontSize: '22.6px',
        fontWeight: 'bold',
        color: '#4A4A4A'
    },
    subTitle: {
        fontSize: '16.18px',
        color: '#4A4A4A'

    },
    frame: {
        width: "554px",
        height: "336px",
        backgroundColor: "#FFFFFF",
        position: "relative"

    },
    inner: {
        width: "464px",
        height: "249px",
        position: "relative",
        margin: 'auto'
    },
    superinner: {
        width: "363px",
        height: "190.6px",
        position: "relative",
        margin: 'auto',
    },
    linedivider: {
        backgroundColor: "#D8D8D8",
        height: "1px",
        width: "100%"
    },
    reicon: {
        width: "31.5px",
        height: "31.5px",
        position: "absolute",
        color: "#EFEFEF",
    },
    backIcon: {
        backgroundColor: "#4A4A4A",
        width: "25px",
        height: "25px",
        position: "absolute",
        borderRadius: 30,
        right: 0,
        margin: "30px 35px 0px 0px"
    },
    popup: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: "100%",
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.7)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
}))

export default function DialogDetail(props) {
    const classes = useStyles()

    // const [building, setBuilding] = useState([])
    const [fee, setfee] = useState([])
    const a = props.feetypeSet
    // useEffect(() => {
    //     axios('/building/buildings')
    //         .then(response => {
    //             console.log(response.data)
    //             setBuilding(response.data);
    //         })
    //         .catch(error => {
    //             console.log('Error getting fake data: ' + error);
    //         })
    // }, []);


    useEffect(() => {
        setfee(props.allFee[a])

    })

    function handlerClick() {
        console.log(a)
        // const result = words.filter(word => word > 6);
        console.log(fee)
    }



    return (props.trigger) ? (
        <div className={classes.popup} onClick={() => handlerClick()}>

            <div className={classes.frame}>
                <div className={classes.backIcon}>
                    <IconButton className={classes.reicon} style={{ marginLeft: -4, marginTop: -3, zIndex: 1 }} onClick={() => props.setTrigger(false)}>
                        <CancelIcon className={classes.reicon} onClick={() => props.setTrigger(false)}>



                        </CancelIcon>

                    </IconButton>
                </div>


                <div style={{ height: 38 }} />
                <div className={classes.inner}>
                    <div className={classes.texttitle}>
                        {fee.feeSetName}
                    </div>
                    <div style={{ height: 22 }} />
                    <div className={classes.linedivider}></div>
                    <div style={{ height: 21 }} />

                    <ScrollView>
                        <div className={classes.superinner}>
                            {fee.feeTypes.map((value, index) => (
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <div className={classes.subTitle}>
                                      {value.feeTypeName == 'Electricity' || value.feeTypeName == 'Water'  ? value.feeTypeName + " (price/unit)" : value.feeTypeName}
                                        
                                    </div>
                                    <div className={classes.subTitle} style={{ position: "absolute", right: 63 }}>
                                        {value.feeTypePrice}
                                    </div>
                                    <div className={classes.subTitle} style={{ position: "absolute", right: 0 }}>
                                        THB
                                    </div>
                                </div>
                                <div style={{ height: 12 }} />
                            </div>
                            ))}


                        </div>

                    </ScrollView>

                </div>
            </div>
        </div>

    ) : ""
}
