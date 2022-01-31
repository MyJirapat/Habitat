import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import { useParams } from 'react-router';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Alert, ScrollView } from 'react-native';


const useStyles = makeStyles((theme) => ({
    //fame
    mainFame: {
        width: 755,
        minHeight: 721,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        border: '0.75px solid #AAAAAA',
        borderRadius: 5,
        // flexWrap: 'wrap'

    },
    mainFameHeader: {
        height: 85,
        width: "100%",
        borderBottom: '0.75px solid #AAAAAA'
    },
    inFame: {
        width: 605,
        minHeight: 141.5,
        position: 'relative',
        borderRadius: '5px',
        border: '0.75px solid #AAAAAA'

    },
    inFameHeader: {
        width: "100%",
        height: 86.5,
        borderBottom: '0.75px solid #AAAAAA',

    },
    //row in fame
    rominfame: {
        width: '100%',
        height: 55,
        position: 'relative'
    },
    //wrap infame
    wrapfame: {
        width: 605,
        minHeight: 360,
        margin: 'auto',
        position: 'relative'
    },
    //text
    title: {
        fontSize: '22.6px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',
        top: 26.6,
        left: 42
    },
    title2: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',

    },
    title3: {
        fontSize: '16.18px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        left: 41,
        top: 13,
        position: 'absolute'

    },
    title4: {
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        top: 46,
        position: 'absolute'
    },
    title5: {
        fontSize: '13px',
        color: '#4A4A4A',
        position: 'absolute'
    },

    //input
    inputSize: {
        height: 31.5,
        width: 189,
        fontSize: '13px',
        color: '#4A4A4A',
        position: 'relative',
        margin: 'auto'
    },

    inputHeadNumbox: {
        width: 103.5,
        height: 31.5,
        fontSize: 13
    },
    submitHeadNumBt: {
        width: 103.5,
        height: 31.5,
        backgroundColor: '#485D84',
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 400

    },
    //button
    buttonDelete: {
        width: 28,
        height: 28,
        borderRadius: 14.1,
        backgroundColor: '#F8F8F8',
        position: 'relative'
    },


    //decor
    decorLeftRight: {
        width: 41
    },

    grabWidth: {
        width: 17.7
    }

    

}));

