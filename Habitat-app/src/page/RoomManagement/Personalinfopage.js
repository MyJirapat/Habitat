import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Floorsection from './Roomcomponent/Floorsection';
import { Link } from 'react-router-dom';
import { Divider, Paper } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { TrendingUpTwoTone } from '@material-ui/icons';
import DropGender from '../../Components/Dropdown/DropGender.js';
import moment from 'moment';
import {storage } from '../../base'
import ImageIcon from '@material-ui/icons/Image';
import CircularProgress from '@mui/material/CircularProgress';
//import { useForm } from "react-hook-form";

// import {storage} from "./config";
// import SegmentedControl from 'rn-segmented-control';
// import { SegmentedControl } from 'segmented-control'
// import SegmentedControl from '@react-native-segmented-control/segmented-control';

//this 3 import has to unibstall


const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '105px',
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
    paper: {
        width: '1163px',
        height: '494px',
        boxShadow: "0px 0px 0px #E8E8E8",
        borderRadius: 5,
        border: "1px solid #AAAAAA",
        position: 'relative'
    },
    fameinfo: {
        width: 670,
        height: 310,
        display: 'absolute',
        float: 'right',
        marginTop: '2%',
        marginRight: '127px'
    },

    fameinfoimg: {    
        //marginTop: '-2%',
        //marginRight: '127px'
        width: 200,
        height: 250,
        //display: 'absolute',
        float: 'left',
        marginTop: '2%',
        marginLeft: '80px'
    },

    /*fameinfoimg: {    
        //marginTop: '-2%',
        //marginRight: '127px'
        width: 200,
        height: 250,
        //display: 'absolute',
        float: 'left',
        marginTop: '2%',
        marginLeft: '80px'
    },*/


    famerow: {
        height: "59.86px",
        width: "100%",
        display: "flex",
        position: "relative"

    },
    grab: {
        height: "9.7px",
        width: "100%",
        backgroundColor: "white"
    },
    famerow2: {
        height: "31.55px",
        width: "100%",
        position: 'relative',
        display: "flex"

    },
    input_md: {
        height: "31.551px",
        width: "100%",
        fontSize: "16px",
        color: "#4A4A4A",
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4
    },
    input_sm: {
        width: "156.13px",
        height: "100%",
        fontSize: "16px",
        color: "#4A4A4A",
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4

    },
    input_full: {
        width: "100%",
        height: "31.5px",
        fontSize: "16px",
        color: "#4A4A4A",
        postion: "absolute",
        marginTop: 28.5,
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4
    },
    grab4: {
        width: "16.18px"
    },
    block_md: {
        width: "327.645px",
        height: "100%",
    },
    headname: {
        fontSize: "16px",
        color: "#4A4A4A",
        position: "absolute"
    },
    block_sm2: {
        width: "155.429px",
        height: "100%",

    },
    img: {
        position: "absolute",
        width: 138,
        height: 162,
        borderRadius: 5,
        top: 140,
        left: 112
    },
    emptyimg: {
        position: "absolute",
        width: 138,
        height: 162,
        borderRadius: 5,
        top: 140,
        left: 112,
        border: "1px solid #707070",
        backgroundColor: "#E2E2E2"
    },
    titleText: {
        fontSize: 19.4,
        fontWeight: 'bold',
        color: "#4A4A4A"

    },
    btmBelow: {
        width: 406,
        height: 42.8,
        backgroundColor: "#485D84",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 130,
        top: 520
    },
    segmentbtnBlue: {
        width: 161.8,
        height: 31.5,
        backgroundColor: "#8396B9",
        color: "#FFFFFF",
        textTransform: "none",

    },
    segmentbtnWhite: {
        width: 161.8,
        height: 31.5,
        backgroundColor: "#FFFFFF",
        color: "##4A4A4A",
        textTransform: "none",

    },
    segwrap: {
        border: '1px solid #AAAAAA'
        , flex: 'wrap'
        , display: 'flex'
        , width: 'fit-content'
        , borderRadius: 5
    },
    btmBelowRed: {
        width: 406,
        height: 42.8,
        backgroundColor: "#A54C44",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 640,
        top: 520
    },
    btmBelowRedUnClick: {
        width: 406,
        height: 42.8,
        backgroundColor: "#E5B6B6",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 640,
        top: 520
    },
    saveCenterBtbelow: {
        width: 406,
        height: 42.8,
        backgroundColor: "#485D84",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 400,
        top: 520
    }
}));



