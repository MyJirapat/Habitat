import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { line } from 'cli-spinners';
import Axios from "axios";


const useStyles = makeStyles((theme) => ({
    fame: {
        width: "755px",
        height: "653px",
        backgroundColor: "#FFFFFF"
    },
    titleframe: {
        height: "85.7px",
        width: "100%",
        position: "relative"
    },
    mainframe: {
        height: "567.3px",
        width: "100%",
    },
    textbuilding: {
        fontSize: "22.6px",
        fontWeight: "bold",
        color: "#4A4A4A",
        paddingLeft: 40,
        paddingTop: 22
    },
    line: {
        height: "1px",
        width: "90%",
        backgroundColor: "#D8D8D8",
        top: 30,
        position: "relative",
        margin: "auto"
    },
    eachtitle: {
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow2: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setwidth: {
        width: "100%",

    },
    setwidth2: {
        width: "100%",
        height: "59.8px",
        position: "relative"
    },
    setrow3: {
        height: "31.5px",
        width: "200%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setauto: {
        height: 266,
        width: 670,
        margin: "auto",
        paddingTop: 40,
        position: "relative"

    },
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 450,
        left: "20%"
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

}));

export default function Createbuilding(props) {

    const classes = useStyles()
    const { values, setValue, errors, setErrors, handleInputChange, resetFormControls } = props;
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    const [building, setBuilding] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [subdistric, setSubdistric] = useState("");
    const [district, setDistrict] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const Buildingsave = event => {
        event.preventDefault();
        Axios.post("/building/create-building", {

            "Building": {
                "building_name": building
            },
            "Address": address,
            "District": district,
            "Province": province,
            "SubDistrict": subdistric,
            "Zipcode": zipcode,
            "Email": email,
            "PhoneNumber": phone

        }).then((response) => {
            window.location.href = '/building_sp';
            console.log(response);
        })

    };

    return (
        <div className={classes.fame}>
            <div className={classes.titleframe}>
                <div className={classes.textbuilding}>
                    Create Building
                </div>
                <div className={classes.line} />
            </div>

            <div className={classes.mainframe}>
                <div className={classes.setauto}>
                    <div className="Building">
                        <div htmlFor="BuildingName" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Building Name</div>
                        <input
                            className={classes.setrow}
                            //className="form-control"
                            placeholder="Building Name"
                            type="text"
                            //name="Building"
                            onChange={(event) => {
                                setBuilding(event.target.value);
                            }}
                        />
                    </div>
                    <div className="password">
                        <div htmlFor="Address" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Address</div>
                        <input
                            className={classes.setrow}
                            placeholder="Address"
                            type="text"
                            //name="Address"
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }} />
                    </div>

                    <div style={{ display: "flex" }} className={classes.setwidth}>
                        <div className="Province">
                            <div htmlFor="Province" className={classes.eachtitle} ></div>

                            <input
                                className={classes.setrow2}
                                placeholder="Disdrict"
                                type="text"
                                //name="Province"
                                onChange={(event) => {
                                    setDistrict(event.target.value);
                                }} />

                        </div>
                        <div style={{ width: "12px" }}></div>
                        <div className="SubDistric">
                            <div htmlFor="Sub-Distric" className={classes.eachtitle}></div>

                            <input
                                className={classes.setrow2}
                                placeholder="Sub-disdrict"
                                type="text"
                                //name="Province"
                                onChange={(event) => {
                                    setSubdistric(event.target.value);
                                }} />

                        </div>
                        <div style={{ width: "12px" }}></div>

                        <div className="District">
                            <div htmlFor="District" className={classes.eachtitle}></div>
                            <input

                                className={classes.setrow2}
                                placeholder="Province"
                                type="text"
                                //name="Province"
                                onChange={(event) => {
                                    setProvince(event.target.value);
                                }} />
                        </div>


                        
                        

                        <div style={{ width: "12px" }}></div>

                        <div className="zipcode">
                            <div htmlFor="District" className={classes.eachtitle}></div>
                            <input
                                className={classes.setrow2}
                                placeholder="Zipcode"
                                type="text"
                                //name="Zipcode"
                                maxlength="5"
                                onChange={(event) => {
                                    setZipcode(event.target.value);
                                }} />

                        </div>
                    </div>

                    <div style={{ display: "flex" }} className={classes.setwidth2}>
                        <div style={{ width: "45%" }} >
                            <div htmlFor="Phone" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Phone Number</div>
                            <input
                                className={classes.setrow}
                                placeholder="Phone Number"
                                type="text"
                                //name="Phone Number"
                                style={{ position: "absolute", width: "48.5%" }}
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }} />
                        </div>
                        
                        <div style={{ width: "45%" }}>
                            <div htmlFor="lastName" className={classes.eachtitle} style={{ paddingLeft: "46px", paddingBottom: 5 }}>Email</div>
                            <input
                                className={classes.setrow}
                                placeholder="Email"
                                type="text"
                                style={{ position: "absolute", width: "48.5%", left: 345 }}

                                //name="lastName"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                        </div>
                    </div>

                    <Button
                        className={classes.buttonsubmit}
                        variant="contained" color="primary" disableElevation
                        onClick={Buildingsave}
                        style={{ backgroundColor: '#485D84' }} >
                        Save
                    </Button>

                </div>

            </div>


        </div>
    )
}