export default function CreateRoomRe(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [allroom, setAllroom] = useState([]);
    const [inputRoomToAdd, setInputRoomToAdd] = useState(null)
    const [arrayFloor, setArrayFloor] = useState(props.allFloor)

    const [getRoomName, setRoomName] = useState()
    const { id } = useParams()

    const [buildingName, setBuildName] = useState([])

    useEffect(async () => {
        console.log(props.allFloor)
        console.log(id + "in Use Eff first row")
        await axios(`/building/building/id/${id}`)
            .then(response => {
                console.log(response.data, "in response")
                setBuildName(response.data[0].buildingName)
                // setArrayFloor(props.allFloor)
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })


    }, []);

    // useEffect(() => {
    //     setArrayFloor(props.allFloor)
    //     axios('/building/rooms/1')
    //         .then(response => {
    //             // console.log("hi" + response.data)
    //             setAllroom(response.data);
    //         })
    //         .catch(error => {
    //             console.log('Error getting fake data: ' + error);
    //         })
    //     console.log("In useeffect")
    // }, []);



    // building/floor-room/building/5


    const api = axios.create({
        baseURL: `/building/floor-room/building/${id}`
    })

    const addFloorandRoom = async () => {
        let res = await api.post('/',
            arrayFloor
        ).then(response => {
            alert("Add Room successfully")
            window.location.href = `/setting2/${id}`;
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
        console.log(arrayFloor)

        for (var i = 0; i < arrayFloor.length; i++) {

            for (var j = 0; j < parseInt(inputRoomToAdd); j++) {
                
                const formattedNumber = ("0" + (j + 1)).slice(-2)
                const roomNumber = String(arrayFloor[i].FloorName) + formattedNumber

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
        setInputRoomToAdd(0)

    }

    // const deleteHandler = (index) => {
    //     const newList = keptSample.filter((item) => keptSample.indexOf(item) !== index);
    //     console.log(newList)
    //     setKeptSample(newList);
    // }

    const deleteHandler = (indexfloor, indexroom) => {
        // Assuming that the index means the index of an item which is to be deleted.
        const newList = arrayFloor[indexfloor].Rooms.filter((item) => arrayFloor[indexfloor].Rooms.indexOf(item) !== indexroom);
        console.log(newList)

        arrayFloor[indexfloor].Rooms = newList
        // setArrayFloor(newList);
        console.log(arrayFloor)
        setArrayFloor(arrayFloor);

        // setArrayFloor(a)
        // console.log(arrayFloor)

        
    }

    return (
        <div style={{ width: '100%', height: "100%" }}>
            <ScrollView >

                <div style={{ position: 'relative', top: 32.3, margin: 'auto', height: 800 }}>

                    <div className={classes.mainFame}>

                        <div className={classes.mainFameHeader}>

                            <div className={classes.title} >
                                Rooms
                            </div>
                            {/* <button onClick={() => console.log(arrayFloor)}>
                            </button> */}

                            <div style={{
                                display: 'flex', right: 0, position: 'absolute', top: 26.6,
                                right: 42
                            }}>
                                <input className={classes.inputHeadNumbox}
                                    // style={{height: 10}}
                                    placeholder="No. of Room"
                                    // type="number"
                                    // value={inputfloorToAdd}
                                    onChange={(e) => setInputRoomToAdd(parseInt(e.currentTarget.value))}
                                />

                                <div className={classes.grabWidth} />

                                <Button className={classes.submitHeadNumBt}
                                    size="small" variant="contained" color="primary" disableElevation
                                    style={{ backgroundColor: '#485D84' }}
                                    onClick={() =>
                                        handlerClick()
                                    }
                                >Generate Room</Button>
                            </div>

                        </div>


                        <div className={classes.wrapfame} >

                            <div style={{ position: 'relative', height: 41.4 }}>
                                <div className={classes.title2} style={{ position: 'relative', top: 16.18 }}>
                                    {buildingName}
                                </div>
                            </div>
                            {/* map floor here*/}
                            {arrayFloor != undefined && arrayFloor.length > 0 ? arrayFloor.map((floor, indexfloor) => {
                                return (
                                    <div className={classes.inFame} style={{ marginBottom: 17.7 }}>
                                        {/* //linedivider */}

                                        <div className={classes.inFameHeader}>
                                            <div className={classes.title3} >
                                                Floor {floor.FloorName}
                                            </div>
                                            {/* display flex */}
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.title4} style={{ left: 41 }}>
                                                    Room
                                                </div>
                                                <div className={classes.title4} style={{ margin: 'auto', position: 'relative' }}>
                                                    Edit Name Room
                                                </div>
                                                <div className={classes.title4} style={{ right: 41 }}>
                                                    Delete
                                                </div>
                                            </div>
                                        </div>


                                        {floor.Rooms.map((room, indexroom) => {
                                            { console.log('im here') }
                                            return (
                                                <div className={classes.rominfame} style={{borderBottom: '0.75px solid #AAAAAA'}}>
                                                    {/* display flex */}
                                                    <div style={{ display: 'flex' }}>
                                                        <div className={classes.title5} style={{ left: 41, top: 18 }}>
                                                            {room.room_number}
                                                        </div>
                                                        <input className={classes.inputSize} style={{ top: 12, marginLeft: 206 }}
                                                            onChange={e => room.room_number = e.target.value}

                                                        >

                                                        </input>
                                                        <div className={classes.buttonDelete} style={{ right: 44, top: 14 }}>
                                                            <DeleteIcon style={{ color: '#4A4A4A', position: 'absolute', width: 16, height: 16, top: 6, right: 6 }} 
                                                            onClick={()=> deleteHandler(indexfloor, indexroom)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }) }
                                        {/* map room here */}

                                    </div>
                                )
                            }) : ""}

                        </div>




                    </div>
                    <div style={{height: 200}}/>

                </div>
  
  

            </ScrollView>

            <div style={{ position: 'absolute', width: '100%', height: 200, top: 600 }}>
                <Button onClick={addFloorandRoom}
                    style={{
                        backgroundColor: "#485D84", width: 406,
                        height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1,
                        position: 'absolute', left: 580, top: 20
                    }}>
                    SAVE
                </Button>
                <div style={{
                    backgroundColor: '#385CA8', opacity: 0.5
                    , width: "100%", height: 200, position: 'relative'
                }}>

                </div>
            </div>

        </div>

    )
}