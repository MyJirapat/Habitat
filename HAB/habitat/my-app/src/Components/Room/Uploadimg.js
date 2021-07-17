import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>   ({
   
    media: {
     
      width: 200,
      marginLeft:"10%"
    },
   
  }));
  

const Register = () => {
const [picture, setPicture] = useState(null);
const classes = useStyles();

const onChangePicture = e => {
  setPicture(URL.createObjectURL(e.target.files[0]) );
};
return (
  <div >
    <div >
      <div className="register_player_Twocolumn_layout_two">
        <form className="myForm">
          <div className="formInstructionsDiv formElement">
            <p className="instructionsText"></p>
            
            <div className="previewProfilePic" >
              <img className="playerProfilePic_home_tile"src={picture}  className={classes.media}></img>
            </div>
          </div>
          <div className="fillContentDiv formElement">
            <div className="names formContentElement">
              
            </div>
          </div>
          <div className="submitButtonDiv formElement">
          <div className="register_profile_image">
               <input id="profilePic" type="file" onChange={onChangePicture}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}

export default Register;