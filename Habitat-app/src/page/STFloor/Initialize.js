import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from '@material-ui/core/TextField';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import CircularProgress from '@mui/material/CircularProgress';

import { ScrollView } from 'react-native';
import { useParams } from 'react-router';

import axios from 'axios';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';

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
        width: '60%',
        padding: theme.spacing(3),
        margin: 'auto',
    },

    Cards: {
        width: '100%',
        padding: theme.spacing(1),
        margin: 'auto',
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    // title: {
    //     fontSize: 14,
    // },

    pos: {
        marginBottom: 12,
    },

    Btn: {
        marginLeft: "92%",
        marginTop: "-6%",
    },
    title: {
        fontSize: '22.6px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',
        top: 26.6,
        left: 42
    },
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
        height: 150,
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
        // borderBottom: '0.75px solid #AAAAAA',

    },

    title2: {
        fontSize: '17.4px',
        color: '#4A4A4A',
        fontWeight: 400,
        position: 'absolute',
        top: 70.6,
        left: 42

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

    inputbox: {
        position: 'absolute',
        height: "31.5px",
        width: "151px",
        fontSize: '13px',
        fontWeight: '400',
        color: '#4A4A4A',
        marginTop: '14.7px',
        top: 86.6,
        left: 42

    },

    rominfame: {
        width: '100%',
        height: 55,
        position: 'relative'
    },
    inputSize: {
        height: 31.5,
        width: 149,
        fontSize: '13px',
        color: '#4A4A4A',
        position: 'relative',
        margin: 'auto'
    },
}));

