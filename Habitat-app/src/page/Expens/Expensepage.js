// // import React from 'react'
// // import Floorcard from './Expencompo/Floorcard'
// // import { makeStyles } from '@material-ui/core/styles';
// // import Datetoday from '../../Components/AllComponent/Datetoday.js'
// // import { ScrollView } from 'react-native';
// // import { useState } from 'react';
// // import Navbar2 from '../../Components/AllComponent/Navbar2';

// // const useStyles = makeStyles((theme) => ({
// //     frame: {
// //         width: '1163px',
// //         height: '232px',
// //         backgroundColor: 'red',
// //     },
// //     scrollspace: {
// //         height: "730px",
// //         width: '1163px',
// //         margin: 'auto',
// //         paddingLeft: 110,
// //         transition: 'all 0.5s ease'
// //     },
// //     scrollspace36: {
// //         height: "730px",
// //         width: '1163px',
// //         margin: 'auto',
// //         paddingLeft: 36,
// //         transition: 'all 0.5s ease'

// //     },
// //     footerbtn: {

// //     }
// // }));

// // export default function Expensepage({ isOpened }) {
// //     const classes = useStyles();



// //     return (
// //         <div style={{width: '100%'}}>
// //             <ScrollView>
// //                 <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
// //                     <div>
// //                         <div className={classes.frame}>
// //                             <Datetoday />
// //                         </div>
// //                         <div>
// //                             <Floorcard />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </ScrollView>
// //             {/* <div style={{width: '100%', backgroundColor: 'red', height: '108px'}}>
// //                 Hivgbhjkhfjjkfkjf
// //             </div> */}
// //         </div>


// //     )
// // }



// import { ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Card from '@material-ui/core/Card';
// import Tab from 'react-bootstrap/Tab'
// import Nav from 'react-bootstrap/Nav'
// import axios from "axios";
// import moment from 'moment';

// import { Button } from '@material-ui/core';

// const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // display: 'flex',
//     // marginTop: '-6%'
//   },

//   Cards: {
//     minWidth: '1163px',
//     maxWidth: '1163px',
//     // padding: theme.spacing(2),
//     // marginTop: "-7%",
//     // margin: 'auto',
//     // height: "120%"
//   },

//   heder: {
//     // width: '90%',
//     // padding: theme.spacing(2),
//     // margin: '1%',

//   },

//   container: {
//     // maxHeight: 440,
//     // width: '100%'
//   },

//   Gridmove: {
//     // marginLeft: 80
//   },

//   toolbar: {
//     // display: 'flex',
//     // alignItems: 'center',
//     // justifyContent: 'flex-end',
//     // padding: theme.spacing(0, 15),
//     // necessary for content to be below app bar
//     // ...theme.mixins.toolbar,
//   },
//   // content: {
//   //   flexGrow: 1,
//   //   padding: theme.spacing(1),

//   // },

//   Searchstyle: {
//     backgroundColor: "#fff",
//     borderRadius: '8px',
//     width: 200,
//     marginBottom: 40,
//     marginTop: -24,
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },

//   // Field: {
//   //   marginTop: "2%"
//   // },

//   // Heading: {
//   //   marginTop: "3%"
//   // },

//   // Btn: {
//   //   marginLeft: "60%",
//   //   marginTop: "-8%"

//   // },

//   fabButton: {
//     width: "60%",
//     //left: 120,
//     top: 40,
//     right: 50,
//     margin: '0 auto',
//   },

//   Tabmove: {
//     marginLeft: "1%"
//   },

//   Spacing: {
//     // margin: '1%'
//   },

//   scrollspace: {
//     height: "730px",
//     minWidth: '1163px',
//     maxWidth: '1163px',
//     margin: 'auto',
//     paddingLeft: 110,
//     transition: 'all 0.5s ease'
//   },
//   scrollspace36: {
//     height: "730px",
//     minWidth: '1163px',
//     maxWidth: '1163px',

//     margin: 'auto',
//     paddingLeft: 36,
//     transition: 'all 0.5s ease'

