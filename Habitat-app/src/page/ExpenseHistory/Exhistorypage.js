// import React from 'react'
// import Exfloorcard from './Exhistorycompo/Exfloorcard'
// import { makeStyles } from '@material-ui/core/styles';
// import Datetoday from '../../Components/AllComponent/Datetoday.js'
// import { ScrollView } from 'react-native';
// import Navbar2 from '../../Components/AllComponent/Navbar2';
// import { useState } from 'react';
// import { Button } from '@material-ui/core';
// import axios from 'axios';
// import { useEffect } from 'react';
// import DropBuilding from '../../Components/Dropdown/DropBuilding';
// import DropFloor from '../../Components/Dropdown/DropBuilding';
// import DropStatus from '../../Components/Dropdown/DropStatus';

// const useStyles = makeStyles((theme) => ({
//     frame: {
//         width: '1163px',
//         height: '232px',
//         position: "relative"
//     },
//     scrollspace: {
//         height: "730px",
//         width: '1163px',
//         margin: 'auto',
//         paddingLeft: 110,
//         transition: 'all 0.5s ease'

//     },
//     scrollspace36: {
//         height: "730px",
//         width: '1163px',
//         margin: 'auto',
//         paddingLeft: 36,
//         transition: 'all 0.5s ease'
//     },
//     textDrop: {
//         fontSize: 16,
//         color: "#4A4A4A"

//     },
//     titleText: {
//         fontSize: 19.4,
//         fontWeight: 'bold',
//         color: "#4A4A4A"

//     },
//     buttontop: {
//         backgroundColor: '#485D84',
//         borderRadius: "5px",
//         textTransform: "none",
//         fontSize: "13px",
//         color: '#fff',
//         fontWeight: 'normal',
//         width: "107.6px",
//         height: "31.5px",
//         // position: "absolute",

//         '&:hover': {
//             backgroundColor: '#687690',
//             color: '#fff',
//             width: "107.6px",
//             height: "31.5px"
//         },
//     },
// }));

// export default function Exhistorypage({ isOpened }) {
//     const classes = useStyles();
//     const [allFloor, setAllFloor] = useState([])

//     useEffect(() => {
//         axios('/history/expense-history/King Solomon/date/2021-06-20')
//             .then(response => {
//                 console.log("4444")
//                 console.log(response.data)
//                 setAllFloor(response.data);
//             })
//             .catch(error => {
//                 console.log('Error getting fake data: ' + error);
//             })
//     }, []);



//     return (

//         <ScrollView>
//             <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
//                 <div>
//                     <div className={classes.frame}>
//                         <Datetoday />
//                         {/* <Button  style={{backgroundColor: 'blue'}} onClick={() => props.isOpened('Anna')}/> */}
//                         <div className={classes.titleText}>
//                             Expense History
//                         </div>

//                         <div style={{ display: "flex", position: "absolute", bottom: 70, width: '100%' }}>


//                             <div style={{ position: 'relative', width: 161 }}>
//                                 <div className={classes.textDrop}>
//                                     Search
//                                 </div>
//                                 <div style={{ height: 4 }} />

//                                 <input placeholder="" type="text" style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A', position: 'absolute' }}>

//                                 </input>
//                             </div>

//                             <div style={{ width: 12 }} />

//                             <div>
//                                 <div className={classes.textDrop}>
//                                     Building
//                                 </div>
//                                 <div style={{ height: 4 }} />

//                                 <DropBuilding />
//                             </div>

//                             <div style={{ width: 12 }} />

//                             <div>
//                                 <div className={classes.textDrop}>
//                                     Floor
//                                 </div>
//                                 <div style={{ height: 4 }} />

//                                 <DropFloor
//                                     url='/filter/filter-building/King David'
//                                 />
//                             </div>

//                             <div style={{ width: 12 }} />


//                             <div>
//                                 <div className={classes.textDrop}>
//                                     Status
//                                 </div>
//                                 <div style={{ height: 4 }} />

//                                 <DropStatus />
//                             </div>

//                             <div style={{ width: 12 }} />

