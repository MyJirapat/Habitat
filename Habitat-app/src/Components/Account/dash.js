// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import { ScrollView } from 'react-native';
// import Datetoday from '../../Components/AllComponent/Datetoday';
// import { Paper } from '@material-ui/core';
// import { red } from 'chalk';
// import { Row } from 'react-bootstrap';

// const useStyles = makeStyles((theme) => ({
//     frame: {
//         width: '1163px',
//         height: '115px',
//         backgroundColor: 'red',
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
//     mainfame: {
//         width: '1163px',
//         height: '567px',
//         backgroundColor: 'blue',
//         position: 'relative'
//     },
//     miniXfame: {
//         width: '352px',
//         height: '147px',
//         backgroundColor: '#ffffff',
//         position: 'relative',
//         backgroundColor: '#ffffff'
//     },
//     Xfame: {
//         width: '731px',
//         height: '395px'
//     }
//     ,
//     Yfame: {
//         width: "407px",
//         height: "567px",
//         position: "absolute",
//         backgroundColor: "#ffffff",
//         right: 0
//     },
//     textDash: {
//         fontSize: 19,
//         color: "#4A4A4A",
//         fontWeight: 'bold'
//     },
//     textRoom: {
//         fontSize: 26,
//         color: "#4A4A4A",
//         fontWeight: 'bold'
//     },
//     normaltext: {
//         fontSize: 16,
//         color: "#4A4A4A",
//     },
//     circleborder: {
//         width: 18,
//         height: 18,
//         borderRadius: '9px',
//         marginRight: 20,
//         marginLeft: 40
//     }


// }));

// export default function Dashpage({ isOpened }) {
//     const classes = useStyles();



//     return (
//         <div style={{ width: '100%' }}>
//             <ScrollView>
//                 <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
//                     <div>
//                         <div className={classes.frame}>
//                             <Datetoday />
//                             <div className={classes.textDash}>
//                                 Dashboard
//                             </div>
//                         </div>
//                         <div className={classes.mainfame}>
//                             <Paper className={classes.Yfame}>
//                                 <div style={{ height: 283.5, width: "100%" }}>

//                                 </div>
//                                 <div style={{ height: 283.5, width: "100%", backgroundColor: 'red' }}>

//                                     <div style={{ position: 'absolute', marginTop: 130, width: '100%'}}>
//                                         <div className={classes.textDash} style={{position:'absolute', top: -100, left: 120}}>
//                                             Overall of Revenue
//                                             </div>
//                                         <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
//                                             <div className={classes.circleborder} style={{ backgroundColor: "#3BC045" }} />
//                                             <div className={classes.normaltext} >Rent</div>
//                                             <div className={classes.normaltext} >20,000.00</div>
//                                             <div className={classes.normaltext} >THB</div>



//                                         </div>
//                                         <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
//                                             <div className={classes.circleborder} style={{ backgroundColor: "#5256C1" }} />
//                                             <div className={classes.normaltext}>Electricity</div>
//                                             <div className={classes.normaltext} >20,000.00</div>
//                                             <div className={classes.normaltext} >THB</div>
//                                         </div>
//                                         <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
//                                             <div className={classes.circleborder} style={{ backgroundColor: "#FFD800" }} />

//                                             <div className={classes.normaltext}>Water</div>
//                                             <div className={classes.normaltext} >20,000.00</div>
//                                             <div className={classes.normaltext} >THB</div>
//                                         </div>
//                                         <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
//                                             <div className={classes.circleborder} style={{ backgroundColor: "#C03B3B" }} />

//                                             <div className={classes.normaltext}>Others</div>
//                                             <div className={classes.normaltext} >20,000.00</div>
//                                             <div className={classes.normaltext} >THB</div>
//                                         </div>
//                                     </div>

//                                 </div>

//                             </Paper>

//                             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                                 <Paper className={classes.miniXfame}>
//                                     <div className={classes.textRoom} style={{ paddingLeft: 20, paddingTop: 20 }}>
//                                         20 Rooms
//                                     </div>
//                                     <div className={classes.normaltext} style={{ paddingLeft: 20, paddingTop: 20 }}>
//                                         New occupied room in April
//                                     </div>
//                                 </Paper>

//                                 <div style={{ width: 26 }} />
//                                 <Paper className={classes.miniXfame}>
//                                     <div className={classes.textRoom} style={{ paddingLeft: 20, paddingTop: 20 }}>
//                                         60 Rooms
//                                     </div>
//                                     <div className={classes.normaltext} style={{ paddingLeft: 20, paddingTop: 20 }}>
//                                         Vacant Room
//                                     </div>
//                                 </Paper>

//                             </div>
//                             <Paper className={classes.Xfame} style={{ marginTop: 25 }}>

//                             </Paper>

//                         </div>
//                     </div>
//                 </div>
//             </ScrollView>

//         </div>


//     )
// }