//   },
//   segmentbtnBlue: {
//     width: 161.8,
//     height: 31.5,
//     backgroundColor: "#8396B9",
//     color: "#FFFFFF",
//     textTransform: "none",
//     borderRadius: 5,
//     fontSize: 16.18,
//     fontWeight: 'bold',
//     position: 'relative'
//   },
//   segmentbtnWhite: {
//     width: 161.8,
//     height: 31.5,
//     backgroundColor: "#FFFFFF",
//     color: "#4A4A4A",
//     textTransform: "none",
//     borderRadius: 5,
//     fontSize: 16.18,
//     position: 'relative'
//   },
//   segwrap: {
//     // border: '1px solid #AAAAAA'
//     flex: 'wrap'
//     , display: 'flex'
//     , width: 'fit-content',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 5

//   },

//   makeCenterBlue: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     top: 3,
//     color: '#FFFFFF'


//   },


//   makeCenterWhite: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     top: 3,
//     color: '#4A4A4A'
//   },
//   title2: {
//     fontSize: '19.4px',
//     color: '#4A4A4A',
//     fontWeight: 'bold',
//     position: 'absolute',
//     top: 60

//   }

//   , title2bl: {
//     fontSize: '19.4px',
//     color: '#4A4A4A',
//     fontWeight: 'bold',
//     position: 'absolute',
//     top: 184
//   },



//      //floor

//      root: {
//       flexGrow: 1,
//       margin: theme.spacing(1),
//       marginRight: 40

//   },
//   papercard: {
//       width: '1163px',
//       boxShadow: "0px 0px 0px #E8E8E8",
//       minHeight: '233px',
//       //   margin: 'auto',
//       marginLeft: 0,
//       marginBottom: "16px",
//       //   backgroundColor:'green',
//       position: 'relative',
//       borderRadius: 5,
//       border: '0.75px solid #AAAAAA'

//   },
//   floortext: {
//       display: 'inline',
//       marginRight: '113px',
//       color: '#4A4A4A',
//       fontSize: '13px',
//       fontWeight: 'bold',
//       position: 'relative',

//   },
//   headfloor: {
//       // display: 'block',
//       color: '#4A4A4A',
//       fontWeight: 'bold',
//       fontSize: '16px',
//       posiotion: 'absolute',
//       marginLeft: '45px',
//       paddingTop: '14px'
//   },
//   minitext: {
//       fontSize: '11.3px',
//       color: '#AAAAAA',
//       position: 'absolute',
//       fontWeight: '300',
//       marginLeft: '643.5px',
//       top: 0,
//       marginTop: '25px'
//   },

// }));

// export default function Expensepage({ isOpened }) {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const [currenDate, setCurrentDate] = useState("")
//   const [previousDate, setPreviousDate] = useState("2021-07-08")
//   const [elecPrevious, setElecPrevious] = useState("")
//   const [elecCurrent, setElecCurrent] = useState()
//   const [elecUsage, setElecUsage] = useState("")
//   const [waterPrevious, setWaterPrevious] = useState("")
//   const [waterCurrent, setWaterCurrent] = useState("")
//   const [waterUsage, setWaterUsage] = useState("")
//   const [startbill, setStartbill] = useState("")
//   const [endbill, setEndbill] = useState("")
//   const [roomId, setRoomId] = useState([])
//   const [expense, setExpense] = useState([])

//   /*function handlerChangeJSOn() {
//     xpense[0].buildingName = "Laila"
//     console.log(xpense)
//   }*/

//   /* function handlerChangeJSOn() {
//      xpense[0].buildingName = "Laila"
//      setXpense(xpense[0].floors[0].rooms)
//    }*/

//   function handlerChangeJSOn() {
//     /*xpense[0].buildingName = "Laila*/
//     let rooms = []

//     setKeepstate(xpense[0].floors[0].rooms)
//     console.log(keepstate)

//     for (const i in keepstate) {
//       console.log(i)
//       console.log("hi")
//     }
//   }


//   const [keepstate, setKeepstate] = useState([])
//   const [allroom, setAllroom] = useState()

//   const Expensesave = event => {
//     event.preventDefault();
//     const expenseLists = [];

//     for (let floor in xpense[0].floors) {
//       for (let room in xpense[0].floors[floor].rooms) {
//         console.log(room)
//         console.log('fkdsakjadshgdsahgjadsjhg')
//         var a = xpense[0].floors[floor].rooms[room];
//         // a.CurrentDate = new Date().toISOString().substring(0, 10);
//         //a.CurrentDate = new Date().toISOString()
//         expenseLists.push(xpense[0].floors[floor].rooms[room]);
//       }
//       // console.log(i)
//       // console.log("hi")
//     }

