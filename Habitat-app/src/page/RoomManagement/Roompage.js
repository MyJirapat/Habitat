import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Floorsection from './Roomcomponent/Floorsection';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import DropBuilding from '../../Components/Dropdown/DropBuilding';
import DropFloor from '../../Components/Dropdown/DropFloor';
import DropStatus from '../../Components/Dropdown/DropStatus';
import { Button } from '@material-ui/core';
import DropIsAvailable from '../../Components/Dropdown/DropIsAvailable.js';
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        position: "relative"
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
    texttitle: {
        fontSize: "19px",
        fontWeight: "bold",
        color: "#4A4A4A"
    },
    textDrop: {
        fontSize: 16,
        color: "#4A4A4A"

    },
    titleText: {
        fontSize: 19.4,
        fontWeight: 'bold',
        color: "#4A4A4A"

    },
    buttontop: {
        backgroundColor: '#485D84',
        borderRadius: "5px",
        textTransform: "none",
        fontSize: "13px",
        color: '#fff',
        fontWeight: 'normal',
        width: "107.6px",
        height: "31.5px",
        // position: "absolute",

        '&:hover': {
            backgroundColor: '#687690',
            color: '#fff',
            width: "107.6px",
            height: "31.5px"
        },
    }
}));

export default function Roompage({ isOpened }) {
    const classes = useStyles();
    const [allFloor, setAllFloor] = useState([]);

    const [keptDropFloor, setKeptDropFloor] = useState("")
    const [keptDropBuilding, setKeptDropBuilding] = useState("")

    const [numBed, setNumBed] = useState([])
    const [numPeople, setNumPeople] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingLV1, setIsLoadingLV1] = useState(false)

    const [currentBuilding, setCurrentBuilding] = useState("")
    const [search, setSearch] = useState("")
    const [floorUrl, setFloorUrl] = useState(`/dropdown/floors/${currentBuilding}`)



    // const floorUrl = `/building/floors/${currentBuilding}`

    useEffect(() => {
        axios(`/room/room-beds/${currentBuilding}`)
            .then(response => {
                console.log(response.data)
                numWholive()

                setAllFloor(response.data);
                // setFloorUrl(`/dropdown/floors/Great`)

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    });

    
   


    function numWholive() {
        var a = 0
        var b = 0

        for (var i = 0; i < allFloor.length; i++) {
            console.log(`floor ${i}`)
            for (var j = 0; j < allFloor[i].rooms.length; j++) {
                a += allFloor[i].rooms[j].numberOfBed
                for (var x = 0; x < allFloor[i].rooms[j].beds.length; x++) {
                    b += allFloor[i].rooms[j].numberOfBed[x].beds
                }
                numPeople.push(b)
                b = 0
            }
            numBed.push(a)
            a = 0
        }
        console.log("End")
        setIsLoading(true)
        setNumPeople(numPeople)

    }

    
    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>

                    <div className={classes.frame}>
                        <Datetoday />
                        {/* <Button  style={{backgroundColor: 'blue'}} onClick={() => props.isOpened('Anna')}/> */}
                        <div className={classes.titleText}>
                            Room Management
                        </div>

                        <div style={{ display: "flex", position: "absolute", bottom: 70, width: '100%' }}>

                            <div style={{ position: 'relative', width: 161 }}>
                                <div className={classes.textDrop}>
                                    Search
                                </div>
                                <div style={{ height: 4 }} />

                                <input 
                                onChange={(e)=>{
                                    setSearch(e.target.value);
                                    }}
                                placeholder="" type="text" style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A', position: 'absolute' }}>

                                </input>
                            </div>

                            <div style={{ width: 12 }} />

                            <div>
                                <div className={classes.textDrop}>
                                    Building
                                </div>
                                <div style={{ height: 4 }} />

                                <DropBuilding
                                    save={currentBuilding => setCurrentBuilding(currentBuilding)}
                                />

                            </div>

                            <div style={{ width: 12 }} />

                            {/*<div>
                                <div className={classes.textDrop}>
                                    Floor
                                </div>
                                <div style={{ height: 4 }} />

                                <DropFloor
                                    url={floorUrl}
                                    // save={currentFloor => setCurrentFloor(currentFloor)}
                                />
            
                            </div>*/}

                            <div style={{ width: 12 }} />


                            {/* <div>
                                <div className={classes.textDrop}>
                                    Status
                                </div>
                                <div style={{ height: 4 }} />
                                <DropIsAvailable />
                            </div> */}

                            <div style={{ width: 12 }} />



                            {/* <div style={{ position: 'absolute', right: 0, top: 28 }}>
                                <Button className={classes.buttontop} >
                                    Search
                                </Button>
                            </div> */}
                        </div>

                        <div className={classes.titleText} style={{ position: 'absolute', bottom: 0 }}>
                        {currentBuilding}
                        </div>
                    </div>

                    <div>
                        <div style={{ height: 20 }} />
                        {isLoading &&
                            allFloor.filter(val => {
                                if (search == '') {
                                  
                                    return val;
                                } else if (
                                    // val.roomNumber.toLowerCase().includes(search.toLowerCase())
                                    val.floorName.toLowerCase().includes(search.toLocaleLowerCase())
                                    // val.rooms[0].roomNumber.includes(search.toLowerCase())
                                )
                                 {
                                    console.log("GREAT: ")
                                    console.log(val.rooms[0])
                                    return val.rooms[0]
                                }
                            }).map((item, index) => (

                                <Floorsection

                                    floorName={item.floorName}
                                    allFloor={allFloor[index].rooms}
                                    numBed={numBed[index]}
                                    numPeople={numPeople[index]}
                                    
                                />

                            ))

                        }

                    </div>
                </div>
            </div>
        </ScrollView>

    )

}