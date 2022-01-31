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

import React, { useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import Datetoday from '../../Components/AllComponent/Datetoday';
import { Paper } from '@material-ui/core';
import { red } from 'chalk';
//import { Row } from 'react-bootstrap';
import { BarChart, LineChart, Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import axios from "axios";
import NumberFormat from 'react-number-format';

import DropBuilding from '../../Components/Dropdown/DropBuilding';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch, useParams, useLocation } from 'react-router-dom';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '115px',
        //backgroundColor: 'red',
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
    mainfame: {
        width: '1163px',
        height: '567px',
        //backgroundColor: 'blue',
        position: 'relative'
    },
    miniXfame: {
        width: '352px',
        height: '147px',
        backgroundColor: '#ffffff',
        position: 'relative',
        backgroundColor: '#ffffff'
    },
    Xfame: {
        width: '731px',
        height: '395px'
    }
    ,
    Yfame: {
        width: "407px",
        height: "567px",
        position: "absolute",
        //backgroundColor: "#ffffff",
        right: 0
    },
    textDash: {
        fontSize: 19,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },

    textLindchart:{
        fontSize: 22, 
        color:"#4A4A4A",
        fontWeight: 'bold',
        position: "absolute",
        
    },


    textBar:{
        color:"#4A4A4A",
        fontWeight: 'bold',

    },

    Currency:{
        fontSize: 13, 
        color:"#4A4A4A",
        //fontWeight: 'bold',
        position: "absolute",
        
    },

    textRoom: {
        fontSize: 26,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },
    normaltext: {
        fontSize: 16,
        color: "#4A4A4A",
    },

    normaltextMonth: {
        fontSize: 14,
        color: "#4A4A4A",
    },
    circleborder: {
        width: 18,
        height: 18,
        borderRadius: '9px',
        marginRight: 20,
        marginLeft: 40
    },
    textDrop: {
        fontSize: 16,
        color: "#4A4A4A"

    },

}));

//const colors = scaleOrdinal(schemeCategory10)
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data = [
  {
    name: "Rent",
    suv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Elec",
    suv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Water",
    suv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Other",
    suv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    suv: 1890,
    pv: 4800,
    amt: 2181
  },
  
];

const Linedata = [
    { name: "Jan 21", uv: 0 },
    { name: "Feb 21", uv: 9000 },
    { name: "Mar 21", uv: 32000 },
    { name: "Apr 21", uv: 37000},
    { name: "May 21", uv: 11890 },
    { name: "Jun 21", uv: 40390 },
    { name: "Aug 21", uv: 50000 },
    { name: "Sep 21", uv: 62000 },
    { name: "Oct 21", uv: 70589 },
    { name: "Nov 21", uv: 81000},
    { name: "Dec 21", uv: 30490 },
    /*{ name: "Jan 22", uv: 0 },
    { name: "Feb 22", uv: 9000 },
    { name: "Mar 22", uv: 32000 },*/
    
  ];