//     console.log('aaaa', expenseLists.length)
//     console.log(expenseLists);


//     setKeepstate(expenseLists);
//     //console.log(keepstate)
//     //console.log(JSON.stringify(keepstate))
//     axios.post("/rentingtransaction/electricity-water-expenses",
//       //allroom
//       keepstate


//     ).then((response) => {
//       console.log('done')
//       console.log(response);
//       console.log(keepstate)
//     })
//       .catch(error => {
//         console.log(error.response)
//       })

//   };

//   //get
//   const [xpense, setXpense] = useState([])
//   const [isTrue, setIsTrue] = useState(false)

//   React.useEffect(() => {
//     const fetchData = () => {
//       axios.get('/rentingtransaction/electricity-water-expenses/4')
//         .then(r => {
//           setXpense(r.data)
//         })
//     };
//     fetchData()
//   }, [])
//   console.log(xpense)

//   console.log(xpense)

//   return (
//     // <div className="container">
//     <div style={{ width: '100%' }}>
//       <ScrollView>
//         <div className={isOpened ? classes.scrollspace36 : classes.scrollspace} >
//           {/* <div style={{width: 1163, position: 'relative', margin:"auto"}}> */}

//           <Tab.Container defaultActiveKey="home">
//             <div >
//               {/* <main > */}
//               {/* <div className={classes.toolbar} /> */}
//               <div class="container d-flex-end">
//                 <div class="container d-flex-start" >
//                   <h4 className={classes.title2}>Expense</h4>
//                 </div>
//                 <Table>
//                   <Nav variant="pills" className={classes.segwrap}>
//                     <Nav.Item
//                     // className={isTrue ? classes.segmentbtnBlue : classes.segmentbtnWhite}
//                     >
//                       <Nav.Link
//                         className={isTrue ? classes.segmentbtnBlue : classes.segmentbtnWhite} style={isTrue ? { backgroundColor: '#8396B9' } : { backgroundColor: '#FFFFFF' }}
//                         onClick={() => setIsTrue(true)} eventKey="home">

//                         <div className={isTrue ? classes.makeCenterBlue : classes.makeCenterWhite}>
//                           Electricity
//                         </div>


//                       </Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item
//                     // className={true ? classes.segmentbtnWhite : classes.segmentbtnWhite}
//                     >
//                       <Nav.Link
//                         className={isTrue ? classes.segmentbtnWhite : classes.segmentbtnWhite} style={isTrue ? { backgroundColor: '#FFFFFF' } : { backgroundColor: '#8396B9' }}
//                         onClick={() => setIsTrue(false)} eventKey="link-1">


//                         <div className={isTrue ? classes.makeCenterWhite : classes.makeCenterBlue} >
//                           Water
//                         </div>

//                       </Nav.Link>
//                     </Nav.Item>
//                   </Nav>

//                   <TableBody>
//                     <br />

//                     <Tab.Content>
//                       <Tab.Pane eventKey="home">

//                         <input
//                           type="date" />

//                         <div className="App">
//                           <Table aria-label="caption table">
//                             {xpense.map((build) => {
//                               return (
//                                 <TableBody style={{ width: 2500 }}>
//                                   {/* <div className="container "> */}

//                                   {/*<button onClick={()=> xpense}> Test </button>*/}
//                                   <h4 className={classes.Tabmove}>{build.buildingName}</h4>
//                                   {build.floors.map((f) => {
//                                     return (
//                                       <Card style={{
//                                         minWidth: '1163px',
//                                         maxWidth: '1163px',
//                                       }} variant="outlined">
//                                         <Table style={{ width: '100%' }}>
//                                           {/* <TableHead >
//                                             <h5 className={classes.heder}>Floor{f.floorName}</h5>
//                                             <TableRow > */}
//                                             <div className={classes.headfloor} >
//                                                 Floor 
//                                                 <div style={{ position: 'absolute', paddingTop: '6px' }}>

//                                                     <text className={classes.floortext}>
//                                                         Room
//                                                     </text>
//                                                     <text className={classes.floortext} style={{ marginRight: '163px' }}>
//                                                         Bill Period
//                                                     </text>
//                                                     <text className={classes.floortext}>
//                                                         Previos Date
//                                                     </text>
//                                                     <text className={classes.floortext}>
//                                                         Previous Reading
//                                                     </text>
//                                                     <text className={classes.floortext}>
//                                                         Current Reading
//                                                     </text>
//                                                     <text className={classes.floortext}>
//                                                         Usage
//                                                     </text>