//                             <div>
//                                 <div className={classes.textDrop}>
//                                     Date
//                                 </div>
//                                 <div style={{ height: 4 }} />

//                                 <input
//                                     className={classes.textDrop}
//                                     placeholder="Date"
//                                     type="date"
//                                     name="Date"
//                                     noValidate
//                                     style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A', position: 'absolute' }}
//                                 // onChange={(event) => {
//                                 //     setDatecreate(event.target.value)
//                                 // }}
//                                 />
//                             </div>

//                             <div style={{ position: 'absolute', right: 0, top: 28 }}>
//                                 <Button className={classes.buttontop} >
//                                     Search
//                                 </Button>
//                             </div>

//                         </div>


//                         <div className={classes.titleText} style={{ position: 'absolute', bottom: 0 }}>
//                             Building
//                         </div>

//                     </div>



//                     <div>
//                         <div style={{ height: 20 }} />

//                         {allFloor.map((item, index) => (

//                             <Exfloorcard
//                                 nowFloor={allFloor[index].floorName}
//                                 allFloor={allFloor[index].room}



//                             />


//                         ))}


//                     </div>
//                 </div>
//             </div>
//         </ScrollView >

//     )
// }

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
import Table from '@material-ui/core/Table';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useParams } from 'react-router';


const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        //backgroundColor: 'red',
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
    tablefont: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#4A4A4A',

    }
    ,
    intablefont: {
        fontSize: '13px',
        color: '#4A4A4A',

    }
    ,

    headfloor: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '30px',
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
            marginTop: theme.spacing(0),
        },
    },

    Searchbuilding: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: -380,
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
            marginTop: theme.spacing(0),
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
        marginLeft: '50px',
        paddingTop: '18px',
        width: '100%'
    },

    headBuilding: {

        marginLeft: '-25px',
        marginTop: '-65px'
    },

    Billheadd: {

        marginLeft: '-25px',
        paddingTop: '14px'
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

    }
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