export default function Initialize(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [allroom, setAllroom] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [addDate, setAddDate] = useState("")
    const { id } = useParams()

    useEffect(() => {
        axios(`/building/rooms/${id}`)
            .then(response => {
                console.log(response.data)
                setAllroom(response.data);
                insertObj()
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
                setLoading(false)
            })
    }, [isLoading]);




    /*const [stroom, setStroom] = useState([])
      React.useEffect(() => {
        const fetchData = () =>{
         axios.get('/building/rooms/1')
        .then(r => {  
          
        setStroom(r.data)
         for (const data in r.data) {
          for (const floor in data){
            for (const room in floor.room)    
            {
              let Initial ={
                  id: "1",
                  roomNumber: "1"  
                  }
                  stroom.push(Calculate)
              }  
            }
           }    
        })
        
      };
      fetchData()
    }, [])*/



    function handlerChangeJSOn() {
        allroom[0].buildingName = "Laila"
        setKeepstate(allroom[3].floors[0].rooms)
        console.log(keepstate)
    }


    const [newArray, setNewArray] = useState([])
    const [onlyRoom, setOnlyRoom] = useState([])

    function insertObj() {
        for (var i = 0; i < allroom.length; i++) {


            for (var j = 0; j < allroom[i].room.length; j++) {
                // var a = addObjToRoom(allroom[i].room[j],'SetupDate', '22')
                // console.log(a)
                allroom[i].room[j] = {
                    "roomId": parseInt(allroom[i].room[j].id),
                    "SetupDate": "2021-09-16",
                    "roomNumber": allroom[i].room[j].roomNumber,
                    "ElectricityReading": "12",
                    "WaterReading": "14"
                }

            }

        }
        console.log("huffe" + allroom)
        setNewArray(allroom)
        setLoading(false)

    }
    const api = axios.create({
        baseURL: `/InitializeExpenses/initialize-expenses/`
    })


    const addWaterElec = async () => {
        console.log(finalroom)

        let res = await axios({
            url: `/InitializeExpenses/initialize-expenses/`,
            method: 'post',
            data: finalroom

        }).then(response => {
            alert("post success")
            console.log(finalroom)
            // window.location.href = `/feetype_sp/${id}`;
            // window.location.href =  `/setting2/${id}`;
        })
            .catch(error => {
                alert("post fail")
                console.log('Error getting fake data: ' + error);
            })



        // let res = await api.post('/',

        //     finalroom

        // ).then(response => {
        //     alert("post success")
        // })
        // .catch(error => {
        //     alert("post fail")
        //     console.log('Error getting fake data: ' + error);
        // })
    }


    const [keepstate, setKeepstate] = useState([])

    const [finalroom, setfinalroom] = useState()
    // const Expensesave = event => {
    //     event.preventDefault();
    //     axios.post("/rentingtransaction/electricity-water-expenses",

    //         keepstate

    //     ).then((response) => {
    //         console.log(response);
    //     })
    // };



    function handleaddDateChange(r, e) {
        r.SetupDate = String(addDate)
        r.ElectricityReading = String(e)
    }

    function handleaddDateChange2(r, e) {
        r.SetupDate = String(addDate)
        r.WaterReading = String(e)
    }

    async function handlesubmit() {
        setOnlyRoom([])
        for (let i = 0; i < newArray.length; i++) {
            for (let j = 0; j < newArray[i].room.length; j++) {
                onlyRoom.push(newArray[i].room[j])
            }
        }
        console.log(onlyRoom)

        setfinalroom(onlyRoom)


        // await addWaterElec()

    }


    if (!isLoading) {
        return (
            <div style={{ width: '100%', position: 'relative' }}>
                <ScrollView>
                    <div style={{height: 80}}/>
                    <div style={{position: 'relative', margin: 'auto', height: 700}}>
                        {/* <button onClick={() => console.log(finalroom)}>
                        </button> */}
                        <div>
                            <div style={{ width: '100%', height: '650px' }}>

                                <div className={classes.mainFame}>
                                    <Table aria-label="caption table">
                                        <TableRow>
                                            <div className={classes.mainFameHeader}>
                                                <div className={classes.title}>Initial Expenses</div>
                                                <div className={classes.title2}>Setup Date</div>
                                                <br />
                                                <input className={classes.inputbox}
 
                                                    type="date"
                                                    data-date-format="dd/MM/yy"
                                                    //value="2021-21-06"
                                                    onChange={e => { setAddDate(e.target.value); handlesubmit() }}
                                                />

                                            </div>
                                        </TableRow>

                                        <div style={{ position: 'relative', height: 61.4 }}>
                                            <div className={classes.title2} style={{ position: 'absolute', top: 18.18, fontWeight: 'bold', left: 73.5 }}>
                                                {newArray.length > 0 && newArray[0].building}
                                            </div>
                                        </div>


                                        {newArray.map((set) => {
                                            return (
                                                <div className={classes.inFame} style={{ position: 'relative', margin: 'auto', marginBottom: 20 }}>
                                                    <div className={classes.inFameHeader}>
                                                        <div className={classes.title3} >
                                                            Floor {set.floorName}

                                                        </div>
                                                        {/* display flex */}
                                                        <div style={{ display: 'flex' }}>
                                                            <div className={classes.title4} style={{ left: 41 }}>
                                                                Room
                                                            </div>
                                                            <div className={classes.title4} style={{ right: 265 }}>
                                                                Electricity Reading
                                                            </div>
                                                            <div className={classes.title4} style={{ right: 62 }}>
                                                                Water Reading
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {set.room.map((r) => {
                                                        { console.log('im here') }
                                                        return (
                                                            <div className={classes.rominfame} style={{ borderTop: '0.75px solid #AAAAAA' }}>
                                                                {/* display flex */}
                                                                <div style={{ display: 'flex' }}>
                                                                    <div className={classes.title5} style={{ left: 41, top: 18 }}>
                                                                        {r.roomNumber}
                                                                    </div>

                                                                    {/* <input className={classes.inputSize} style={{ top: 12, marginLeft: 206 }}
                                                                        onChange={e => room.room_number = e.target.value}
                                                                    >
                                                                    </input> */}

                                                                    <input
                                                                        className={classes.inputSize}
                                                                        style={{ top: 12, marginLeft: 206 }}
                                                                        onChange={e => handleaddDateChange(r, e.target.value)}
                                                                    />

                                                                    {/* <div className={classes.buttonDelete} style={{ right: 44, top: 14 }}>
                                                                        <DeleteIcon style={{ color: '#4A4A4A', position: 'absolute', width: 16, height: 16, top: 6, right: 6 }} />
                                                                    </div> */}

                                                                    <input
                                                                        className={classes.inputSize}
                                                                        className={classes.inputSize}
                                                                        style={{ top: 12 }}

                                                                        onChange={e => handleaddDateChange2(r, e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                </div>

                                            )
                                        })}
                                        {/* <TableBody> */}

                                        {/* <div className="container">
                                                {newArray.map((set) => {
                                                    return (
                                                        <div className={classes.inFame} variant="outlined">
                                                            <div className={classes.inFameHeader}>
                                                                {set.FloorName}
                                                            <Table>
                                                                    <div className={classes.inFameHeader}>
                                                                        Floor {set.floorName}
                                                                        
                                                                    <TableRow>
                                                                        <TableCell>Rooms</TableCell>
                                                                        <TableCell align="center">Electricity Reading</TableCell>
                                                                        <TableCell align="center">Water Reading</TableCell>
                                                                    </TableRow>
                                                                        </div>
                                                                {set.room.map((r) => {
                                                                    return (
                                                                        <TableBody>
                                                                            <TableRow>
                                                                                <TableCell align="left">{r.roomNumber}</TableCell>
                                                                                <TableCell align="center">
                                                                                    <input
                                                                                        size="small"
                                                                                        variant="outlined"
                                                                                        onChange={e => handleaddDateChange(r, e.target.value)}
                                                                                    />
                                                                                </TableCell>
                                                                                <TableCell align="center">
                                                                                    <input
                                                                                        size="small"
                                                                                        variant="outlined"
                                                                                        onChange={e => handleaddDateChange2(r, e.target.value)}
                                                                                    />
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        </TableBody>
                                                                    )
                                                                })}
                                                            </Table>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div> */}

                                        {/* </TableBody> */}

                                    </Table>
                                    <div style={{ height: 50 }}>

                                    </div>
                                </div>

                                <div style={{ height: 200 }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollView>
                <div style={{ position: 'absolute', width: '100%', bottom: 10 }}>
                    {/* <Link to='/feetype_sp' style={{ textDecoration: "none" }}> */}
                    <Button style={{
                        backgroundColor: "#485D84",
                        width: 406, height: 42.87, color: "#FFFFFF",
                        fontSize: 21, zIndex: 1,
                        position: 'absolute', left: 610, top: 25
                    }}
                        // onClick={() => handlesubmit()}
                        onClick={addWaterElec}
                    >
                        SAVE
                    </Button>
                    {/* </Link > */}

                    <div
                        style={{
                            backgroundColor: '#385CA8',
                            opacity: 0.5, width: "100%", height: 140, position: 'relative'
                        }}>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <CircularProgress color="secondary" />
            </div>
        )
    }
}