//                                                 </div>
//                                             </div>
//                                             {/* </TableRow>
//                                           </TableHead> */}
//                                           {f.rooms.map((r) => {
//                                             return (
//                                               <TableBody>
//                                                 <TableRow>
//                                                   {/*<TableCell align="left">{r.roomId}</TableCell> */}
//                                                   <TableCell align="left">{r.roomName}</TableCell>
//                                                   <TableCell align="left">
//                                                     { //moment /*(r.billPeriod).format("L")*/
//                                                       r.billPeriod
//                                                     }
//                                                   </TableCell>
//                                                   <TableCell align="left"
//                                                   /*onChange={(event) =>{
//                                                         setPreviousDate(event.target.value);
//                                                         }}*/
//                                                   >
//                                                     {moment(r.previousDate).format("L")}
//                                                   </TableCell>

//                                                   <TableCell align="left">
//                                                     {r.electricityPreviousReading}
//                                                   </TableCell>

//                                                   <TableCell align="left">
//                                                     <input
//                                                       id={r.roomId}
//                                                       size="small"
//                                                       type="text"
//                                                       onChange={(event) => {

//                                                         /*let newXpense = xpense
//                                                         const objIndex = newXpense.findIndex((obj=> obj.roomId ==event.target.id))*/
//                                                         //newXpense[objIndex]= event.target.value 
//                                                         //setXpense(newXpense); 
//                                                         r.electricityCurrentReading = event.target.value
//                                                         //setElecCurrent(event.target.value); 

//                                                       }}
//                                                     />
//                                                   </TableCell>

//                                                   <TableCell align="left">

//                                                   </TableCell>

//                                                 </TableRow>
//                                               </TableBody>
//                                             )
//                                           })}
//                                         </Table>
//                                       </Card>
//                                     )
//                                   })}
//                                   {/* </div> */}
//                                 </TableBody>
//                               )
//                             })}
//                           </Table>
//                           {/*<Button  
//         style={{position:'absolute'}}
//             type="submit"   
//             id="1"          
//             onClick={Expensesave}>
//           <Savebtn save="save"/> 
//         </Button> */}
//                         </div>
//                       </Tab.Pane>
//                     </Tab.Content>


//                     <Tab.Content>
//                       <Tab.Pane eventKey="link-1">
//                         <div className="App">
//                           <Table aria-label="caption table">
//                             {xpense.map((build) => {
//                               return (
//                                 <TableBody>
//                                   <div className="container ">
//                                     {/* <button onClick={()=>handlerChangeJSOn()}> BTN  </button>*/}

//                                     <h4 className={classes.Tabmove}>{build.buildingName}</h4>
//                                     {build.floors.map((f) => {
//                                       return (
//                                         <Card className={classes.Spacing} variant="outlined">
//                                           <Table aria-label="caption table">
//                                             <TableHead >
//                                               <h5 className={classes.heder}>Floor {f.floorName}</h5>
//                                               <TableRow>
//                                                 <TableCell>Room</TableCell>
//                                                 <TableCell>Bill Period</TableCell>
//                                                 <TableCell>Previous Date</TableCell>
//                                                 <TableCell>Previous Reaading</TableCell>
//                                                 <TableCell>Current Reading</TableCell>
//                                                 <TableCell >Usage</TableCell>
//                                               </TableRow>
//                                             </TableHead>
//                                             {f.rooms.map((r) => {
//                                               return (
//                                                 <TableBody>
//                                                   <TableRow>
//                                                     <TableCell align="left">{r.roomName}</TableCell>
//                                                     <TableCell align="left">{r.billPeriod}</TableCell>
//                                                     <TableCell align="left">{r.previousDate}</TableCell>
//                                                     <TableCell align="left">

//                                                     </TableCell>

//                                                     <TableCell>
//                                                       <input
//                                                         id={r.roomId}
//                                                         size="small"
//                                                         type="text"
//                                                         onChange={(event) => {


