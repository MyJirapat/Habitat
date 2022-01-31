import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import { useState, useEffect } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Grid } from '@material-ui/core';
import Roomcom from './Roomcom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { TrendingUpRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        marginRight: 40

    },
    papercard: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5,
        border: "solid 1px #AAAAAA"
    },
    headfloor: {
        // display: 'block',
        posiotion: 'relative',
        marginLeft: '45px',
        paddingTop: '0px',
        verticalAlign: 'middle'

    },
    floortext: {
        color: '#4A4A4A',
        fontSize: '16px',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: '28px'
    },
    numinroom: {
        height: "25px",
        width: "84px",
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        marginTop: '28px',
        marginLeft: '86px',
        borderRadius: '13px',
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: '400',
        display: 'block'
    },
    personicon: {
        width: '18px',
        height: '18px',
        position: 'absolute',
        top: 4,
        left: 10
    },
    aligninicon: {
        display: 'inline-block',
        marginTop: '3px',
        marginLeft: '30px'
    },
    btblue: {
        fontSize: '13px',
        backgroundColor: "#485D84",
        color: "#FFFFFF",
        textTransform: 'none',
        width: '107px'
    },
    btwhite: {
        fontSize: '13px',
        backgroundColor: "#FFFFFF",
        border: "solid 0.5px #AAAAAA",
        color: "#4A4A4A",
        textTransform: 'none',
        width: '107px'

    },
    btlightblue: {
        fontSize: '13px',
        backgroundColor: "#8396B9",
        color: "#FFFFFF",
        textTransform: 'none',
        width: '110px',
        position: 'absolute',
        right: -50,
        // top: "50%",
        top: '35%',
        zIndex: 1,
    },
    btgray: {
        fontSize: '13px',
        backgroundColor: "#AAAAAA",
        color: "#FFFFFF",
        textTransform: 'none',
        width: '110px',
        position: 'absolute',
        right: -50,
        // top: "50%",
        top: '35%',
        zIndex: 1,
    },


}));

export default function Floorcom(props) {
    const classes = useStyles();
    const str = props.Date
    const [allRoom, setAllRoom] = useState(props.allFloor);
    const [allSelect, setAllSelect] = useState([]);
    const [allSelect2, setAllSelect2] = useState([]);

    const [keptAS, setAS] = useState([])
    const [isSelect, setIsSelect] = useState(false)
    const [getT, setGetT] = useState(false)


    function handelerBoth() {
        // handlerClick()

        props.getcurrentSelect2(allSelect2)
        props.getcurrentSelect(allSelect)
        props.setTrigger(true)
    }

    function handlerCheck() {
        
        console.log("this")

        console.log(allSelect)
        console.log("that")

        console.log(allSelect2)
        // keptAS.push(allSelect)
        // console.log(keptAS)
        return getT

    }



    function handlerPushToArray(allSelectpara) {
        const result = allSelect.filter(word => word == allSelectpara);
        var index = allSelect.indexOf(allSelectpara);

        console.log(result)
        if (result == allSelectpara) {
            if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
                allSelect.splice(index, 1);
            }
            console.log("data already exist")
        } else {
            console.log("push data success")
            allSelect.push(allSelectpara)
        }
    }

    function handlerPushToArray2(allSelectpara2) {
        const result = allSelect2.filter(word => word == allSelectpara2);
        var index = allSelect2.indexOf(allSelectpara2);

        console.log(result)
        if (result == allSelectpara2) {
            if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
                allSelect2.splice(index, 1);
            }
            console.log("data already exist")
        } else {
            console.log("push data success")
            allSelect2.push(allSelectpara2)

        }
    }




    return (
        <div>
            <Paper className={classes.papercard}
            // onClick={()=> handlerClick()}
            >
                <div className={classes.headfloor}>
                    <div className={classes.floortext}>
                        Floor {props.floorName}
                    </div>
                    <div style={{position: 'absolute', top: 28, right: 0 }}>
                        {/* <Button className={classes.btblue}
                        // onClick={() => handlerClick()}
                        >
                            Select All
                        </Button>
                        <div style={{ width: '11.8px' }} /> */}
                        {/* <Button className={classes.btwhite} >
                            Deselect All
                        </Button> */}
                        <div className={classes.btgray} style={{right: 20}}
                        onClick={() => handelerBoth()}
                        >
                        <Button className={handlerCheck() ?
                            classes.btlightblue : classes.btgray}>
                            Set Room Type
                        </Button>
                    </div>
                        <div style={{ width: '21.8px' }} />

                    </div>
                </div>
                <Divider style={{ backgroundColor: "#AAAAAA", marginTop: 81 }} />

                <div style={{ height: '32.36px' }}></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '50.5px', position: "relative" }}>
                    {allRoom.map((sub, value) => (

                        // <div onClick={() => handlerClick()}>
                        <Roomcom
                            getTorF={getT => setGetT(getT)}
                            // save={allSelect => setAllSelect(allSelect)}
                            save2={allSelectpara2 => handlerPushToArray2(allSelectpara2)}

                            save={allSelectpara => handlerPushToArray(allSelectpara)}

                            roomNumber={sub.roomNumber}
                            roomId={sub.roomId}
                            roomTypeName={sub.roomTypeName}
                            
                        // roomTypeName={sub.roomTypeName}
                        />


                        // </div>


                    ))}
                    {/* <div className={classes.btgray}
                        onClick={() => handelerBoth()}
                    >
                        <Button className={handlerCheck() ?
                            classes.btlightblue : classes.btgray}>
                            Set Room Type
                        </Button>
                    </div> */}
                </div>
                <div style={{ height: '21.8px' }}></div>



            </Paper>

        </div>
    );
}


// const result = keptAS.filter(word => word != allSelect);
// const result2 = keptAS.filter(word => word == allSelect);

// var index = keptAS.indexOf(allSelect);

// if (result2 == allSelect) {
//     // console.log("yes")
//     // setAS(result)
//     // setAS(result)
//     // console.log(keptAS)
//     // keptAS.push()
//     console.log(allSelect)


//     return getT


// } else {
//     // console.log("No")
//     // keptAS.push(allSelect)
//     // console.log(keptAS)

//     return getT


// }