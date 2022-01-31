
import React, { useEffect, useState } from 'react'
import ComplexGrid from '../../Components/Setting/Setting'
import { Button } from '@material-ui/core'
import { styled } from '@material-ui/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './../../Css/Setup/Settingpage.css'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Axios from "axios";

import Nav from 'react-bootstrap/Nav'
import { useParams } from 'react-router';


const useStyles = makeStyles({
    flexGrow: {
        flex: '1',
    },
    button: {
        backgroundColor: '#485D84',
        borderRadius: "23.5px",
        textTransform: "none",
        fontSize: "13px",
        color: '#fff',
        fontWeight: 'normal',
        position: 'relative',
        margin: 'auto',
        float: 'right',
        left: 150,
        top: 0,
        '&:hover': {
            backgroundColor: '#485D84',
            color: '#fff',
            width: "74.5px",
            height: "27.5px"
        },
    },
    button2: {
        backgroundColor: '#485D84',
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "19px",
        color: '#fff',
        fontWeight: 'normal',
        width: "407px",
        height: "43px",
        marginTop: 580,
        position: "absolute",
        margin: "30%",



        '&:hover': {
            backgroundColor: '#687690',
            color: '#fff',
        },


    },
    settingpaper: {
        position: "relative",
        width: 1000,
        height: 660,
        bottom: 0,
        marginbottom: 20,
        borderRadius: 5,
        backgroundColor: "#ffffff"
    },
    incontainer: {
        width: 876,
        height: 432,
        border: "1px solid #AAAAAA",
        margin: "auto",
        borderRadius: 10,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex"

    },
    topicsetup: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "26px",
        color: "#4A4A4A",
        paddingTop: "40px",
    },
    mdcolum: {
        width: 438,
        height: 432,
        position: "relative"
    },
    mdblue: {
        width: 438,
        height: 432,
        position: "relative"
    },
    textsetting: {
        color: "#485D84",
        fontWeight: "bold",
        fontSize: 16,
    },
    subtext: {
        fontSize: 16,
        color: "#AAAAAA",

    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 190,
        transition: 'all 0.5s ease',
        marginTop: 60
    },
    scrollspace36: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 120,
        transition: 'all 0.5s ease',
        marginTop: 60

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
    },
    input_md: {
        height: "31.551px",
        width: "520px",
        fontSize: "16px",
        color: "#4A4A4A",
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4
    },

    title: {
        fontSize: '22.6px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',
        top: 20,
        left: 16
    },
    title2: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',

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


})