//                                                           /*let newXpense = xpense
//                                                           const objIndex = newXpense.findIndex((obj=> obj.roomId ==event.target.id))*/
//                                                           //newXpense[objIndex]= event.target.value 
//                                                           //setXpense(newXpense); 
//                                                           r['WaterCurrentReading'] = event.target.value
//                                                           //setElecCurrent(event.target.value); 

//                                                         }}

//                                                       />
//                                                     </TableCell>
//                                                     <TableCell align="left">

//                                                     </TableCell>
//                                                   </TableRow>

//                                                 </TableBody>
//                                               )
//                                             })}
//                                           </Table>
//                                         </Card>
//                                       )
//                                     })}
//                                   </div>
//                                 </TableBody>
//                               )
//                             })}
//                           </Table>
//                           {/*<Savebtn  
//                           type="submit"  
//                           id="2"      
//                            onClick={Expensesave} 
//                               save="save"
//        /> */}

//                         </div>
//                         { /*Water*/}
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </TableBody>
//                 </Table>
//               </div>
//               {/* </main> */}

//             </div>

//           </Tab.Container>
//         </div>
//       </ScrollView>
//       <div style={{ position: 'absolute', width: '100%', height: 200, top: 620 }}>
//         <Button
//           type="submit"
//           id="1"
//           onClick={Expensesave}
//           style={{ backgroundColor: "#485D84", width: 406, height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1, position: 'absolute', left: 540, top: 40 }}>
//           SAVE
//         </Button>
//         <div style={{
//           backgroundColor: '#385CA8', opacity: 0.5
//           , width: "100%", height: 200, position: 'relative'
//         }}>

//         </div>
//       </div>
//     </div>


//     // </div>
//   );
// }
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Divider, Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import DropBuilding from '../../Components/Dropdown/DropBuilding.js';
import { useParams } from 'react-router';



