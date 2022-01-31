import React from 'react'
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import moment from 'moment';
import NumberFormat from 'react-number-format';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import DropBuilding from '../../Components/Dropdown/DropBuilding';
import DropFloor from '../../Components/Dropdown/DropFloor';
import DropStatus from '../../Components/Dropdown/DropStatus.js';
import { useParams } from 'react-router';



const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '148px',
        position: "relative",
    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 110


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
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        marginRight: 40
    },
    papercard: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '200px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    Tablecellcard: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    Tablecellcard2: {
        width: '570px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: "15%",
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    floortext: {
        display: 'inline',
        marginRight: '82px',
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
        top: 0,
        marginTop: '13px',
    },
    paperrow: {
        margin: 'auto',
        maxWidth: '1163px',
        height: '5px',
        position: 'relative',
        boxShadow: 'none',
        borderBottom: '1px solid #D8D8D8',
        borderRadius: '0px'
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

    root2: {
        minWidth: 275,
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%',
    },

    BuildingnameMove: {
        marginLeft: '5%',
    },

    TabMove: {
        marginLeft: "5%",
    },

    Searchstyle: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: -7,
        marginTop: 10,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    Searchbuilding: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: -70,
        marginTop: 10,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    Searchbuilding2: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: -150,
        marginTop: 10,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },


    SearchBtn: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        marginBottom: 40,
        marginLeft: -150,
        marginTop: 10,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    SearchBtn: {
        backgroundColor: "#fff",
        marginBottom: 40,
        marginLeft: 37,
        '& > * + *': {
            marginTop: theme.spacing(0),
        },
    },

    Spacing: {
        margin: '5%',
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

    dropdown: {
        width: 200,
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
    headfloors: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px',
        width: '100%'
    },

    headBuilding: {

        marginLeft: '-25px',
        paddingTop: '14px'
    },

    Billheadd: {
        position: 'absolute',
        marginLeft: '-25px',
        // paddingTop: '10px'
        top: 40
    },



    Closebill: {
        marginButtom: '-50%'
    }
    ,
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
    textDrop: {
        fontSize: 16,
        color: "#4A4A4A"

    },
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export default function Billpage({ isOpened }) {
    const classes = useStyles();
    const [bill, setBill] = useState([]);
    const [search, setSearch] = useState("")
    const [dropdown, setDropdown] = useState([])
    const [building, setBuildingFromDrop] = useState("AddMi")
    const [floorUrl, setFloorUrl] = useState(`/dropdown/floors/${building}`)
    const [thisStatus, setThisStatus] = useState("Paid")
    const [getDate, setupDate] = useState(
        moment().format('MM-DD-YY')
    )
    const { id } = useParams()


    const dateFormatter = date => {
        // return moment(date).unix();
        return moment(date).format('DD-MM-YY');
    };

    useEffect(() => {
        console.log("am hereee")

        console.log(getDate)
        const fetchData = () => {
            // axios.get('/bill/bills/38/date/05-12-2021')
            //     .then(r => {
            //         setBill(r.data)
            //         console.log(r.data)
            //     })
            axios.get(`/bill/bills/${id}/date/${getDate}`)
                .then(r => {
                    setBill(r.data)
                    console.log(r.data)
                    console.log(r.data.length)
                    // alert(moment().format('DD-MM-YY'))

                })
                .catch(error => {
                    console.log(error.response)
                })
        }
        fetchData()
    }, [setupDate])



    console.log(bill)

    React.useEffect(() => {
        const fetchData = () => {
            axios.get('/dropdown/buildings')
                .then(r =>
                    setDropdown(r.data))
        }
        fetchData()
    }, [])

    React.useEffect(() => {
        const fetchData = () => {
            axios.get(`/dropdown/floors/${building}`)
                .then(r =>
                    setDropdown(r.data))
        }
        fetchData()
    }, [])

    const Closebill = () => {
        axios.post("/bill/closed-bill", {
        }).then(() => {
            setBill([
                {
                    "BillIds": [1, 2, 3]
                },
            ]);
            window.location.href = '/createfeetype';
        });
    };
    const getBillId = async () => {
        const a = []
        for (var i = 0; i < bill[0].floors.length; i++) {
            for (var j = 0; j < bill[0].floors[i].rooms.length; j++) {
                // a.push(bill[0].floors[i].rooms[j].expenses[0].rentingTransactionId)
                if (bill[0].floors[i].rooms[j].expenses.length > 0) {
                    a.push(bill[0].floors[i].rooms[j].expenses[0].rentingTransactionId)
                    console.log(bill[0].floors[i].rooms[j].expenses[0].rentingTransactionId)
                }

            }
        }
        // console.log(a)

        let res = await axios({
            url: `/bill/closed-bill`,
            method: 'post',
            data: {
                "BillIds": a,
            }

        }).then(response => {
            alert("post success")
            window.location.href = `/bill/${id}`;
            console.log(response)
        })
            .catch(error => {
                alert("post fail")
                console.log('Error getting fake data: ' + error);
            })

    }

    // function DropBuilding() {


    //     const [buildings, setBuilding] = useState([]);

    //     const api = axios.create({
    //         baseURL: '/dropdown/buildings'
    //         // 'https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/testimnew'
    //         // baseURL: '/announcement/type-announcements'
    //     })


    //     const getType = async () => {
    //         let data = await api.get('/').then(({ data }) => data);
    //         // this.setState({ news: data })
    //         setBuilding(data)

    //     }

    //     useEffect(() => {

    //         getType();

    //     }, []);

    //     const handleChange = (event) => {
    //         // console.log(event.target.value);
    //         // props.save(event.target.value)
    //         setBuildingFromDrop(event.target.value)
    //     }


    //     return (
    //         <div style={{ display: 'flex' }}>
    //             <select onChange={handleChange} style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A' }} >

    //                 <option >Not Specify</option>

    //                 {buildings.map(buildings =>
    //                     <option  value={buildings.text}>{buildings.text}</option>
    //                 )}

    //             </select>
    //             {/* <ArrowDropDownIcon style={{ color: "#000000", position: 'absolute', left: 130, top: 67 }} /> */}

    //         </div>
    //     );

    // }




    // function DropFloor() {


    //     const [floors, setFloors] = useState([]);

    //     const api = axios.create({
    //         // baseURL: props.url

    //         // 'https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/testimnew'
    //         baseURL: `/dropdown/floors/${building}`


    //     })


    //     const getType = async () => {
    //         let data = await api.get('/').then(({ data }) => data);
    //         // this.setState({ news: data })
    //         setFloors(data)

    //     }

    //     useEffect(() => {

    //         getType();

    //     }, []);

    //     const handleChange = (event) => {
    //         // console.log(event.target.value);
    //         // props.save(event.target.value)
    //     }


    //     return (
    //         <div style={{ display: 'flex' }}>
    //             <select onChange={handleChange} style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A' }} >

    //                 <option >Not Specify</option>

    //                 {floors.map(f =>
    //                     <option value={f.text}>Floor {f.text}</option>
    //                 )}

    //             </select>

    //         </div>
    //     );

    // }


    return (
        <div style={{ width: '100%' }}>
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div className={classes.frame}>
                            <Datetoday />

                            <h5 className={classes.Billheadd} id="newannouncetitle">  Bill </h5>

                            <div style={{ display: "flex", position: "absolute", top: 110, width: '100%' }}>

                                <div style={{ position: 'relative', width: 161 }}>
                                    <div className={classes.textDrop}>
                                        Search
                                    </div>
                                    <div style={{ height: 4 }} />

                                    <input 
                                    style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A', position: 'absolute' }}
                                    placeholder="" type="text" 
                                    onChange={(e)=>{
                                        setSearch(e.target.value);
                                        }}>
                                    </input>
                                </div>

                                <div style={{ width: 12 }} />

                                <div>
                                    <div className={classes.textDrop}>
                                        Building
                                    </div>
                                    <div style={{ height: 4 }} />

                                    <DropBuilding
                                        save={building => {
                                            setBuildingFromDrop(building)
                                            setFloorUrl(`/dropdown/floors/${building}`)

                                        }}


                                    />

                                </div>

                                {/* <div style={{ width: 12 }} />
                                <div>
                                    <div className={classes.textDrop}>
                                        Floor
                                    </div>
                                    <div style={{ height: 4 }} />
                                    <DropFloor
                                      url={floorUrl}
                                    />
                                </div> */}

                                <div style={{ width: 12 }} />


                                <div>
                                    <div className={classes.textDrop}>
                                        Date
                                    </div>

                                    <div style={{ height: 4 }} />

                                    {/* <DropBuilding
                                    // save={currentBuilding => setCurrentBuilding(currentBuilding)}
                                    /> */}
                                    <input placeholder="" type="date" style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A', position: 'absolute' }}
                                        value={getDate}
                                        onChange={e => { setupDate(e.target.value) }}
                                    >

                                    </input>

                                </div>

                                <div style={{ width: 12 }} />


                                {/*<div style={{ paddingLeft: 128 }}>
                                    <div className={classes.textDrop}>
                                        Status
                                    </div>
                                    <div style={{ height: 4 }} />

                                    {/* <DropStatus
                                    // save={currentBuilding => setCurrentBuilding(currentBuilding)}
                                    /> */}

                                    {/*<DropFloor
                                        url={`/dropdown/floors/${building}`}

                                    />

                                    </div>*/}

                                <div style={{ width: 12 }} />
                          </div>
                        </div>

                        <div>
                            {/*<Billfloorcard />*/}
                            <div>
                                {bill.length > 0 && bill.map((rows) => {
                                    return (
                                        <div className="container ">
                                            <h5 className={classes.headBuilding} id="newannouncetitle"> {rows.buildingName} </h5>
                                            {rows.floors.map((f) => {
                                                return (
                                                    <Paper className={classes.papercard} style={{ border: "1px solid #AAAAAA" }}>
                                                        <h4 className={classes.headfloors}>Floor{f.floorName}</h4>
                                                        <div className={classes.headfloor}>
                                                            <div style={{ position: 'absolute', paddingTop: '6px', width: '100%' }}>
                                                            <div className={classes.floortext} style={{ marginRight: 72 }}>
                                                                    Room
                                                                    <div className={classes.minitext} style={{ paddingLeft: '295px' }}></div>
                                                                </div>
                                                                <div className={classes.floortext} style={{ marginRight: 92 }}>
                                                                    Bill period
                                                                    <div className={classes.minitext} style={{ paddingRight: '85%' }}></div>
                                                                </div>

                                                                <div className={classes.floortext} style={{ paddingLeft: '32px' }}>
                                                                    Rent
                                                                    <div className={classes.minitext} style={{ paddingLeft: '296px' }}>(THB) </div>
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Electricity
                                                                    <div className={classes.minitext} style={{left:'24%', position: 'absolute' }}>(THB) </div>

                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Water
                                                                    <div className={classes.minitext} style={{right:'10%', position: 'absolute' }}>(THB) </div>

                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Others
                                                                    <div className={classes.minitext} style={{right:'10%', position: 'absolute' }}>(THB) </div>
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Total
                                                                    <div className={classes.minitext} style={{right:'1%', position: 'absolute' }}>(THB) </div>
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Status
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Detail
                                                                    <div className={classes.minitext} style={{ paddingLeft: '3px' }}> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{ marginTop: "50px" }} />
                                                        {f.rooms.filter(val => {
                                                            if (search == '') {
                                                                return val;
                                                            } else if (
                                                                val.roomNumber.toLowerCase().includes(search.toLowerCase())
                                                            ) {
                                                                return val
                                                            }
                                                        }).map((n) => {
                                                            console.log(n)
                                                            return (
                                                                <div style={{ width: '1163px', height: '55px', position: 'relative' }}>
                                                                    {/* {n.expenses.map((x) => {
                                                                    console.log(x)
                                                                    return ( */}
                                                                    <div style={{ width: '1163px', postition: 'relative', borderBottom: '1px solid #AAAAAA' }} >
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', left: 45, top: 18 }}>
                                                                            {n.roomNumber}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', left: 155, top: 18 }}>
                                                                            {/* tickFormatter={dateFormatter} */}
                                                                            {/* 27/03/21-27/04/2021 */}
                                                                            {/* {moment(x.billPeriod).format("L")} */}
                                                                            {n.expenses.length > 0 ?
                                                                                moment(n.expenses[0].startTime).format("DD/MM/YYYY") + "-" + moment(n.expenses[0].endtime).format("DD/MM/YYYY")

                                                                                : "-"}


                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 791, top: 18 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                <NumberFormat
                                                                                    value={n.expenses[0].rent.toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                                                                : "-"}
                                                                            {/* <NumberFormat
                                                                                value={n.expenses[0].rent.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} /> */}
                                                                            {/* {n.expenses[0].rent.toFixed(2)} */}



                                                                        </div>

                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 650, top: 18 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                <NumberFormat
                                                                                    value={n.expenses[0].electricity.toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                                                                : "-"}
                                                                            {/* <NumberFormat
                                                                                value={n.expenses[0].electricity.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} /> */}
                                                                            {/* {n.expenses[0].electricity} */}

                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 532, top: 18 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                <NumberFormat
                                                                                    value={n.expenses[0].waterPrice.toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                                                                : "-"}
                                                                            {/* <NumberFormat
                                                                                value={n.expenses[0].waterPrice.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} /> */}

                                                                            {/* {n.expenses[0].waterPrice} */}

                                                                        </div>

                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 408, top: 18 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                <NumberFormat
                                                                                    value={n.expenses[0].other.toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                                                                : "-"}
                                                                            {/* <NumberFormat
                                                                                value={n.expenses[0].other.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} /> */}
                                                                            {/* {n.expenses[0].other} */}

                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 295, top: 18 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                <NumberFormat
                                                                                    value={n.expenses[0].totalPrice.toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                                                                : "-"}
                                                                            {/* <NumberFormat
                                                                                value={n.expenses[0].totalPrice.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} /> */}
                                                                            {/* {n.expenses[0].totalPrice} */}

                                                                        </div>

                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 174, top: 18 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                n.statusInfo
                                                                                : "-"}
                                                                            {/* {n.statusInfo} */}
                                                                        </div>

                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 60, top: 16 }}>
                                                                            {n.expenses.length > 0 ?
                                                                                <Link to={`/billdetails/${n.roomId}`}>
                                                                                    <InfoOutlinedIcon style={{ color: "#485D84" }} />
                                                                                </Link>
                                                                                :

                                                                                <InfoOutlinedIcon style={{ color: "#485D84" }} />
                                                                             
                                                                            }
                                                                            {/* <Link to={`/billdetails/${n.roomId}`}>
                                                                                <InfoOutlinedIcon style={{ color: "#485D84" }} />
                                                                            </Link> */}
                                                                        </div>


                                                                    </div>
                                                                    {/* )
                                                                })} */}

                                                                </div>
                                                            )
                                                        })}

                                                    </Paper>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>


                </div>

            </ScrollView>

            {bill.length > 0 && bill[0].floors[0].rooms[0].expenses[0].isClosed == false &&

                <div style={{ position: 'absolute', width: '100%', height: 200, top: 600 }}>

                    <Button style={{ backgroundColor: "#485D84", width: 406, height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1, position: 'absolute', left: 630, top: 20 }}
                        // onClick={() => window.location.href = `/setting2/${id}`}
                        onClick={() => getBillId()}

                    >
                        Close
                    </Button>

                    <div style={{
                        backgroundColor: '#385CA8', opacity: 0.5
                        , width: "100%", height: 200, position: 'relative'
                    }}>

                    </div>

                </div>

            }

        </div>
    )
}