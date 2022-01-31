import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Floorcom from './STRoomComp/Floorcom.js';
import axios from 'axios';
import { useEffect } from 'react';
import DisplayDialog from './DisplayDialog.js';
import Arraylist from '../../Components/Anouncement/Arraylist.js';
import DropBuilding from '../../Components/Dropdown/DropBuilding.js';
import DropStatus from '../../Components/Dropdown/DropStatus.js';
import { Button } from '@material-ui/core';
import DropIsAvailable from '../../Components/Dropdown/DropIsAvailable.js';
import { useParams } from "react-router";
import DropFloor from '../../Components/Dropdown/DropFloor';


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

export default function STRoompage({ isOpened,props }) {
    const classes = useStyles();
    const [buildName,setBuildName] = useState("")
    const {id} = useParams()

    // https://habitat1.azurewebsites.net/api/v1/building/buildings
    useEffect( async () => {
        console.log(id + "in Use Eff first row")
        await axios(`/building/building/id/${id}`)
        .then(response => {
            console.log(response.data, "in response")
            setBuildName(response.data[0].buildingName)
            axios(`/room/room-types/${response.data[0].buildingName}`)
            .then(response => {
                console.log(response.data)
                setAllFloor(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
        console.log(buildName[0] + "This Build Name ")

    }, []);
    const [allFloor, setAllFloor] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false)

    const [dropFloorSelect, setDropFloorSelect] = useState("2")

    // const [keptAllSelect, setKeptAllSelect] = useState(props.selectArray)
    const [getcurrentSelect, setCurrentSelect] = useState([])
    const [getcurrentSelect2, setCurrentSelect2] = useState([])

    


    function findpositionElement() {
        for (var i = 0; i < allFloor.length; i++) {
            if (allFloor[i].floorName == dropFloorSelect) {
                return i
            }
        }
        
    }

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <DisplayDialog
                allSelcted={getcurrentSelect}
                allSelcted2={getcurrentSelect2}

                trigger={buttonPopup}
                setTrigger={setButtonPopup} />
            <ScrollView
            // scrollEnabled={!buttonPopup}
            >
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div className={classes.frame}>
                            <Datetoday />
                            {/* <Button  style={{backgroundColor: 'blue'}} onClick={() => props.isOpened('Anna')}/> */}
                            <div className={classes.titleText}>
                                Room Types
                            </div>

                           {/* <div style={{ display: "flex", position: "absolute", bottom: 70, width: '100%' }}>
                                
                                <div>
                                    <div className={classes.textDrop}>
                                        Floor
                                    </div>

                                    <div style={{ height: 4 }} />

                                    <DropFloor
                                        url={`/dropdown/floors/Great1111`}
                                    />
                                </div>

                                <div style={{ width: 12 }} />
                                <div>
                                    <div className={classes.textDrop}>
                                        Type
                                    </div>
                                    <div style={{ height: 4 }} />

                                    <DropStatus />
                                </div>

    </div>*/}

                            <div className={classes.titleText} style={{ position: 'absolute', bottom: 75 }}>
                                {allFloor.length > 0 ? allFloor[0].buildingName : ""}
                            </div>

                            <div style={{ height: '20px' }}>

                            </div>
                        </div>
                        <div style={{ height: '20px' }}>

                        </div>
                        <div style={{marginTop: -75}}>
                            {/* {allFloor.filter(floor => floor.floorName == '2').map((item, index) => ( */}
                            {true ?
                                allFloor.map((item, index) => (

                                    <Floorcom
                                        // key={index}
                                        getcurrentSelect2={currentSelect2 => setCurrentSelect2(currentSelect2)}
                                        getcurrentSelect={currentSelect => setCurrentSelect(currentSelect)}
                                        setTrigger={setButtonPopup}
                                        floorName={item.floorName}
                                        allFloor={allFloor[index].rooms}
                                    />
                                ))
                                :
                                allFloor.filter(floor => floor.floorName == dropFloorSelect).map((item, index) => (
                                    <Floorcom
                                        // key={index}
                                        getcurrentSelect2={currentSelect2 => setCurrentSelect2(currentSelect2)}

                                        getcurrentSelect={currentSelect => setCurrentSelect(currentSelect)}
                                        setTrigger={setButtonPopup}
                                        floorName={item.floorName}
                                        allFloor={allFloor[findpositionElement()].rooms}
                                    />
                                ))}


                            <div style={{ height: 180 }}>

                            </div>

                            {/* {allData.map((value, index) => {
                            return value.type === "Important News" ?
                                <ImpNews
                                    key={index}
                                    Name={value.title}
                                    img={value.imageUrl}
                                    //cell={value.description}
                                    Date={value.announceDate}
                                    ID={value.id} />
                                : null
                        })} */}

                        </div>

                    </div>
                </div>
            </ScrollView>

            <div style={{ position: 'absolute', width: '100%', height: 200, top: 600 }}>

                <Button style={{ backgroundColor: "#485D84", width: 406, height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1, position: 'absolute', left: 620, top: 20 }}
                onClick={()=> window.location.href = `/setting2/${id}`}
                >
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