export default function Dashpage({ isOpened }) {
    const classes = useStyles();
    const [currentBuilding, setCurrentBuilding] = useState("Demo")
    const [allFloor, setAllFloor] = useState(`/dropdown/floors/${currentBuilding}`)
    const [linedash, setLinedash] = useState([])
    const [bardash, setBardash] = useState([])
    const [vacants, setVacants] = useState([])
    const [overall, setOverall] = useState([])
    const [info, setInfo] = useState([])

    const {id} = useParams();

    const dateFormatter = date => {
        // return moment(date).unix();
        return moment(date).format('DD/MM/YY');
      };

    useEffect(()=>{
        axios.get(`/history/barchart/${id}`).then(response =>{
        console.log(response.data);
        setBardash(response.data);
        })
    .catch(error => {
      console.log('Error data: ' + error);
      })
  }, []);

    useEffect(()=>{
        axios.get(`/history/dashboard-graph/${id}`).then(response =>{
        console.log(response.data);
        setLinedash(response.data);
    })
    .catch(error => {
    console.log('Error data: ' + error);
  })
}, []);

useEffect(()=>{
    axios.get(`/history/barchart-info/${id}`)
    .then(response =>{
    console.log(response.data);
    setInfo(response.data);
})
.catch(error => {
console.log('Error data: ' + error);
})
}, []);



    useEffect(()=>{
        //axios.get(`/history/room/${currentBuilding}`)
        axios.get(`/history/room/${id}`)
        .then(response =>{
        console.log(response.data);
        setVacants(response.data);
        setAllFloor(response.data);
    })
    .catch(error => {
    console.log('Error data: ' + error);
    })
}, []);

    return (
        <div style={{ width: '100%' }}>
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div className={classes.frame}>
                            <Datetoday />
                            <div className={classes.textDash}>
                                Dashboard
                            </div>
                        </div>
                        <div className={classes.mainfame}>
                            <Paper className={classes.Yfame}>

                            {/*<div>
                                    <div className={classes.textDrop}>
                                        Building
                                    </div>
                                    <div style={{ height: 4 }} />

                                    <DropBuilding
                                    save={currentBuilding => 
                                        setCurrentBuilding(currentBuilding)}
                                />

                                    </div>*/}
                                <div className={classes.normaltext} style={{ height: 283.5, width: "150%" }}>     
                                              <h5 className={classes.textBar}> Distribute Revenue</h5> 
                                {/*<h3 className={classes.textLindchart} style={{marginLeft: 56, marginTop: 15}}>Revenue <p className={classes.Currency} style={{marginLeft: 97, marginTop: -18}}>(THB)</p> </h3>*/}
                                <BarChart
                                      width={380}
                                      height={290}
                                      data={bardash}
                                    
                                      margin={{top: 20,right: 30,left: 20,bottom: 5}}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis 
                                        dataKey="dataTime" 
                                        dataKey2= "dataTime" 

                                        tickFormatter={dateFormatter} 
                                        
                                        />
                                        <YAxis />
                                       
                                        <Bar
                                            dataKey="electricity"
                                            dataKey2="water"
                                            //dataKey3="rent"
                                            //other="other"
                                            //fill="#8884d8"
                                            //shape={<TriangleBar />}
                                            //label={{ position: "top" }}
                                        >
                                            {bardash.map((entry, index) => (
                                                <Cell key={`cell-${index}`}fill={COLORS[index % COLORS.length]}/>
                                            ))}
                                        </Bar>  
                                            </BarChart>
                                </div>

                               
                                <div style={{ height: 283.5, width: "100%"}}>
                               
                                    <div style={{ position: 'absolute', marginTop: 130, width: '100%'}}>
                                        <div className={classes.textDash} style={{position:'absolute', top: -50, left: 120}}>
                                            Overall of Revenue
                                            </div>
                                            
                                        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
                                        
                                      
                                            <div className={classes.circleborder} style={{ backgroundColor: "#3BC045" }} />
                                      
                                            <div className={classes.normaltext}> Rent </div>
                                           
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 155}} >
                                            <NumberFormat
                                                                                    value={parseInt(info.rent).toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                            
                                            </div>
                                     
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 94}} >THB</div>
                                          
                                       
                                        </div>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
                                            <div className={classes.circleborder} style={{ backgroundColor: "#5256C1" }} />
                                            <div className={classes.normaltext}>Electricity</div>
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 155}}  >

                                                                           <NumberFormat
                                                                                    value={parseInt(info.electricity).toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                              
                                                
                                            </div>
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 94}} >THB</div>
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
                                            <div className={classes.circleborder} style={{ backgroundColor: "#FFD800" }} />

                                            <div className={classes.normaltext}>Water</div>
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 155}}  >
                                                                            <NumberFormat
                                                                                    
                                                                                    value={parseInt(info.water).toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />
                                            
                                            </div>
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 94}} >THB</div>
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 4 }}>
                                            <div className={classes.circleborder} style={{ backgroundColor: "#C03B3B" }} />

                                            <div className={classes.normaltext}>Others</div>
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 155}} >
                                                                                <NumberFormat                               
                                                                                    value={parseInt(info.other).toFixed(2)}
                                                                                    displayType="text"
                                                                                    thousandSeparator={true}
                                                                                    decimalScale={2} />       
                                            </div>
                                            <div className={classes.normaltext} style={{ position: 'absolute', color: '#4A4A4A', right: 94}} >THB</div>
                                        </div>
                                    </div>
                                  
                                </div>
                              
                            </Paper>

                           
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Paper className={classes.miniXfame}>
                                {vacants.map((value,index)=>(
                                    <div className={classes.textRoom} style={{ paddingLeft: 20, paddingTop: 20 }}>
                                     {value.overdue}  Rooms 
                                    </div>
                                     ))}   
                                    <div className={classes.normaltext} style={{ paddingLeft: 20, paddingTop: 20 }}>
                                        Occupied Rooms
                                    </div>
                                   
                                </Paper>
                                
                                <div style={{ width: 26 }} />
                                <Paper className={classes.miniXfame}>
                                {vacants.map((value,index)=>(
                                    <div className={classes.textRoom} style={{ paddingLeft: 20, paddingTop: 20 }}>
                                        {value.vacant}  Rooms
                                    </div>
                                       ))}   
                                    <div className={classes.normaltext} style={{ paddingLeft: 20, paddingTop: 20 }}>
                                        Vacant Rooms
                                    </div>
                                </Paper>       
                            </div>
                                <Paper className={classes.Xfame} style={{ marginTop: 25 }}>
                                <div className={classes.normaltextMonth}>

                                    <h3 className={classes.textLindchart} style={{marginLeft: 56, marginTop: 15}}>Revenue <p className={classes.Currency} style={{marginLeft: 97, marginTop: -18}}>(THB)</p> </h3>
                                    <LineChart
                                       
                                        width={700} height={360} data={linedash}
                                        margin={{top: 60,right: 10,left: 50,bottom: -12}}>
                                    <CartesianGrid strokeDasharray="1 1" />
                                      <XAxis dataKey="dateTime"
                                      tickFormatter={dateFormatter} 
                                      />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            connectNulls
                                            //type="monotone"
                                            dataKey="totalPrice"
                                            stroke="#8884d8"
                                            fill="#8884d8"
                                        />
                                    </LineChart>
                                    <LineChart width={500} height={200}data={Linedata}
                                        margin={{top: 10,right: 30,left: 0,bottom: 0}}>
                                    </LineChart>
                                 </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </ScrollView>
        </div>
    )
}

/*<LineChart
width={700} height={340} data={Linedata}
margin={{top: 10,right: 30,left: 0,bottom: -5}}>
<CartesianGrid strokeDasharray="1 1" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Line
    connectNulls
    //type="monotone"
    dataKey="uv"
    stroke="#8884d8"
    fill="#8884d8"
/>
</LineChart>*/

{/*<LineChart
                                        width={700} height={340} data={Linedata}
                                         margin={{top: 10,right: 30,left: 0,bottom: -5}} 
                                         >
                                        <CartesianGrid strokeDasharray="1 0" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </LineChart>
                                    <LineChart width={500} height={200}data={Linedata}
                                        margin={{top: 10,right: 30,left: 0,bottom: 0}}>
                                    </LineChart>*/}