export default function Personalinfopage({ isOpened }) {
    const classes = useStyles()


    const [name, setName] = useState("")

    const { id } = useParams();

    const [allData, setAllData] = useState([])

    //groupsubmit//
    const [addFirstName, setAddFirstName] = useState("")
    const [addLastName, setAddLastName] = useState("")
    const [addDateBirth, setAddDateBirth] = useState("")
    const [addGender, setAddGender] = useState("")
    const [addIdCard, setAddIdCard] = useState("")
    const [addAddress, setAddAddress] = useState("")
    const [addDistrict, setDistrict] = useState("")
    const [addSubDistrict, setSubDistrict] = useState("")
    const [addProvince, setProvince] = useState("")
    const [addZip, setZip] = useState("")
    const [addPhone, setPhone] = useState("")
    const [addEmail, setEmail] = useState("")

    const [currentUserId, setCurrentUser] = useState(0)


    const idroom = 3


    const [Edit, setEdit] = useState(false)

    const [currentBed, setNewCurrentBed] = useState(0)

    const [bedName, setBedName] = useState("A")
    const [getNumberOfBed, setNumberOfBed] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [shouldDelete, setDelete] = useState(false)



    const api = axios.create({
        baseURL: `/user/add-user-bed/room/${id}`
    })

    const apidelete = axios.create({
        baseURL: `/user/delete-user/${currentUserId}`
    })

    const apiEdit = axios.create({
        baseURL: `/user/edit-user/room/${id}/user/${currentUserId}`
    })


    // https://habitat1.azurewebsites.net/api/v1/user/user-building/38


    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [process, setProgress] =useState("");
    
   

    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
        //handleUpload()
        const uploadTask = storage.ref(`/${e.target.files[0].name}`).put(e.target.files[0]);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => { 
              storage.ref()
                 .child(e.target.files[0].name)
                 .getDownloadURL()
                 .then(url => {
                    setUrl(url);
              });
          }
        );
      }
    };
  


    const deleteTenant = async () => {


        let res = await apidelete.post('/').then(response => {
            console.log(response)
            console.log('Etherea: ');
        }).then(response => {
            alert('The tenant has been checked out')
            console.log('Saved');
            window.location.href = `/personinfo/${id}`;
            

        }).catch(error => {
            console.log('Eta: ' + error);
        })
    }

    const editTenant = async () => {

        console.log(id + "room id")
        console.log(currentUserId + "currentUserId")

        let res = await axios({
            url: `/user/edit-user/room/${id}/user/${currentUserId}`,
            method: 'post',
            data: {
                "Address": addAddress,
                "District": addDistrict,
                "SubDistrict": addSubDistrict,
                "Province": addProvince,
                "ZipCode":  addZip,
                "Email":  addEmail,
                "PhoneNumber": addPhone,
                "User": {
                    "FirstName": addFirstName,
                    "LastName": addLastName,
                    "GenderId": parseInt(addGender),
                    "BirthDate":addDateBirth,
                    "IdentificationNo": addIdCard,
                    "ProfileUrl": url
                },
                "Bed": {
                    "RoomId": parseInt(id)
                }
            }
        }).then(response => {
            alert('The tenant has been edited')
            console.log('Saved');
            window.location.href = `/personinfo/${id}`;

        }).catch(error => {
            console.log('Edit Eta: ' + error);
            alert('Fail')

            console.log(id)
            console.log(currentUserId + "This user")
        })
    }


    const addTenant = async () => {
        let res = await api.post('/', {
            "Address": addAddress,
            "District": addDistrict,
            "SubDistrict": addSubDistrict,
            "Province": addProvince,
            "ZipCode": addZip,
            "Email": addEmail,
            "PhoneNumber": addPhone,
            "User": {
                "first_name": addFirstName,
                "last_name": addLastName,
                "gender_id": parseInt(addGender),
                "birthdate": addDateBirth,
                "identificationNo": addIdCard,
                "profile_url": url
            },
            "Bed": {
                "bed_name": bedName,
                "room_id": parseInt(id)
            }
        }).then(response => {
            // alert('The tenant has been added')
            console.log('Saved');
            window.location.href = `/personinfo/${id}`;

        }).catch(error => {
            console.log('Eta: ' + error);
        })
    }

    const [buildName, setBuildName] = useState("")
    useEffect(async () => {
        // setIsLoading(false)
        await axios(`/user/user-building/${id}`)
        .then(response => {
            setBuildName(response.data)
            console.log(response.data)
            // setIsLoading(true)

        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
        await axios(`/user/number-of-bed/${id}`)
            .then(response => {
                setNumberOfBed(response.data[0].numberOfBed)
                // setIsLoading(true)

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
        await axios(`/user/user-room/${id}`)
            .then(response => {
                console.log(response.data, "allData")
                setAllData(response.data);
                setCurrentUser(response.data[currentBed].userId)
                console.log(currentUserId + "From axious use effect")
                setIsLoading(true)


            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
                setIsLoading(true)

            })


    }, []);



    function handleSave() {
        setEdit(!Edit)
        console.log(Edit)



        if (Edit == true) {
            addTenant()
            console.log("the tenant has been saved")

        } else {
            console.log("You are editting tenant")
            // deleteTenant()
        }

    }

    function hanthese() {
        console.log(currentBed)
        console.log(allData.length)

    }

    function firstCharacterAt() {

    }

    const roomBed = ["A", "B", "C", "D", "E", "F", "G", "H"]
    const [canSave, setSave] = useState(false)
    var previous = 0
    const [getIndex, setIndex] = useState(0)

    useEffect(() => {
        try {
            if (allData.length > 0) {
                console.log(allData[currentBed].room[0].bedName)
                console.log('im fine')
                setSave(false)
                setEdit(false)
            } else {
                setSave(true)
                setEdit(true)
            }

        } catch (error) {
            console.error('The err: ', error)
            setSave(true)
            setEdit(true)

        }

        // if (allData.length > 0 && currentBed == getIndex) {
        //     console.log(getIndex)

        //     setSave(false)
        // } else {
        //     setSave(true)
        //     console.log("kk")

        // }

    }, [getIndex, isLoading]);

    function newhandleClick(i) {
        // const thisBed = currentBed


        setNewCurrentBed(i)
        setBedName(roomBed[i])
        setIndex(i)
        // console.log(currentBed)



        if (allData.length > 0 && currentBed == i) {
            setCurrentUser(allData[currentBed].userId)
            previous = i
            console.log(allData[currentBed].userId + "in if")
            // console.log("hi")
            // setSave(true)
            // console.log(canSave)
            // setEdit(true)
        } else {
            console.log("hoo")

            setSave(false)
            // setEdit(false)
        }
        // console.log(previous)

    }

    function letEdit() {
        if (Edit == true) {
            setEdit(false)
            editTenant()
            console.log("Edit done")
        } else {
            setEdit(true)
            console.log("Not yet Edit")


        }
    }

    if (isLoading) {
        return (
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>

                        <div className={classes.frame}>
                            <Datetoday />
                            <div className={classes.titleText}>
                                {/* {allData.length > 0 ? `${buildName[0].buildingName} • Room: ${allData[0].room[0].roomNumber}` : ""} */}
                             
                                {buildName.length > 0 && `${buildName[0].buildingName} • Room: ${buildName[0].roomName}`}
                                {/* {allData.length} */}

                            </div>

                            {/* <button onClick={() => console.log(addGender)}>
                            </button> */}
                        </div>
                        <Paper className={classes.paper}>
                            <div style={{ height: '111.6px', width: '100%' }}>
                                <div className={classes.titleText} style={{ paddingTop: 20, paddingLeft: 38 }}>
                                    Bed
                                </div>
                                <div style={{ paddingTop: 8, paddingLeft: 38 }}>
                                    <div className={classes.segwrap} >

                                        {[...Array(getNumberOfBed)].map((bed, index) => {
                                            return (
                                                <Button className={currentBed == index ? classes.segmentbtnBlue : classes.segmentbtnWhite} onClick={() => newhandleClick(index)}>
                                                    {allData.length >= index + 1 ? allData[index].room[0].bedName : "Vacant"}
                                                </Button>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>

                            <Divider />

                            {/*style={{ marginLeft: "9%"  }*/}
                            <div ontenteditable={Edit == true ? "true" : "false"} >
                                {/*<img className={false ? classes.img : classes.emptyimg} alt="complex" src={false ? allData[0].profileURL : ""} />*/}

                                {/* <img style={{ marginLeft: "8%", marginTop: "5%" }} src={url} alt="" width="180"  /> */}
                                <img className={classes.fameinfoimg} src={allData.length > 0 && currentBed  < allData.length ? allData[currentBed].profileURL: url} alt="" width="120"  />
                            </div>
                            <input style={{ display: "none" }} type="file" 
                                        id="raised-button-file" onChange={handleChange}/>
                                            <Button style={{ marginTop: "25%", marginLeft: "-12%"  }} htmlFor="raised-button-file"
                                            component="label"> {/*<ImageIcon />*/} Insert</Button>          

                            <div className={classes.fameinfo}>
                                <div className={classes.famerow}>
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            First Name
                                        </div>
                                        <div style={{ height: 4 }}></div>
                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} style={{ paddingLeft: 10 }} onInput={e => setAddFirstName(e.currentTarget.textContent)} >

                                            {parseInt(allData.length) > currentBed ? allData[currentBed].firstName : ""}
                                        </div>

                                    </div>
                                    <div className={classes.grab4} />
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            Last Name
                                        </div>

                                        <div style={{ height: 4 }}></div>
                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} style={{ paddingLeft: 10 }} onInput={e => setAddLastName(e.currentTarget.textContent)}>

                                            {parseInt(allData.length) > currentBed ? allData[currentBed].lastName : ""}

                                        </div>
                                    </div>
                                </div>

                                <div className={classes.grab} />

                                {Edit == false &&
                                    <div className={classes.famerow}>

                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname} >
                                                Date of Birth
                                            </div>

                                            <div style={{ height: 4 }}></div>
                                            <div className={classes.input_md} style={{ paddingLeft: 10 }} >
                                                {parseInt(allData.length) > currentBed ?
                                                    moment( allData[currentBed].birthDate  ).format("DD/MM/YYYY")
                                                // allData[currentBed].birthDate 
                                                
                                                : ""} 
                                            </div>
                                        </div>
                                        <div className={classes.grab4} />
                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname}>
                                                Gender
                                            </div>
                                            <div style={{ height: 4 }}></div>
                                            <div className={classes.input_md} style={{ paddingLeft: 10 }} >
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].gender : ""}

                                            </div>
                                        </div>


                                        <div className={classes.grab4} />
                                        <div className={classes.block_md}>
                                            <div className={classes.headname}>
                                                Identification Number / Passport Number
                                            </div>
                                            <div style={{ height: 4 }} ></div>
                                            <div className={classes.input_md} style={{ paddingLeft: 10 }}  >
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].identificationNo : ""}

                                            </div>
                                        </div>
                                    </div>

                                }

                                {Edit == true &&
                                    <div className={classes.famerow}>

                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname}>
                                                Date of Birth
                                            </div>
                                            <div style={{ height: 4 }}></div>
                                            <input
                                                className={classes.input_md}
                                                placeholder="Date"
                                                type="date"
                                                name="Date"
                                                //defaultValue="2021-05-24
                                                noValidate
                                                onChange={(event) => {
                                                    setAddDateBirth(event.target.value)
                                                }}
                                            />
                                            {/* <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddDateBirth(e.currentTarget.textContent)}>
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].birthDate : ""}
                                            </div> */}
                                        </div>
                                        <div className={classes.grab4} />
                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname}>
                                                Gender
                                            </div>
                                            <div style={{ height: 28 }}></div>
                                            <DropGender className={classes.input_md} style={{ marginTop: '30px' }}
                                                save={addGender => setAddGender(addGender)}
                                            >

                                            </DropGender>
                                            {/* <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddGender(e.currentTarget.textContent)}>
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].gender : ""}
                                            </div> */}
                                        </div>


                                        <div className={classes.grab4} />
                                        <div className={classes.block_md}>
                                            <div className={classes.headname} >
                                                Identification Number / Passport Number
                                            </div>
                                            <div style={{ height: 4 }}></div>
                                            <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddIdCard(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].identificationNo : ""}

                                            </div>
                                        </div>
                                    </div>

                                }


                                <div className={classes.grab} />
                                <div className={classes.famerow} >
                                    <div className={classes.headname}>
                                        Address
                                    </div>
                                    <div className={classes.input_full} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddAddress(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                        {parseInt(allData.length) > currentBed ? allData[currentBed].address : ""}

                                    </div>
                                </div>
                                <div className={classes.grab} />

                                {Edit == false &&
                                    <div className={classes.famerow2} style={{ position: 'relative', marginTop: -26 }}>
                                        <div className={classes.input_sm} placeholder="District" onInput={e => setDistrict(e.currentTarget.textContent)} style={{ paddingLeft: 10 }}  >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].district : ""}

                                        </div>

                                        <div className={classes.grab4} />

                                        <div className={classes.input_sm} placeholder="Sub-district" onInput={e => setSubDistrict(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].subDistrict : ""}

                                        </div>

                                        <div className={classes.grab4} />

                                        <div className={classes.input_sm} placeholder="Province" onInput={e => setProvince(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].province : ""}

                                        </div>

                                        <div className={classes.grab4} />

                                        <div className={classes.input_sm} placeholder="Zip code" onInput={e => setZip(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].zipCode : ""}

                                        </div>
                                    </div>
                                }

                                {Edit == true &&
                                    <div className={classes.famerow2} style={{ position: 'relative', marginTop: -26 }}>
                                        <input className={classes.input_sm} placeholder="District" onChange={e => setDistrict(e.target.value)} >

                                        </input>

                                        <div className={classes.grab4} />

                                        <input className={classes.input_sm} placeholder="Sub-district" onChange={e => setSubDistrict(e.target.value)}>

                                        </input>

                                        <div className={classes.grab4} />

                                        <input className={classes.input_sm} placeholder="Province" onChange={e => setProvince(e.target.value)}>

                                        </input>

                                        <div className={classes.grab4} />

                                        <input className={classes.input_sm} placeholder="Zip code" onChange={e => setZip(e.target.value)}>

                                        </input>
                                    </div>
                                }



                                <div className={classes.grab} />
                                <div style={{ height: '24px' }}></div>

                                <div className={classes.famerow}>
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            Phone Number

                                        </div>
                                        <div style={{ height: 4 }}></div>

                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setPhone(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].phoneNo : ""}

                                        </div>
                                    </div>
                                    <div className={classes.grab4} />
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            Email
                                        </div>
                                        <div style={{ height: 4 }}></div>
                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setEmail(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].email : ""}

                                        </div>
                                    </div>
                                </div>

                                {canSave &&
                                    <Button className={classes.saveCenterBtbelow} onClick={() => handleSave()}>
                                        {"SAVE"}

                                    </Button>
                                }

                                {canSave == false &&
                                    <div>
                                        <Button className={true ? classes.btmBelow : classes.btmBelowRed}
                                            onClick={() => letEdit()}
                                        >
                                            {Edit == true ? "SAVE" : "Edit"}
                                        </Button>
                                        <Button className={Edit ? classes.btmBelowRedUnClick : classes.btmBelowRed}
                                            disabled={Edit}
                                            onClick={deleteTenant}
                                            style={{ color: "#FFFFFF" }}
                                        >

                                            Check out
                                        </Button>
                                    </div>

                                }


                               


                            </div>

                        </Paper>


                    </div>


                </div>


            </ScrollView>


        )
    } else {
        return (
            <div>
                
                <CircularProgress style={{marginLeft: "43%", marginTop: "28%"}} />
            </div>
        )
    }
}
