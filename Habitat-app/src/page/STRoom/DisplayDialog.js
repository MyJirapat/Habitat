import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FeeCard from './FeeCard';
import { ScrollView } from 'react-native';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import DialogDetail from './DialogDetail';
import { useParams } from 'react-router';


const useStyles = makeStyles((theme) => ({
    frame: {
        width: '753px',
        height: '603.5px',
        backgroundColor: '#FFFFFF',
        position: "relative",
        borderRadius: 5
    },
    texttitle: {
        fontSize: '22.6px',
        fontWeight: 'bold',
        color: '#4A4A4A'
    },
    subTitle: {
        fontSize: '19.4px',
        color: '#4A4A4A'

    },
    namebed: {
        fontSize: '16px',
        color: '#4A4A4A'
    },
    inframe: {
        width: 686,
        height: 522,
        margin: "auto",
        position: "relative"
    },
    btblue: {
        fontSize: '13px',
        backgroundColor: "#485D84",
        color: "#FFFFFF",
        textTransform: 'none'
    },
    btwhite: {
        fontSize: '13px',
        backgroundColor: "#FFFFFF",
        border: "solid 0.5px #AAAAAA",
        color: "#4A4A4A",
        textTransform: 'none'
    },
    resizeInput: {
        width: "331px",
        height: '31.5px',
        fontSize: '16px',
        color: '#4A4A4A',

    },
    reicon: {
        width: "31.5px",
        height: "31.5px",
        position: "absolute",
        color: "#EFEFEF",
    },
    backIcon: {
        backgroundColor: "#4A4A4A",
        width: "24px",
        height: "25px",
        position: "absolute",
        borderRadius: 30,
        right: 0,
        margin: "30px 35px 0px 0px"
    },
    popup: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: "100%",
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.7)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    fcframe: {
        width: '213px',
        height: '94px',
        backgroundColor: '#FFFFFF',
        border: 'solid 0.5px #AAAAAA',
        borderRadius: '5px',
        marginLeft: '23px',
        marginBottom: '23.5px'


    },
    fcframeSelect: {
        width: '213px',
        height: '94px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #485D84',
        borderRadius: '5px',
        marginLeft: '23px',
        marginBottom: '23.5px'
    },
    fctexttitle: {
        fontSize: '22.6px',
        fontWeight: 'bold',
        color: '#4A4A4A'
    },
    fcsubTitle: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold'

    },
    fcnamebed: {
        fontSize: '16px',
        color: '#4A4A4A'
    },
    fcfeedetail: {
        fontSize: '13px',
        color: '#4A4A4A'
    },
    fcreicon: {
        width: "18.3px",
        height: "18.3px",
        color: "#767676"
    }
}));