export default function Settingpage({ isOpened, props }) {
    const classes = useStyles();

    const { id } = useParams()
    const [promptPay, setPromptPay] = React.useState("");

    const [eWallet, setEWallet] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const BankAccountsave = () => {
        Axios.post(`/bankaccount/promptpay/${id}`, {
            "id": parseInt(id),
            "promptPay": promptPay

        }).then((response) => {
            // alert("Add Success")
            //window.location.href = '/building_sp';
            console.log(response);
            Ewalletsave()

        })
        setOpen(false)

    };

    const Ewalletsave = () => {
        Axios.post(`/bankaccount/e-wallet/${id}`, {
            "id": parseInt(id),
            "e_wallet": eWallet

        }).then((response) => {
            //window.location.href = '/building_sp';
            alert("success")
            setOpen(false)

            console.log(response);
        }).catch(error => {
            alert("fail")

            console.log('Error getting fake data: ' + error);
        })
        setOpen(false)
    };

    useEffect(() => {
        Axios.get(`/bankaccount/e-wallet/${id}`)
            .then(response => {


                const { data } = response;
                setEWallet(data[0].eWallet)
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    useEffect(() => {
        Axios(`/bankaccount/promptpay/${id}`)
            .then(response => {

                const { data } = response;
                setPromptPay(data[0].promptPay);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);


    const [currentSelect, setCurrentSelect] = useState(0)

    return (
        <div style={{ width: '100%' }}>

            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>

                <div className={classes.settingpaper}>

                    <div className={classes.topicsetup}>
                        Setting
                    </div>


                    <div className={classes.incontainer}>

                        <div className={classes.mdcolum}>
                            <div style={{ height: " 47px" }} />
                            <Link to='/building_sp' style={{ textDecoration: "none" }}>
                                <div>
                                    <div className="circletext inline item marleft">
                                        1
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Building
                                        </div>
                                        <div className={classes.subtext}>
                                            Manage and create building
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div style={{ height: " 50px" }} />

                            <Link to={`/stCreateFloor/${id}`} style={{ textDecoration: "none" }}>
                                <div>
                                    <div className="circletext inline item marleft">
                                        2
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Floors
                                        </div>
                                        <div className={classes.subtext}>
                                            Setting the floors of building
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div style={{ height: " 50px" }} />
                            <Link to={`/settingroom/${id}`} style={{ textDecoration: "none" }}>

                                <div>
                                    <div className="circletext inline item marleft">
                                        3
                                    </div>

                                    <div>
                                        <div className={classes.textsetting}>
                                            Rooms
                                        </div>
                                        <div className={classes.subtext}>
                                            Manage and set up room
                                        </div>
                                    </div>

                                </div>

                            </Link>

                            <div style={{ height: " 50px" }} />

                            <Link to={`/roomtype_sp/${id}`} style={{ textDecoration: "none" }}>

                                <div>
                                    <div className="circletext inline item marleft">
                                        4
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Room Types
                                        </div>
                                        <div className={classes.subtext}>
                                            Kind of room
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className={classes.mdblue}>
                            <div style={{ height: " 47px" }} />
                            <Link to={`/feetype_sp/${id}`} style={{ textDecoration: "none" }}>

                                <div>
                                    <div className="circletext inline item marleft">
                                        5
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Fee Types
                                        </div>
                                        <div className={classes.subtext}>
                                            Fee items to set the fee set
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div style={{ height: " 50px" }} />
                            <Link to={`/feesets_sp/${id}`} style={{ textDecoration: "none" }}>
                                <div>
                                    <div className="circletext inline item marleft">
                                        6
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Fee Sets
                                        </div>
                                        <div className={classes.subtext}>
                                            A group of fee types
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div style={{ height: " 50px" }} />

                            {/* <Link to='/bankacc_sp' style={{ textDecoration: "none" }}> */}
                            <Link onClick={handleClickOpen} style={{ textDecoration: "none" }} >
                                <div>
                                    <div className="circletext inline item marleft">
                                        7
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Bank Account
                                        </div>
                                        <div className={classes.subtext}>
                                            Setting the channel to earn
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div style={{ height: " 50px" }} />

                            <Link to={`/st_initialize/${id}`} style={{ textDecoration: "none" }}>

                                <div>
                                    <div className="circletext inline item marleft">
                                        8
                                    </div>
                                    <div>
                                        <div className={classes.textsetting}>
                                            Initial Expenses
                                        </div>
                                        <div className={classes.subtext}>
                                            Setting initial meter reading
                                        </div>
                                        <div className={classes.subtext} style={{ position: "absolute", right: 189 }}>
                                            in each line
                                        </div>

                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>

                    <Link to={`/stCreateFloor/${id}`}>
                        <Button className={classes.button2}>
                            SAVE
                        </Button>
                    </Link>

                    {/* stCreateFloor */}
                    <Dialog open={open} onClose={handleClose}
                        aria-labelledby="edit-apartment"
                        fullWidth={true}>
                        <DialogTitle id="edit-apartment" className={classes.dialogPaper2}>
                            <div className={classes.title} style={{ position: 'relative' }}>
                                Bank Account
                            </div>

                        </DialogTitle>
                        <DialogContent className={classes.dialogPaper}>

                            <div style={{ height: 239, marginLeft: 16, marginTop: 10 }}>
                                <div className={classes.segwrap} style={{ position: 'relative', border: '0.75px solid #AAAAAA' }}>
                                    <div className={currentSelect == 1 ? classes.segmentbtnWhite : classes.segmentbtnBlue}
                                        onClick={() => setCurrentSelect(0)}>

                                        <text className={classes.makeCenter}>
                                            Prompt pay
                                        </text>

                                    </div>

                                    <div className={currentSelect == 1 ? classes.segmentbtnBlue : classes.segmentbtnWhite} onClick={() => setCurrentSelect(1)}>

                                        <text className={classes.makeCenter}>
                                            E-wallet
                                        </text>

                                    </div>

                                </div>

                                <div style={{ position: 'absolute', bottom: 140 }}>
                                    {currentSelect == 0 ? "Mobile No./Citizen ID/Tax ID" : "Reference Number"}
                                </div>
                                {currentSelect == 0 &&
                                    <input className={classes.input_md} style={{ position: 'absolute', bottom: 100 }}
                                        value={promptPay}
                                        onChange={(event) => {

                                            setPromptPay(event.target.value)

                                        }
                                        }
                                    >
                                    </input>

                                }

                                {currentSelect == 1 &&
                                    <input className={classes.input_md} style={{ position: 'absolute', bottom: 100 }}
                                        value={eWallet}
                                        onChange={(event) => {

                                            setEWallet(event.target.value)

                                        }
                                        }
                                    >
                                    </input>

                                }
                                <div style={{ display: 'flex', position: 'absolute', right: 41, bottom: 33 }}>
                                    <Button style={{ backgroundColor: '#485D84', color: '#FFFFFF', textTransform: 'none', width: 107.5, height: 31.5 }}
                                        onClick={BankAccountsave}
                                    >
                                        Confirm
                                    </Button>
                                    <div style={{ width: 19 }} />
                                    <Button style={{ backgroundColor: '#FFFFFF', color: '#4A4A4A', textTransform: 'none', width: 107.5, height: 31.5, border: '0.75px solid #AAAAAA' }}
                                        onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </div>


                            </div>



                            {/* <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Prompt pay">
                                    <DialogContentText>
                                        <h6>Mobile No./Citizen ID/Tax ID</h6>
                                        <input maxlength="40" size="40"
                                            id
                                            type="text"
                                            fullWidth
                                            contenteditable="true"
                                            value={promptPay}
                                            onChange={(event) => {
                                                setPromptPay(event.target.value);
                                            }
                                            } />
                                    </DialogContentText>
                                    <DialogActions className={classes.dialogPaper3}>
                                        <Button
                                            onClick={BankAccountsave}
                                            className={classes.Cursor}
                                            variant="contained"
                                            color="primary"
                                            disableElevation
                                            style={{ backgroundColor: '#485D84' }}>
                                            Create
                                        </Button>
                                        <div className={classes.dialogButton}>
                                            <Button className={classes.Cursor}
                                                type={"button"}
                                                variant="contained" disableElevation
                                                onClick={handleClose}>
                                                cancel
                                            </Button>
                                        </div>
                                    </DialogActions>
                                </Tab>
                                <Tab eventKey="profile" title="E-wallet">
                                    <DialogContentText>
                                        <h6>Reference Number</h6>
                                        <input maxlength="40" size="40"
                                            type="text"
                                            fullWidth
                                            value={eWallet}
                                            onChange={(event) => {
                                                setEWallet(event.target.value);
                                            }}
                                        />
                                    </DialogContentText>
                                    <DialogActions className={classes.dialogPaper3}>
                                        <Button
                                            onClick={Ewalletsave}
                                            className={classes.Cursor}
                                            variant="contained"
                                            color="primary"
                                            disableElevation
                                            style={{ backgroundColor: '#485D84' }}>
                                            Create
                                        </Button>
                                        <div className={classes.dialogButton}>
                                            <Button className={classes.Cursor}
                                                type={"button"}
                                                variant="contained" disableElevation
                                                onClick={handleClose}>
                                                cancel
                                            </Button>
                                        </div>
                                    </DialogActions>
                                </Tab>
                            </Tabs> */}
                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        </div>
    )
}