const useStyles = makeStyles((theme) => ({
  frame: {
    width: '1163px',
    height: '273px',
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
    minHeight: '180px',
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
    marginRight: '163px',
    color: '#4A4A4A',
    fontSize: '13px',
    fontWeight: 'bold',
    position: 'relative',

  },

  floortext2: {
    display: 'inline',
    marginLeft: '-7px',
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
    top: 230
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
  const [allRoom, setAllRoom] = useState([])
  const [myDate, setDate] = useState()
  const { id } = useParams()

  useEffect(async () => {
    console.log("in Use Eff first row")

    await axios(`/rentingtransaction/electricity-water-expenses/${id}`)
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
    for (var i = 0; i < data.floors.length; i++) {

      for (var j = 0; j < data.floors[i].rooms.length; j++) {
        allTransaction.push(data.floors[i].rooms[j].userRentingTransaction)
      }

    }
    setRentTrans(data.floors[0].rooms[0].rentingTransactionId)
    console.log(rentTrans + "This is rent trans")
    console.log(allTransaction)
  }



  const sureVeuify = async () => {

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
      // window.location.href = `/feetype_sp/${id}`;
    })
      .catch(error => {
        alert("post fail")
        console.log('Error getting fake data: ' + error);
      })

  }

  function getAllRoom() {
    setAllRoom([])

    for (var i = 0; i < allData[0].floors.length; i++) {
      for (var j = 0; j < allData[0].floors[i].rooms.length; j++) {
        allRoom.push(allData[0].floors[i].rooms[j])
      }
    }

    // postExpense()
    // if isInitial == 
    // editExpense()
    console.log(allRoom)

  }

  const postExpense = async () => {

    let res = await axios({
      url: `/rentingtransaction/electricity-water-expenses`,
      method: 'post',
      data: allRoom

    }).then(response => {
      alert("post success")
      // window.location.href = `/feetype_sp/${id}`;

    })
      .catch(error => {
        alert("post fail")
        console.log('Error getting fake data: ' + error);
      })

  }

  const editExpense = async () => {

    console.log(allRoom)

    let res = await axios({
      // url: `/rentingtransaction/edit-current-reading`,
      url: `/initializeexpenses/edit-initialize-expenses`,

      method: 'post',
      data: allRoom

    }).then(response => {
      alert("post success")
      // verify/:id
      // window.location.href = `/feetype_sp/${id}`;
      window.location.href = `/verify/${id}`;

    })
      .catch(error => {
        alert("post fail")
        console.log('Error getting fake data: ' + error);
      })

  }

  const [keepstate, setKeepstate] = useState([])

  const Expensesave = event => {
    event.preventDefault();
    const expenseLists = [];
    console.log("im in expensesave")

    for (let floor in allData[0].floors) {
      for (let room in allData[0].floors[floor].rooms) {
        console.log(room)
        console.log('fkdsakjadshgdsahgjadsjhg')
        var a = allData[0].floors[floor].rooms[room];
        // a.CurrentDate = new Date().toISOString().substring(0, 10);
        //a.CurrentDate = new Date().toISOString()
        allData[0].floors[floor].rooms[room].currentDate = getUpdate
        expenseLists.push(allData[0].floors[floor].rooms[room]);
      }

      // console.log(i)
      // console.log("hi")
    }

    console.log('aaaa', expenseLists.length)
    console.log(expenseLists);

    const b = [
      expenseLists
    ]

    setKeepstate(expenseLists);
    //console.log(keepstate)
    //console.log(JSON.stringify(keepstate))

    if (allData[0].floors[0].rooms[0].isInitial == true) {
      console.log("on edit")
      axios.post("/initializeexpenses/edit-initialize-expenses",
        //allroom
        // keepstate

        expenseLists

        // expenseLists
      ).then((response) => {
        console.log('done')
        console.log(response);
        console.log(keepstate)
        window.location.href = `/verify/${id}`;
        alert("Success")

      })
        .catch(error => {
          console.log(error.response)
          alert("fail Edit")
        })

    } else {
      console.log("on create")

      axios.post("/rentingtransaction/electricity-water-expenses",
        //allroom
        // keepstate

        expenseLists

        // expenseLists
      ).then((response) => {
        console.log('done')
        console.log(response);
        console.log(keepstate)
        window.location.href = `/verify/${id}`;
        alert("Success Create")

      })
        .catch(error => {
          console.log(error.response)
          alert("fail Create ")
        })

    }


  };
  const [getUpdate, setupDate] = useState()
  const [elec, setElec] = useState("")
  const [water, setWater] = useState("")


  // https://habitat1.azurewebsites.net/api/v1/rentingtransaction/electricity-water-expenses/4

  return (
    <div style={{ width: '100%' }}>
      <ScrollView>
        <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
          <div>
            <div className={classes.frame} style={{ position: 'relative' }}>
              <Datetoday />
              {/* <Button onClick={() => editExpense()} style={{ position: 'absolute', width: '100%', height: 200, top: 100, backgroundColor: 'red' }}>
              </Button> */}


              <div className={classes.title2} >
                Expenses
              </div>


              {/* <div style={{fontSize: '16px', color: '#4A4A4A', position: 'absolute'}}>
                Expenses
              </div> */}
              <div style={{ position: 'absolute', top: 150, height: 59, display: 'flex', width: '100%' }}>
                <div>
                  <div style={{ fontSize: '16px', color: '#4A4A4A' }}>
                    Current Date
                  </div>

                  {/* <br /> */}
                  {/* <div style={{ height: 14.56 }}>
                </div> */}
                  <input style={{ fontSize: '16px', color: '#4A4A4A', width: 161.8, height: 31.5, position: 'absolute', top: 35 }}

                    type="date"

                    onChange={e => { setupDate(e.target.value) }}
                  />
                </div>


                {/*<div style={{ position: 'absolute', right: 175 }}>
                  <div style={{ fontSize: '16px', color: '#4A4A4A' }}>
                    Building
                  </div>
                  <div style={{ height: 11 }} />

                  <DropBuilding />
                </div>


                <div style={{ position: 'absolute', right: 0 }}>
                  <div style={{ fontSize: '16px', color: '#4A4A4A' }}>
                    Floor
                  </div>
                  <div style={{ height: 11 }} />

                  <DropBuilding />
              </div>*/}



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
                {allData.length > 0 ? allData[0].buildingName : ""}
              </div>
            </div>

            <div>
              <div>
                {allData.length > 0 && allData[0].floors.map((floor, index) => {
                  return (
                    <Paper className={classes.papercard}>
                      <div className={classes.headfloor} >
                        <div style={{ marginLeft: 19 }}>
                          Floor {floor.floorName}
                        </div>

                        <div style={{ position: 'absolute', paddingTop: '6px' }}>

                          <text className={classes.floortext} style={{ marginLeft: 20 }}>
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

                          <text className={classes.floortext2}>
                            Current Reading
                          </text>
                          {/* <text className={classes.floortext}>
                            Usage
                          </text> */}
                        </div>
                      </div>

                      <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px", height: 0.5 }} />
                      {floor.rooms.map((room, i) => {
                        return (
                          <Paper className={classes.paperrow}>
                            <div className={classes.newdetext} style={{ left: 65 }}>
                              {/* {props.roomid} */}
                              {room.roomName}
                            </div>
                            <div className={classes.newdetext} style={{ left: 266 }}>
                              {/* 27/03/21-27/03/21 */}

                              {room.isBedAvailable[0] == false ?
                                moment(room.startTime).format("DD/MM/YYYY") + "-" + moment(room.endTime).format("DD/MM/YYYY")
                                :
                                "-"
                              }



                            </div>
                            <div className={classes.newdetext} style={{ left: 492 }}>
                              {/* 27/04/2021 */}
                              {/* {room.previousDate} */}
                              {/* {moment(room.previousDate.replace(/[^a-zA-Z0-9]/g, "")).format("L")} */}
                              {room.isBedAvailable[0] == false ?
                                moment(room.previousDate).format("DD/MM/YYYY")
                                :
                                "-"
                              }

                            </div>
                            <div className={classes.newdetext} style={{ right: 320 }}>
                              {/* {currentSelect == 0 ? room.electricityPreviousReading : room.waterPreviousReading} */}

                              {room.isBedAvailable[0] == false ?
                                currentSelect == 0 ? room.electricityPreviousReading : room.waterPreviousReading
                                :
                                "-"
                              }



                            </div>

                            {room.isBedAvailable[0] == false ?
                              <div>

                                {currentSelect == 0 &&
                                  <input className={classes.inputbox} style={{ right: 58, border: '0.75px solid #AAAAAA', borderRadius: 4 }}
                                    value={room["electricityCurrentReading"]}
                                    maxlength="4"
                                    onChange={e => {
                                      room["electricityCurrentReading"] = e.target.value
                                      setElec(e.target.value)

                                    }}

                                  >

                                    {/* onChange={e => r.room_number = e.target.value} */}
                                    {/* {currentSelect == 0 ? room.electricityCurrentReading : room.waterCurrentReading} */}

                                  </input>}

                                {currentSelect == 1 &&
                                  <input className={classes.inputbox} style={{ right: 58, border: '0.75px solid #AAAAAA', borderRadius: 4 }}
                                    // onChange={e => room["waterCurrentReading"] = e.target.value}
                                    // value={room["waterCurrentReading"]}
                                    maxlength="4"
                                    value={room["waterCurrentReading"]}
                                    onChange={e => {
                                      room["waterCurrentReading"] = e.target.value
                                      setWater(e.target.value)
                                    }}

                                  >

                                    {/* onChange={e => r.room_number = e.target.value} */}
                                    {/* {currentSelect == 0 ? room.electricityCurrentReading : room.waterCurrentReading} */}

                                  </input>}

                              </div>
                              :
                              <div className={classes.newdetext} style={{ right: 100 }}
                                onClick={
                                  room["waterCurrentReading"] = room["waterPreviousReading"],
                                  room["electricityCurrentReading"] = room["electricityPreviousReading"]
                                }
                              >
                                -
                              </div>
                            }




                            {/* {currentSelect == 1 &&
                              <input className={classes.inputbox} style={{ right: 58, border: '0.75px solid #AAAAAA', borderRadius: 4 }}
                                onChange={e => room["waterCurrentReading"] = e.target.value}
                              >
                               
                              </input>
                            } */}



                            {/* <div className={classes.newdetext} style={{ right: 74 }}>
                              {currentSelect == 0 ? room.electricityUsage : room.waterUsage}
                            </div> */}

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
          <div style={{ height: 100 }}
          />
        </div >
      </ScrollView >

      <div style={{ position: 'absolute', width: '100%', height: 200, top: 605 }}>

        <Button
          onClick={Expensesave}
          // onClick={() =>
          //   // getAllRoom()
          //   Expensesave
          //   // console.log(allData)
          // }
          style={{
            backgroundColor: "#485D84", width: 406,
            height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1,
            position: 'absolute', left: 640, top: 20,
            textTransform: 'none'
          }}>
          Save
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