export default function DisplayDialog(props) {
    const classes = useStyles()

    useEffect(() => {
        axios('/feeset/fee-sets')
            .then(response => {
                console.log(response.data)
                setAllFee(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

    }, []);
    const [allFee, setAllFee] = useState([]);
    const [isSelect, setIsSelect] = useState(false)
    const [selectElement, setSelectElement] = useState(0)
    const [buttonPopup, setButtonPopup] = useState(false)
    const [getcurrentSelect, setCurrentSelect] = useState(props.allSelcted)
    const [getcurrentSelect2, setCurrentSelect2] = useState(props.allSelcted2)

    const [arrayRoom, setArrayRoom] = useState("")

    const [getRoomTypeName, setRoomTypeName] = useState("")
    const [getNumberofBeds, setNumberofBeds] = useState(0)
    const [getFeeSetTypeId, setFeeSetTypeId] = useState(0)


    function allRoomName() {

        const a = ""

        for (var i = 0; i < props.allSelcted2.length; i++) {
            a = props.allSelcted2[i]
            console.log(a)
        }
        setArrayRoom(a)
    }
    const handleClick = (id) => {
        setSelectElement(id)
        console.log(selectElement)
    }
    const handleClick2 = (i, id) => {
        setSelectElement(i)
        console.log(id)
        setFeeSetTypeId(id)

    }

    function handleClickBoth() {
        setButtonPopup(!buttonPopup)
        console.log(selectElement)

    }

    const api = axios.create({
        baseURL: `/room/room-type`
    })

    const {id} = useParams()

    const assignFee = async () => {

        // let res = await api.post('/', {
        //     "RoomTypeName": getRoomTypeName,
        //     "NumberofBeds": parseInt(getNumberofBeds),
        //     "FeeSetTypeId": getFeeSetTypeId,
        //     "RoomIds": props.allSelcted
        // }).then(response => {
        //     alert("Assign RoomType Scuccessfully.")            
        // })
        // .catch(error => {
        //     console.log('Error getting fake data: ' + error);
        //     alert("Assign Fail.")            

        // })
        // console.log("assignFee?")
        // console.log(props.allSelcted)

        let res = await axios({
            url: `/room/room-type`,
            method: 'post',
            data: {
                "RoomTypeName": getRoomTypeName,
                "NumberofBeds": parseInt(getNumberofBeds),
                "FeeSetTypeId": getFeeSetTypeId,
                "RoomIds": props.allSelcted
            }

        }).then(response => {
            alert("post success")
            window.location.href = `/roomtype_sp/${id}`;
        })
            .catch(error => {
                alert("post fail")
                console.log('Error getting fake data: ' + error);
            })

    }


    return (props.trigger) ? (

        <div className={classes.popup}>
            <DialogDetail
                allFee={allFee}
                feetypeSet={selectElement}
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
            />
            <div className={classes.frame}>
                <div className={classes.backIcon}>
                    <IconButton
                        className={classes.reicon} style={{ marginLeft: -4, marginTop: -3 }}

                    >
                        <CancelIcon className={classes.reicon}
                            onClick={() => props.setTrigger(false)}>


                        </CancelIcon>

                    </IconButton>
                </div>

                <div style={{ height: '44px' }} />
                <div className={classes.inframe} >
                    <div className={classes.texttitle}>
                        Room Type
                    </div>
                    <div style={{ height: '10.5px' }} />
                    <div className={classes.subTitle}>
                        Room:
                        {props.allSelcted2.map((v, j) => {
                            return (
                                
                                j != props.allSelcted2.length - 1 ?
                                    ` ${v} •` :
                                    ` ${v}`


                            )

                        })}
                        {/* {props.allSelcted2.toString()} */}
                    </div>
                    <div style={{ height: '32.5px' }} />

                    <div style={{ display: 'flex', position: "absolute", top: 105 }}>

                        <div>
                            <div className={classes.namebed} >
                                Room Type Name
                                <div style={{ height: '12.5px' }} />

                                <input className={classes.resizeInput} onChange={(event) => {
                                    setRoomTypeName(event.target.value)
                                }}>

                                </input>


                            </div>
                            {/* <div style={{ height: '12.5px' }} /> */}


                        </div>

                        <div style={{ marginLeft: '23.5px' }}>
                            <div className={classes.namebed} >
                                Number of Bed
                                <div style={{ height: '12.5px' }} />

                                <input className={classes.resizeInput} onChange={(event) => {
                                    setNumberofBeds(event.target.value)
                                }}>

                                </input>
                            </div>
                            {/* <div style={{ height: '12.5px' }} /> */}


                        </div>


                    </div>

                    <div className={classes.namebed} style={{ position: 'absolute', top: 200 }}>
                        Select Fee Set
                        <div style={{ height: '14.5px' }} />


                        <ScrollView>
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '-23px', height: '240px' }}>
                                {allFee.map((item, index) => (

                                    // <FeeCard 
                                    // getEl={selectElement => setSelectElement(selectElement)}
                                    // id={item.id}
                                    // key={index}
                                    // save={isSelect => setIsSelect(isSelect)}
                                    // feeSetName = {item.feeSetName}
                                    // />

                                    <div key={index} className={selectElement === index ? classes.fcframeSelect : classes.fcframe}
                                        onClick={() =>

                                            handleClick2(index, item.feeSetTypeId[0])

                                        }>

                                        <div style={{ margin: '13px 0px 0px 21px', width: '190px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.fcsubTitle}>
                                                    {item.feeSetName}

                                                </div>
                                                <div style={{ width: 21 }} />
                                                <div>
                                                    <IconButton className={classes.fcreicon} onClick={() => handleClickBoth()}>
                                                        <InfoIcon className={classes.fcreicon} >

                                                        </InfoIcon>
                                                    </IconButton>


                                                </div>
                                            </div>
                                            <div className={classes.fcfeedetail}>
                                                {item.feeTypes.map((val, i) => {
                                                    return (

                                                        i != item.feeTypes.length - 1 ?
                                                            `${val.feeTypeName} • ` :
                                                            `${val.feeTypeName}`



                                                    )

                                                })}
                                                {/* Room Price • Electricity • Water
                                                • Car Parking, … */}
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </ScrollView>
                    </div>

                    <div style={{ display: 'flex', position: 'absolute', bottom: 0, right: 0 }}>
                        <Button className={classes.btblue} onClick={assignFee}>
                            Confirm
                        </Button>
                        <div style={{ width: '21.8px' }} />
                        <Button className={classes.btwhite}>
                            Cancel
                        </Button>
                    </div>
                </div>


            </div>
        </div>

    ) : ""
}