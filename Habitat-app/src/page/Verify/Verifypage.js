import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router';
///import { lightBlue100 } from 'material-ui/styles/colors';
///import { lightBlue300 } from 'material-ui/styles/colors';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
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
    footerbtn: {

    },

    //floor

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
        marginRight: '113px',
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
        marginLeft: '643.5px',
        top: 0,
        marginTop: '25px'
    },

    //segment

    segmentbtnBlue: {
        width: 161.8,
        height: 31.5,
        backgroundColor: "#8396B9",
        color: "#FFFFFF",
        textTransform: "none",
        borderRadius: 5,
        fontSize: 16.18,
        fontWeight: 'bold',
        position: 'relative'
    },
    segmentbtnWhite: {
        width: 161.8,
        height: 31.5,
        backgroundColor: "#FFFFFF",
        color: "#4A4A4A",
        textTransform: "none",
        borderRadius: 5,
        fontSize: 16.18,
        position: 'relative'
    },
    segwrap: {
        // border: '1px solid #AAAAAA'
        flex: 'wrap'
        , display: 'flex'
        , width: 'fit-content',
        backgroundColor: '#FFFFFF',
        borderRadius: 5

    },

    makeCenter: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 3
    }

    //

    , title2: {
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

    //room card
    paperrow: {
        margin: 'auto',
        maxWidth: '1163px',
        height: '54px',
        position: 'relative',
        boxShadow: 'none',
        borderBottom: '1px solid #D8D8D8',
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

export default function Verifypage({ isOpened }) {
    const classes = useStyles();

    const [currentSelect, setCurrentSelect] = useState(0)
    const [allData, setAllData] = useState([])
    const [allTransaction, setAllTransaction] = useState([])
    const [rentTrans, setRentTrans] = useState([])
    const { id } = useParams()

    useEffect(async () => {
        console.log("in Use Eff first row")

        await axios(`/rentingtransaction/verify-expenses/${id}`)
            .then(response => {
                console.log(response.data, "in response")
                setAllData(response.data)
                getAlltrans(response.data[0])

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

    }, []);

    function getAlltrans(data) {
        // setAllTransaction([])
        for (var i = 0; i < data.floors.length; i++) {

            for (var j = 0; j < data.floors[i].rooms.length; j++) {
                for (var e = 0; e < data.floors[i].rooms[j].userRentingTransactionIds.length; e++) {

                    allTransaction.push(data.floors[i].rooms[j].userRentingTransactionIds[e])
                    console.log("i sus " + data.floors[i].rooms[j].userRentingTransactionIds[e])
                }
                // allTransaction.push(data.floors[i].rooms[j].userRentingTransactionIds)
                // console.log(j)
            }

        }
        setRentTrans(data.floors[0].rooms[0].rentingTransactionId)
        console.log(rentTrans + "This is rent trans")
        console.log(allTransaction)
    }

    const sureVeuify = async () => {

        console.log("all trans" + allTransaction)
        console.log("all transs"+rentTrans)

        let res = await axios({
            url: `/rentingtransaction/verify-electricity-water-expenses`,
            method: 'post',
            data: [
                {
                    "UserTransactionIds": allTransaction,
                    "RentingTransactionId": parseInt(rentTrans)
                }
            ]

        }).then(response => {
            alert("post success")
            console.log(response)
            console.log(allTransaction)
            console.log("postsuccess")

            // window.location.href = `/feetype_sp/${id}`;
        })
            .catch(error => {
                alert("post fail")
                console.log('Error getting fake data: ' + error);
            })

    }



    // https://habitat1.azurewebsites.net/api/v1/rentingtransaction/electricity-water-expenses/4

    return (
        <div style={{ width: '100%' }}>
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div className={classes.frame} style={{ position: 'relative' }}>
                            <Datetoday />
                            <div className={classes.title2} >
                                Verificated Expense
                            </div>

                            <div className={classes.segwrap} style={{ position: 'absolute', top: 101 }}>
                                <div className={currentSelect == 0 ? classes.segmentbtnBlue : classes.segmentbtnWhite}
                                    onClick={() => setCurrentSelect(0)}>

                                    <text className={classes.makeCenter}>
                                        Electricity
                                    </text>

                                </div>

                                <div className={currentSelect == 1 ? classes.segmentbtnBlue : classes.segmentbtnWhite} onClick={() => setCurrentSelect(1)}>
                                    <text className={classes.makeCenter}>
                                        Water
                                    </text>
                                </div>

                            </div>

                            <div className={classes.title2bl}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginRight: 20, textDecorationLine: 'underline' }}
                                        onClick={() => window.location.href = `/expense/${id}`}
                                    >
                                        back
                                    </div>

                                    <div>
                                        {allData.length > 0 ? allData[0].buildingName : ""}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div>
                                {allData.length > 0 && allData[0].floors.map((floor, index) => {
                                    return (
                                        <Paper className={classes.papercard}>
                                            <div className={classes.headfloor} >

                                                Floor {floor.floorName}

                                                <div style={{ position: 'absolute', paddingTop: '6px' }}>

                                                    <text className={classes.floortext}>
                                                        Room
                                                    </text>

                                                    <text className={classes.floortext} style={{ marginRight: '163px' }}>
                                                        Bill Period
                                                    </text>

                                                    <text className={classes.floortext}>
                                                        Previos Date
                                                    </text>

                                                    <text className={classes.floortext}>
                                                        Previous Reading
                                                    </text>

                                                    <text className={classes.floortext}>
                                                        Current Reading
                                                    </text>

                                                    <text >
                                                        Usage
                                                    </text>

                                                </div>
                                            </div>

                                            <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px", height: 0.5 }} />
                                            {floor.rooms.map((room, i) => {
                                                return (
                                                    <Paper className={classes.paperrow}>
                                                        <div className={classes.newdetext} style={{ left: 45 }}>
                                                            {/* {props.roomid} */}
                                                            {room.roomName}
                                                        </div>
                                                        <div className={classes.newdetext} style={{ left: 196 }}>
                                                            {/* 27/03/21-27/03/21 */}
                                                            {/* {moment(room.startTime).format("DD/MM/YYYY")}-{moment(room.endTime).format("DD/MM/YYYY")} */}
                                                            {room.isBedAvailable[0] == false ?
                                                                moment(room.startTime).format("DD/MM/YYYY") + "-" + moment(room.endTime).format("DD/MM/YYYY")
                                                                :
                                                                "-"
                                                            }

                                                        </div>
                                                        <div className={classes.newdetext} style={{ left: 422 }}>
                                                            {/* 27/04/2021 */}
                                                            {/* {room.previousDate} */}
                                                            {/* {moment(room.previousDate.replace(/[^a-zA-Z0-9]/g, "")).format("L")} */}

                                                            {/* {moment(room.previousDate).format("DD/MM/YYYY")} */}
                                                            {room.isBedAvailable[0] == false ?
                                                                moment(room.previousDate).format("DD/MM/YYYY")
                                                                :
                                                                "-"
                                                            }

                                                        </div>
                                                        <div className={classes.newdetext} style={{ right: 441 }}>
                                                            {room.isBedAvailable[0] == false ?
                                                                currentSelect == 0 ? room.electricityPreviousReading : room.waterPreviousReading
                                                                :
                                                                "-"
                                                            }
                                                            {/* {currentSelect == 0 ? room.electricityPreviousReading : room.waterPreviousReading} */}
                                                        </div>
                                                        <div className={classes.inputbox} style={{ right: 154 }}>
                                                            {room.isBedAvailable[0] == false ?
                                                                currentSelect == 0 ? room.electricityCurrentReading : room.waterCurrentReading
                                                                :
                                                                "-"
                                                            }
                                                            {/* {currentSelect == 0 ? room.electricityCurrentReading : room.waterCurrentReading} */}
                                                        </div>
                                                        <div className={classes.newdetext} style={{ right: 74 }}>
                                                            {room.isBedAvailable[0] == false ?
                                                                currentSelect == 0 ? room.electricityUsage : room.waterUsage
                                                                :
                                                                "-"
                                                            }
                                                            {/* {currentSelect == 0 ? room.electricityUsage : room.waterUsage} */}
                                                        </div>

                                                    </Paper>
                                                )
                                            })}
                                            {/* <Roomcard /> */}

                                        </Paper>
                                    )
                                })
                                }

                            </div>
                        </div>
                    </div>
                    <div style={{ height: 100 }} />
                </div >
            </ScrollView >

            <div style={{ position: 'absolute', width: '100%', height: 200, top: 595 }}>
                <Button
                    onClick={sureVeuify}
                    style={{
                        backgroundColor: "#485D84", width: 406,
                        height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1,
                        position: 'absolute', left: 640, top: 30
                    }}>
                    SUBMIT
                </Button>
                <div style={{
                    backgroundColor: '#385CA8', opacity: 0.5
                    , width: "100%", height: 200, position: 'relative'
                }}>

                </div>
            </div>
        </div >


    )
}