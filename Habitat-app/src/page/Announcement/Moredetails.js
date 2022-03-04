import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Detail from "../../Components/Anouncement/Detail";
import Comment from "../../Components/Anouncement/Comment";
import { Row } from 'react-bootstrap';
import "./../../Css/Announcement/detail.css"
import { ScrollView } from 'react-native';
import { block } from 'strip-comments';
import { red } from 'chalk';
import axios from 'axios';
import Cardcomment from '../../Components/Anouncement/Cardcomment';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    // marginTop: '-6%',
  },

  root2: {
    display: 'flex', 
    marginTop: '-2%',
      
  },


  Cards:{
    width: '55%',
    padding: theme.spacing(4),
    marginTop: "-7%",
    marginLeft: "15%",
    margin: 'auto',
    height: "450%"
  },

  Card:{
    width: '160%',
    padding: theme.spacing(4),
    marginTop: "-7%",
    marginLeft: "-130%",
    margin: 'auto',
    height: 450
  },

  heder:{
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '4%',
    
  },

  container: {
    maxHeight:440,
    width: '100%'
  },
  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 15),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    
  },

 Searchstyle: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    marginTop: -24,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  Field:{
    marginTop: "2%"
  },

  Heading:{
    marginTop: "3%"
  },

  Btn:{
    marginLeft: "93%",
    marginTop: "-6%"

  },

  


  

 

}));

export default function MoreDetail() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };


//   /* Api call*/ 
//   const [Fee, setFee] = useState([]);

//   useEffect(() =>{
//     async function fetchPost(){
//       try{
//         const requesUrl = '';
//         const response = await fetch(requesUrl);
//         const responseJSON =await response.json();
//         console.log(responseJSON);
//         setFee(responseJSON);    
//     } catch{    
//     }
//    }
//    fetchPost();


// }, []);


//   const handleDrawerClose = () => {
//     setOpen(false);
//   };


  return (
    
  //   <div className={classes.root}>        
  //     <CssBaseline  />     
  //       <main className={classes.content}>
  //         <div className={classes.toolbar} />
  //         <Typography paragraph className={classes.Heading} >
  //           <div class="container d-flex-end">
  //           </div>
  //         </Typography> 

  //       <div>       
  //           <div className="row" >     
  //               <div className="col-md" style={{  border: "0px"  }}> 
  //                   <Detail/>
  //               </div> 

  //               <div className="col-md"  style={{ border: "0px" }} > 
  //                   <Comment/>
  //               </div> 
  //         </div>
  //      </div>
  //     </main>
  // </div>

        <ScrollView >
          <div style={{height: "735px", margin:'auto', paddingLeft:'70px',
           paddingTop:"40px", 
           }}>
              <div style={{fontSize:"19.4px", fontWeight:"bold", color:"#4A4A4A",width:"1170px",paddingBottom:"50px"}}>
                Announcement
              </div>
              <div className="row">     
              <div className="col-md" style={{  border: "0px"  }}> 
                  <Detail/>
              </div> 

              <div className="col-md"  style={{ border: "0px" }} > 
              <Comment/>
              </div> 
            </div>
          </div>
        </ScrollView>

  );
}