export default function Exhistorypage({ isOpened }) {
    const classes = useStyles();
    const [bill, setBill] = useState([]);
    const [search, setSearch] = useState("")
    const [dropdown, setDropdown] = useState([])
    const [building, setBuilding] = useState([])
    const { id } = useParams()
    const [buildName, setBuildName] = useState("")
    const [getDate, setupDate] = useState(
        moment().format('MM-DD-YY')
    )

    const dateFormatter = date => {
        // return moment(date).unix();
        return moment(date).format('DD-MM-YY');
    };

    useEffect(async () => {
    
        await axios.get(`/history/expense-history/${id}/date/${getDate}`)
            .then(r =>
                setBill(r.data))
            .catch(error => {
                console.log('Error getting fake data: ' + error);

            })

        // const fetchData = () => {

        // }
        // fetchData()
    }, [])
    console.log(bill)

    React.useEffect(() => {
        const fetchData = () => {
            axios.get('/dropdown/buildings')
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
                a.push(bill[0].floors[i].rooms[j].expenses[0].rentingTransactionId)

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
            // window.location.href = `/feetype_sp/${id}`;
            console.log(a)
        })
            .catch(error => {
                alert("post fail")
                console.log('Error getting fake data: ' + error);
            })

    }





    return (
        <div style={{ width: '100%' }}>
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div className={classes.frame}>
                            <Datetoday />
                            <h5 className={classes.Billheadd} id="newannouncetitle">
                                Expense History
                            </h5>

                            <div className="row align-items-start">

                                <div className="col">
                                    <Paper component="form" className={classes.Searchstyle}>
                                        <BootstrapInput
                                            type="text"
                                            size="small"
                                            variant="outlined"
                                            //label="Date"     
                                            placeholder="search"
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }}
                                        />
                                    </Paper>
                                </div>
                                <div className="col">
                                    <Paper component="form" className={classes.Searchbuilding}>
                                        <BootstrapInput
                                            type="date"
                                            size="small"
                                            variant="outlined"
                                            label="Date"
                                            placeholder="Date"

                                        />
                                    </Paper>
                                </div>

                                {/*<div className="col">
                                    <Paper component="form" className={classes.Searchbuilding2}>
                                        <NativeSelect
                                            className={classes.dropdown}
                                            id="demo-customized-select-native"
                                            value={building}
                                            //onChange={handleChange}
                                            onChange={(e) => {
                                                setBuilding(e.target.value);
                                            }}
                                            input={<BootstrapInput />}
                                        >
                                            {dropdown.map((val) => (
                                                <option aria-label="None" value="" >
                                                    {val.text}
                                                </option>
                                            ))}
                                        </NativeSelect>
                                    </Paper>
                                            </div>*/}

                                {/*<div className="col align-self-end">
                                    <Button
                                        className={classes.Searchbuilding2}
                                        variant="contained" color="primary" disableElevation
                                        style={{ backgroundColor: '#485D84' }}>
                                        Search</Button>
                                            </div>*/}
                            </div>
                        </div>

                        <div>

                            <div>
                                {/* {bill.map((rows) => {
                                    return ( */}
                                <div className="container ">
                                    <h5 className={classes.headBuilding} id="newannouncetitle"> {bill.length > 0 && bill[0].buildingName} </h5>
                                    {bill.length > 0 && bill[0].floors.map((item, index) => {
                                        return (
                                            <Paper className={classes.papercard} style={{ border: "1px solid #AAAAAA" }}>
                                                <h4 className={classes.headfloors}>Floor {item.floorName}</h4>
                                                <Table>

                                                    <TableBody className={classes.headfloor}>
                                                        <TableRow >
                                                            <TableCell className={classes.tablefont} align="center">Room</TableCell>
                                                            <TableCell className={classes.tablefont} align="center" style={{ position: 'relative' }}>

                                                                <div style={{ position: 'absolute', left: -34.5, top: 16, width: 380 }}>
                                                                    Billed Period
                                                                </div>
                                                            </TableCell>

                                                            <TableCell className={classes.tablefont} align="center">Occupant</TableCell>
                                                            <TableCell className={classes.tablefont} align="center">Total</TableCell>
                                                            <TableCell className={classes.tablefont} align="center">Status</TableCell>
                                                            <TableCell className={classes.tablefont} align="center">Details</TableCell>
                                                        </TableRow>

                                                        {item.rooms.filter(val => {
                                                            if (search == '') {
                                                                return val;
                                                            } else if (
                                                                val.roomNumber.toLowerCase().includes(search.toLowerCase())
                                                            ) {
                                                                return val
                                                            }
                                                        }).map((sub, index) => {
                                                            return (
                                                                <TableRow >
                                                                    <TableCell className={classes.intablefont} align="center">{sub.roomNumber}</TableCell>
                                                                    <TableCell className={classes.intablefont} style={{ position: 'relative' }} align="center">
                                                                        <div >
                                                                            {sub.expenses.length > 0 ?
                                                                                moment(sub.expenses[0].startTime).format("DD/MM/YYYY") + "-" + moment(sub.expenses[0].endtime).format("DD/MM/YYYY")

                                                                                : "-"}

                                                                            {/* {moment(sub.expenses[0].startTime).format("DD/MM/YYYY")}-{moment(sub.expenses[0].endTime).format("DD/MM/YYYY")} */}

                                                                        </div>


                                                                    </TableCell>
                                                                    <TableCell className={classes.intablefont} align="center">
                                                                        {sub.expenses.length > 0 ?
                                                                            sub.occupant
                                                                            : "-"}
                                                                        {/* {sub.occupant} */}
                                                                    </TableCell>
                                                                    <TableCell className={classes.intablefont} style={{ position: 'relative' }} align="center">

                                                                        <div style={{ position: 'absolute', top: 20, right: 50 }}>
                                                                            {sub.expenses.length > 0 ?
                                                                                <NumberFormat
                                                                                    value={sub.expenses[0].totalPrice.toFixed(2)}

                                                                                    thousandSeparator={true}
                                                                                    displayType="text"

                                                                                />
                                                                                : "-"}


                                                                        </div>

                                                                        {/* {sub.expenses[0].totalPrice} */}

                                                                    </TableCell>
                                                                    <TableCell className={classes.intablefont} align="center">

                                                                        {sub.expenses.length > 0 ?
                                                                            sub.statusInfo
                                                                            : "-"}
                                                                    </TableCell>
                                                                    <TableCell className={classes.intablefont} align="center">
                                                                        {sub.expenses.length > 0 ?
                                                                            <NumberFormat
                                                                                value={sub.expenses[0].totalPrice.toFixed(2)}

                                                                                thousandSeparator={true}
                                                                                displayType="text"

                                                                            />
                                                                            : "-"}

                                                                        {/* <Link to={`/billdetails/${sub.roomId}`}>
                                                                            <InfoOutlinedIcon style={{ color: "#485D84" }} />
                                                                        </Link>*/}
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        })}


                                                        {/* <div style={{ position: 'absolute', paddingTop: '6px', width: '100%' }}>
                                                                <div className={classes.floortext} style={{ marginRight: 72 }}>
                                                                    Room
                                                                    <div className={classes.minitext} style={{ paddingLeft: '1px' }}>  </div>
                                                                </div>
                                                                <div className={classes.floortext} style={{ marginRight: 92 }}>
                                                                    Bill period
                                                                    <div className={classes.minitext} style={{ paddingLeft: '1px' }}>  </div>
                                                                </div>
                                                                <div className={classes.floortext} style={{ paddingLeft: '32px' }}>
                                                                    Rent
                                                                    <div className={classes.minitext} style={{ paddingLeft: '292px' }}>(THB) </div>
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Electricity
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Water
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Others
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Total
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Status
                                                                </div>
                                                                <div className={classes.floortext}>
                                                                    Detail
                                                                    <div className={classes.minitext} style={{ paddingLeft: '3px' }}> </div>
                                                                </div>
                                                            </div> */}
                                                    </TableBody>

                                                </Table>
                                                <div style={{ marginTop: "50px" }} />
                                                {/* {f.rooms.filter(val => {
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
                                                                   
                                                                    <div style={{ width: '1163px', postition: 'relative', borderBottom: '1px solid #AAAAAA' }} >
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', left: 45, top: 18 }}>
                                                                            {n.roomNumber}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', left: 155, top: 18 }}>
                                                                          
                                                                            {moment(n.expenses[0].startTime).format("DD/MM/YYYY")}-{moment(n.expenses[0].endtime).format("DD/MM/YYYY")}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 791, top: 18 }}>
                                                                            <NumberFormat
                                                                                // value={x.rent.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} />
                                                                            {n.expenses[0].rent}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 650, top: 18 }}>
                                                                            <NumberFormat
                                                                                // value={x.electricity.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} />
                                                                            {n.expenses[0].electricity}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 532, top: 18 }}>
                                                                            <NumberFormat
                                                                                // value={x.waterPrice.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} />
                                                                            {n.expenses[0].waterPrice}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 408, top: 18 }}>
                                                                            <NumberFormat
                                                                                // value={x.other.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} />
                                                                            {n.expenses[0].other}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 295, top: 18 }}>
                                                                            <NumberFormat
                                                                                // value={x.totalPrice.toFixed(2)}
                                                                                displayType="text"
                                                                                thousandSeparator={true}
                                                                                decimalScale={2} />
                                                                            {n.statusInfo}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 174, top: 18 }}>
                                                                            {n.statusInfo}
                                                                        </div>
                                                                        <div style={{ position: 'absolute', fontSize: '13px', color: '#4A4A4A', right: 60, top: 16 }}>
                                                                            <Link to={`/billdetails/${n.roomId}`}>
                                                                                <InfoOutlinedIcon style={{ color: "#485D84" }} />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                   
                                                                </div>
                                                            )
                                                        })} */}

                                            </Paper>
                                        )
                                    })}
                                </div>
                                {/* )
                                })} */}
                            </div>
                        </div>
                    </div>


                </div>

            </ScrollView>
            {/* <div style={{ position: 'absolute', width: '100%', height: 200, top: 620 }}>
                <Button style={{ backgroundColor: "#485D84", width: 406, height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1, position: 'absolute', left: 540, top: 40 }}
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
            </div> */}
        </div>
    )
}