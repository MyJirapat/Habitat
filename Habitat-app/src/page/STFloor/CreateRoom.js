import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Alert, ScrollView } from 'react-native';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '-2%',
    },

    Card: {
        width: '80%',
        padding: theme.spacing(3),
        margin: 'auto',
    },

    Cards: {
        width: '100%',
        padding: theme.spacing(2),
        margin: 'auto',
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    title: {
        fontSize: 14,
    },

    pos: {
        marginBottom: 12,
    },

    Btn: {
        marginLeft: "92%",
        marginTop: "-6%",
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 80,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: '100%',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        width: "30%",
        top: 10,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 620,
        left: "35%"
    },

    inputbox : {
        width: 128,
        height: 39
    }


}));



export default function CreateRoom(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [allroom, setAllroom] = useState([]);
    const [inputRoomToAdd, setInputRoomToAdd] = useState(null)
    const [arrayFloor, setArrayFloor] = useState(2)

    const [getRoomName, setRoomName] = useState()
    const { id } = useParams()

    const [buildingName, setBuildName] = useState([])

    useEffect(async () => {
        console.log(id + "in Use Eff first row")
        console.log()
        await axios(`/building/building/id/${id}`)
            .then(response => {
                console.log(response.data, "in response")
                setBuildName(response.data[0].buildingName)

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })


    }, []);

    useEffect(() => {
        setArrayFloor(props.allFloor)
        // axios('/building/rooms/1')
        //     .then(response => {
        //         // console.log("hi" + response.data)
        //         setAllroom(response.data);
        //     })
        //     .catch(error => {
        //         console.log('Error getting fake data: ' + error);
        //     })
        // console.log("In useeffect")
    },[]);

    // building/floor-room/building/5


    const api = axios.create({
        baseURL: `/building/floor-room/building/${id}`
    })

    const addFloorandRoom = async () => {
        let res = await api.post('/',
            arrayFloor
        ).then(response => {
            alert("Add Room successfully")
            window.location.href = `/st_initialize/${id}`;
        })
            .catch(error => {
                alert("Fail")
                console.log('Error getting fake data: ' + error);
            })

    }

    function handlerClick() {
        const a = 100
        // inputRoomToAdd
        // allroom
        const roomObject = {
            "room_number": "101"
        }
        // console.log(allroom)

        for (var i = 0; i < arrayFloor.length; i++) {

            for (var j = 0; j < parseInt(inputRoomToAdd); j++) {
                const formattedNumber = ("0" + (j + 1)).slice(-2)
                const roomNumber = String(i + 1) + formattedNumber
                const roomObject = {
                    "room_number": roomNumber
                }
                arrayFloor[i].Rooms.push(roomObject)
                console.log(roomNumber)
            }
        }

        setArrayFloor(arrayFloor)
        console.log(arrayFloor)

        console.log("end")

    }

    return (
        <div style={{ width: '100%' }}>
            <ScrollView>

                <div className="container ">
                    <div style={{ width: '100%', height: '650px' }}>
                        <div style={{ width: '100%', height: '550px' }}>

                            {/* <Link to='/st_initialize'> */}
                            {/* <button onClick={() => console.log(arrayFloor)}>
                            </button> */}
                            {/* </Link> */}


                            <Card className={classes.Card} variant="outlined">
                                <Table aria-label="caption table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell className={classes.heder}>
                                                <div style={{ display: 'flex' }}>
                                                    <h4>Rooms</h4>
                                                    <input
                                                        placeholder="No of Room"
                                                        type="number"
                                                        // value={inputfloorToAdd}
                                                        onChange={(e) => setInputRoomToAdd(parseInt(e.currentTarget.value))}
                                                    />

                                                    <Button className={classes.buttongenerate}
                                                        size="small" variant="contained" color="primary" disableElevation
                                                        style={{ backgroundColor: '#485D84' }}
                                                        onClick={() =>
                                                            handlerClick()
                                                        }
                                                    >Generate Floor</Button>
                                                </div>

                                            </TableCell>

                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                                        <div className="container">
                                            <h5 className={classes.heder}> {buildingName}</h5>

                                            {arrayFloor != undefined && arrayFloor.length > 0 ? arrayFloor.map((set) => {
                                                { console.log(set) }
                                                return (

                                                    <div>
                                                        <div style={{ width: "100%", minHeight: "200px", border: "1px solid #AAAAAA", borderRadius: 5 }}>
                                                            <div style={{ height: "86.5px", width: "100%", borderBottom: "1px solid #AAAAAA" }}>
                                                                <h4> Floor {set.FloorName} </h4>
                                                            </div>
                                                            {set.Rooms.map((r, index) => {

                                                                return (
                                                                    <div style={{ display: 'flex', height: 50, width: "100%", borderBottom: "1px solid #AAAAAA" }}>
                                                                        <div>
                                                                            <h4>  {r.room_number}</h4>
                                                                        </div>

                                                                        <input
                                                                            onChange={e => r.room_number = e.target.value}
                                                                        >

                                                                        </input>

                                                                        <button>
                                                                            delete
                                                                        </button>
                                                                    </div>


                                                                )
                                                            })}

                                                        </div>
                                                        <div style={{ height: '20px' }}>
                                                        </div>



                                                    </div>
                                                )



                                            }) : ""}
                                            {/* {arrayFloor.map((set) => {
                                            return (
                                                <Card className={classes.Cards} variant="outlined">
                                                    <h5 className={classes.heder}>{set.FloorName}</h5>
                                                    <Table>
                                                        <TableHead >
                                                            <h5 className={classes.heder}>Floor{set.FloorNumber}</h5>
                                                            <TableRow>
                                                                <TableCell>Rooms</TableCell>
                                                                <TableCell align="center">Edit Name Rooms</TableCell>
                                                                <TableCell>Delete</TableCell>
                                                            </TableRow>
                                                        </TableHead> */}
                                            {/* {set.room.map((r) => {
                                                            return (
                                                                <TableBody>
                                                                    <TableRow >
                                                                        <TableCell align="left">{r.roomNumber}</TableCell>
                                                                        <TableCell align="center">
                                                                            <TextField
                                                                                size="small"
                                                                                variant="outlined"
                                                                            />
                                                                        </TableCell>
                                                                        <TableCell align="left">
                                                                            <Button>Delete </Button>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            )
                                                        })} */}
                                            {/* </Table>
                                                </Card>
                                            )
                                        })} */}
                                        </div>
                                    </TableBody>
                                </Table>
                            </Card>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </ScrollView>


            {/* <Link to="/initial">
                <Button
                    onClick={addFloorandRoom}
                    className={classes.buttonsubmit}
                    variant="contained" color="primary" disableElevation
                    style={{ backgroundColor: '#485D84' }} >
                    Save
                </Button>
            </Link> */}


            {/* <Link to={`/st_initialize/${id}`}> */}
            <div style={{ position: 'absolute', width: '100%', height: 200, top: 720 }}>
                <Button onClick={addFloorandRoom}
                    style={{
                        backgroundColor: "#485D84", width: 406,
                        height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1,
                        position: 'absolute', left: 580, top: 40
                    }}>
                    SAVE
                </Button>
                <div style={{
                    backgroundColor: '#385CA8', opacity: 0.5
                    , width: "100%", height: 200, position: 'relative'
                }}>

                </div>
            </div>
            {/* </Link> */}

        </div>
    );
}


