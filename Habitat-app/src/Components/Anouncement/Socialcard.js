import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import ImpNews from '../../Components/Anouncement/Important';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from '@material-ui/core/Typography';
import General from "../../Components/Anouncement/General";
import Button from '@material-ui/core/Button';
import { Link, NavLink } from "react-router-dom";
import "../../Css/Announcement/Socialcard.css";
import { Grid } from '@material-ui/core';
import Arraylist from './Arraylist';
import Datetoday from '../AllComponent/Datetoday'
import moment from 'moment';
import ImageIcon from '@material-ui/icons/Image';
import { Update } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import PublishIcon from "@material-ui/icons/Publish";
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'

//import DropFloor from '../Dropdown/DropFloor';
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from '@mui/material/CircularProgress';

import {storage } from '../../base'
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 90,
    // marginTop: -25,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },

    Isloading: {
      marginRight: '-45%',
      //marginTop: '120%',
      
    },

    change: {
      color: 'black'
    },

    Font: {
      fontFamily: [
        '"Helvetica Neue"',

      ].join(','),
    },

    Move: {
      marginright: '500%',
      marginTop: "-5%",
      display: "block",
      '& > * + *': {
        marginTop: theme.spacing(5),
      },

      Btn: {
        marginleft: '5%',
      },
    },
},

  importimgbtn: {
    height: '38px',
    width: '38px',
    paddingRight: theme.spacing(5),
  },
  

}));

const useStyles2 = makeStyles({
  dialog: {
    position: 'absolute',
    // left: 0,
    // top: 0,
    bottom: -33,
    right: 10,
    minWidth: "650px",
    minHeight: "560px",
    maxHeight: "560px",
    borderRadius: '8px',
  },
  imgbtn: {
    height: '33px',
    weight: '33px'
  },
  importimgbtn: {
    height: '38px',
    width: '38px',
    marginLeft: '28px'
  },
   Up:{
     marginLeft: "50%"
   },
   Searchstyle: {
    width: 280,
  },
  hidearrowBt: {
    backgroundColor:'#ffff',
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex:1
  },

  headBuilding: {
    marginLeft: '-25px',
    paddingTop: '14px'
  
},

fameinfo: {
  width: 670,
  height: 310,
  display: 'absolute',
  float: 'left',
  marginTop: '2%',
  marginRight: '127px'
},

Description:{
  marginTop: '25px'
}
  // paper: { minWidth: "500px" },
});

const DialogActions2 = withStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(5),
    paddingRight: theme.spacing(3),
  },

}))(MuiDialogActions);


const api = axios.create({
  baseURL: '/announcement/announcement'
})


function Social() {
  
  const classes2 = useStyles2();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentAnnounce, setCurrentAnnounce] = useState(0)

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const {id} = useParams();

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
          storage
            .ref()
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );

    }
  };

  const handleUpload = () => {
    /*const uploadTask = storage.ref(`/${image.name}`).put(image);
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
        storage
          .ref()
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );*/
  };

  console.log("image: ", image);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // console.log(currentAnnounce)
  };

  const imagefunction = () => {
    console.log("CLICKED");
  }

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  // const handleSearch = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = allData.filter((data) => {
  //     return data.tite.search(value) != -1;
  //   });
  //   setFilteredData(result);
  // }


  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    // axios('https://60aa459d66f1d000177729b4.mockapi.io/api/v1/announcement')
    // axios('https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/imandgen')

    axios('/announcement/announcements')
      .then(response => {
      console.log("hi" + response.data)
      setAllData(response.data);
      setFilteredData(response.data);
      setIsloading(true)
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  }, []);

  // onClick={this.createNew}
  const addNews = async () => {
    let res = await api.post('/', {
      "Title": title,
      "TypeId": parseInt(currentAnnounce),
      //"AnnounceDate": datecreate,
      "Description": descrip,
      //"ImageUrl": "https://cdn.wallpapersafari.com/36/96/7cRSqV.png",
      "ImageUrl": url,
      "Likes": 0,
      "Comments": 0,
      "StaffId": 1
    })
    window.location.href = `/announce/${id}`;
  }

  const deleteAnnounce =(id)=>{
    axios.post(`/announcement/deleted-announcement/${id}`)
    .then(()=>{
     
      alert([
        
        'Delete',
       
      
      ])
      setAllData(
        allData.filter((row)=>{
          return row.id !=id;
        })
      )
    })
  }

  const [title, setTitle] = useState("")
  // const [type, setType] = useState(0)
  const [datecreate, setDatecreate] = useState("")
  const [descrip, setDescrip] = useState("")

  //   const handleChange = (e) => {
  //     setTitle({value: e.target.value})
  // }

  
  return (
      <div>
          <div className="row" style={{ marginLeft: '-15px', marginRight: '0px', border: 'none' }}>
           <Datetoday />
         </div>
      {/* <div className="col-md-2"> */}
      {/* <div className={classes.Move} > */}
      {/* <Button variant="contained" color="primary" disableElevation
          style={{ backgroundColor: '#485D84' }}
        onClick={handleClickOpen}>
        Compose
      </Button>    */}

        <Dialog classes={{ paper: classes2.dialog }}
                  open={open} onClose={handleClose}
                  aria-labelledby="edit-apartment" >
           
        <h5 id="newannouncetitle">  New Announcement </h5>
        {/* </DialogTitle> */}
        <div className="divider"> </div>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <div className="movetotop">
               <form noValidate>
                  <div>
                     <p>
                      <label id="titletitle"  >Title</label>
                        <div className="spacing12"></div>
                          <input
                              className="titleinput"
                              placeholder="Title"
                              type="Buildingname"
                              name="text"
                              noValidate
                              onChange={(event) => {
                                setTitle(event.target.value)
                              }}
                            />
                     </p>
                  </div>
                    <div>
                      <form>
                        <label id="titletitle"htmlFor="Province" >Type</label>
                           <div className={classes2.hidearrowBt} style={{right:310,top:60}}/>
                              <div className="spacing12"></div>
                                <Arraylist   
                                  url='/announcement/type-announcements'
                                  save={currentAnnounce => 
                                    setCurrentAnnounce(currentAnnounce)} />
                            </form>
                          </div>

                    <div className="spacing12"></div>
                    {/* <div>
                           <p>
                            <label id="datetitle" htmlFor="Date">Date</label>
                              <div className="spacing12"></div>
                                 <input
                                    className="dateinput"
                                    placeholder="Date"
                                    type="date"
                                    name="Date"
                                    noValidate
                                    onChange={(event) => {
                                      setDatecreate(event.target.value)
                                    }}
                                />
                            </p>
                        </div> */}

                    <div className="Description">
                        <label style={{ padding: '1%', marginLeft: '-1%', marginTop: '1%' }}id="descriptiontitle"htmlFor="Date">Description</label>
                            <textarea className="Des"
                                style={{ padding: '2%' }}
                                placeholder="Description"
                                type="text"
                                name="Description"
                                noValidate
                                onChange={(event) => {
                                  setDescrip(event.target.value)
                                }}
                              />
                        </div>
                     </form>
                  </div>
        </DialogContent>

        <DialogActions2>
           <IconButton className={classes.importimgbtn} onClick={imagefunction}>
            {/* <ImageIcon className={classes2.importimgbtn} style={{ color: '#4A4A4A' }} />*/}
          </IconButton>
            {/* <div className="App">
                  <input clasName={classes.Choosefile}
                        size="small"
                        type="file" 
                        onChange={handleChange} />
                  <Button htmlFor="raised-button-file"className="shapefile-icon" component="label">
                    <PublishIcon />
                  </Button>
                  </div>*/}

                <div className="App">
                    <input style={{ display: "none" }}
                        id="raised-button-file" type="file"
                        onChange={handleChange}/>

                      <Button className="shapefile-icon" htmlFor="raised-button-file"
                              component="label"> <ImageIcon/> </Button>
                  </div>

                      <Button id="announceBT" className={classes.Btn} 
                              variant="contained" color="primary" disableElevation onClick={addNews}>
                              <p id="textAnnounceBt"> Announce</p></Button>

                  <div className="spacing" />
                      <Button id="cancelBT" className={classes.Btn} 
                              variant="contained" color="primary" disableElevation
                              onClick={handleClose}><p id="cancelAnnounceBt">Cancel</p>
                      </Button>
                </DialogActions2>
             </Dialog>
      {/* </div> */}
            <div>
        </div>
      {/* </div> */}

      <Grid className="row colorG grab">
          <div className="colorG">
              <div className="newH">
                  <h5 id="announcementheader" className="headAnnounce" >
                      Announcement
                  </h5>
              </div>
                <div className="greatcards-container">
                    <Typography gutterBottom variant="h5" component="h1">
                      <h5 id="importanttitle">Important News</h5>
                        <div className="divider" />
                        </Typography>
                          {allData.map((value, index) => {
                              return value.type === "Important News" ?
                                <ImpNews
                                    key={index}
                                    Name={   
                                <>
                                  <Link to={`/detailpage/${value.id}`} style={{ textDecoration: 'none', color: '#4A4A4A' }}
                                      onClick={()=> console.log(value.id)}> {value.title} </Link>
                                </> 
                                }
                                    img={value.imageUrl}
                                     //cell={value.description}
                                    Date={value.announceDate}  
                                    ID={value.id}       
                                    delete={
                                      <IconButton onClick={()=>{
                                        if(window.confirm('Delete the item?'))
                                          {deleteAnnounce(value.id)};}}><DeleteIcon/></IconButton >
                                     }/>
                                    : null
                                    })}
                                </div>
                            </div>
                    {/* </div> */}

                <div className="colorG">
                    <div className="newH" >
                        <Button id="Buttoncompose" className="customButton" variant="contained" color="primary" disableElevation
                          style={{ backgroundColor: '#485D84' }}
                          onClick={handleClickOpen}>
                          <p id="editfontbutton" className="mediumfont">Compose</p>
                        </Button>
                    </div>

                    {/* <div className="AppBack2">  */}
                  <div className="greatcards-container2">
                      <Typography gutterBottom variant="h5" component="h1">
                      <h5 id="generaltitle">General News</h5>
                          <div className="divider" />
                          </Typography>
                            {allData.map((value, index) => {
                              return value.type !== "Important News" ?
                                <General
                                    key={index}
                                    Name={   
                                  <>
                                    <Link to={`/detailpage/${value.id}` } style={{ textDecoration: 'none', color: '#4A4A4A'}}
                                          onClick={()=> console.log(value.id)}> {value.title} </Link>
                                  </>   }
                                  //cell={value.description}
                                    img={value.imageUrl}
                                    Date={value.announceDate}
                                    //ID ={index.id}       
                                    remove={
                                        /*<IconButton aria-label="delete" onClick={deleteUserHandler}>
                                          <DeleteIcon />
                                        </IconButton>*/
                                        <IconButton onClick={()=>{
                                          if(window.confirm('Delete the item?'))
                                            {deleteAnnounce(value.id)};}}><DeleteIcon/></IconButton >
                                       }/>
                                    
                              : null
                            })}
                       </div>

            
                    </div>
                 

           {/* </div> */}
      </Grid>
    </div>
  );
/*} else {
  return (
      <div >
          <CircularProgress style={{marginLeft: "43%", marginTop: "28%"}}  color="secondary" />
      </div>
     )
    }*/
}


export default Social;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TextField from '@material-ui/core/TextField';
// import ImpNews from '../../Components/Anouncement/Important';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import Divider from '@material-ui/core/Divider';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import Typography from '@material-ui/core/Typography';
// import General from "../../Components/Anouncement/General";
// import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
// import "../../Css/Announcement/Socialcard.css";
// import { Grid } from '@material-ui/core';
// import Arraylist from './Arraylist';
// import Datetoday from '../AllComponent/Datetoday'
// import moment from 'moment';
// import ImageIcon from '@material-ui/icons/Image';
// import { Update } from '@material-ui/icons';
// import { IconButton } from '@material-ui/core';
// //import DropFloor from '../Dropdown/DropFloor';
// import {storage } from '../../base'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#fff",
//     borderRadius: '8px',
//     width: 200,
//     marginBottom: 90,
//     // marginTop: -25,
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },

//     change: {
//       color: 'black'
//     },

//     Font: {
//       fontFamily: [
//         '"Helvetica Neue"',


//       ].join(','),
//     },

//     Move: {
//       marginright: '500%',
//       marginTop: "-5%",
//       display: "block",
//       '& > * + *': {
//         marginTop: theme.spacing(5),
//       },

//       Btn: {
//         marginleft: '5%',
//       },
//     },
// },

//   importimgbtn: {
//     height: '38px',
//     width: '38px',
//     paddingRight: theme.spacing(5),
//   }

// }));

// const useStyles2 = makeStyles({
//   dialog: {
//     position: 'absolute',
//     // left: 0,
//     // top: 0,
//     bottom: -33,
//     right: 10,
//     minWidth: "650px",
//     minHeight: "560px",
//     maxHeight: "560px",
//     borderRadius: '8px',
//   },
//   imgbtn: {
//     height: '33px',
//     weight: '33px'
//   },
//   importimgbtn: {
//     height: '38px',
//     width: '38px',
//     marginLeft: '28px'
//   }
//   // paper: { minWidth: "500px" },
// });

// const DialogActions2 = withStyles((theme) => ({
//   root: {
//     paddingBottom: theme.spacing(5),
//     paddingRight: theme.spacing(3),
//   },

// }))(MuiDialogActions);


// const api = axios.create({
//   baseURL: '/announcement/announcement'
// })


// function Social() {

//   const classes2 = useStyles2();
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [currentAnnounce, setCurrentAnnounce] = useState(0)

//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleChange = e => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       error => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref()
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             setUrl(url);
//           });
//       }
//     );
//   };

//   console.log("image: ", image);


//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//     // console.log(currentAnnounce)
//   };

//   const imagefunction = () => {
//     console.log("CLICKED");
//   }

//   const [allData, setAllData] = useState([]);
//   const [filteredData, setFilteredData] = useState(allData);
//   // const handleSearch = (event) => {
//   //   let value = event.target.value.toLowerCase();
//   //   let result = [];
//   //   console.log(value);
//   //   result = allData.filter((data) => {
//   //     return data.tite.search(value) != -1;
//   //   });
//   //   setFilteredData(result);
//   // }

//   useEffect(() => {
//     // axios('https://60aa459d66f1d000177729b4.mockapi.io/api/v1/announcement')
//     // axios('https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/imandgen')

//     axios('/announcement/announcements')
//       .then(response => {
//         console.log("hi" + response.data)
//         setAllData(response.data);
//         setFilteredData(response.data);
//       })
//       .catch(error => {
//         console.log('Error getting fake data: ' + error);
//       })
//   }, []);

//   // onClick={this.createNew}
//   const addNews = async () => {
//     let res = await api.post('/', {
//       "Title": title,
//       "TypeId": parseInt(currentAnnounce),
//       "AnnounceDate": datecreate,
//       "Description": descrip,
//       //"ImageUrl": "https://cdn.wallpapersafari.com/36/96/7cRSqV.png",
//       "ImageUrl": url,
//       "Likes": 0,
//       "Comments": 0,
//       "StaffId": 1
//     })
//   }

//   const DeleteAnnounce =(id)=>{
//     axios.post(`/announcement/announcement/${id}`)
//     .then(()=>{
//       setAllData(
//         allData.filter((row)=>{
//           return row.id !=id;
//         })
//       )
//     })

//   }

//   const [title, setTitle] = useState("")
//   // const [type, setType] = useState(0)
//   const [datecreate, setDatecreate] = useState("")
//   const [descrip, setDescrip] = useState("")

//   //   const handleChange = (e) => {
//   //     setTitle({value: e.target.value})
//   // }


//   return (
//     <div>
//       <div className="row" style={{ marginLeft: '-15px', marginRight: '0px', border: 'none' }}>
//         <Datetoday />
//       </div>

//       {/* <div className="col-md-2"> */}
//       {/* <div className={classes.Move} > */}
//       {/* <Button variant="contained" color="primary" disableElevation
//           style={{ backgroundColor: '#485D84' }}
//         onClick={handleClickOpen}>
//         Compose
//       </Button>    */}
//       <Dialog
//         classes={{ paper: classes2.dialog }}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="edit-apartment"
//       >
//         {/* <DialogTitle id="edit-apartment"> */}
//         <h5 id="newannouncetitle">  New Announcement </h5>
//         {/* </DialogTitle> */}
//         <div className="divider"> </div>

//         <DialogContent>
//           <DialogContentText>
//           </DialogContentText>
//           <div className="movetotop">
//             <form noValidate>
//               <div>
//                 <p>
//                   <label id="titletitle"  >Title</label>
//                   <div className="spacing12"></div>
//                   <input
//                     className="titleinput"
//                     placeholder="Title"
//                     type="Buildingname"
//                     name="text"
//                     noValidate
//                     onChange={(event) => {
//                       setTitle(event.target.value)
//                     }}
//                   />
//                 </p>
//               </div>

//               <div >
//                 <form>
//                   <label id="typetitle" htmlFor="Province" >Type</label>
//                   <div className="spacing9"></div>
//                   <Arraylist
//                     url='/announcement/type-announcements'
//                     save={currentAnnounce => setCurrentAnnounce(currentAnnounce)}
//                   />
//                 </form>


//               </div>
//               <div className="spacing12"></div>

//               <div >
//                 <p>
//                   <label id="datetitle" htmlFor="Date">Date</label>
//                   <div className="spacing12"></div>
//                   <input
//                     className="dateinput"
//                     placeholder="Date"
//                     type="date"
//                     name="Date"
//                     noValidate
//                     onChange={(event) => {
//                       setDatecreate(event.target.value)
//                     }}
//                   />
//                 </p>
//               </div>

//               <div className="Description">
//                 <label id="descriptiontitle" htmlFor="Date">Description</label>

//                 <textarea className="Des"
//                   placeholder="Description"
//                   type="text"
//                   name="Description"
//                   noValidate
//                   onChange={(event) => {
//                     setDescrip(event.target.value)
//                   }}
//                 />
//               </div>

//             </form>
//           </div>

//         </DialogContent>
//         <DialogActions2 >

//           <IconButton className={classes.importimgbtn} onClick={imagefunction}>
//             <ImageIcon className={classes2.importimgbtn} style={{ color: '#4A4A4A' }} /> 
//             <input clasName={classes.Choosefile}
//                  //size="40"
//                 type="file" 
//                 onChange={handleChange} />
        
//                 <button 
//                     onClick={handleUpload}>Upload
//                  </button>
//                  <br/>
//                 {url}
//                 <br />
//             </IconButton>



//           {/* <input type="file">
          
          
          
//           </input> */}
//           <Button id="announceBT" className={classes.Btn} variant="contained" color="primary" disableElevation

//             onClick={addNews}>
//             <p id="textAnnounceBt"> Announce</p>
//           </Button>


//           <div className="spacing" />
//           <Button id="cancelBT" className={classes.Btn} variant="contained" color="primary" disableElevation
//             onClick={handleClose}>
//             <p id="cancelAnnounceBt">Cancel</p>
//           </Button>
//         </DialogActions2>
//       </Dialog>
//       {/* </div> */}
//       <div>

//       </div>
//       {/* </div> */}

//       <Grid className="row colorG grab">
//         <div className="colorG">
//           <div className="newH">
//             <h5 id="announcementheader" className="headAnnounce" >
//               Announcement
//             </h5>
//           </div>
//           {/* <div className="AppBack">                     */}
//           <div className="greatcards-container">
//             {/* <div className="row">
//                   </div> */}
//             <Typography gutterBottom variant="h5" component="h1">
//               <h5 id="importanttitle">Important News</h5>
//               <div className="divider" />
//             </Typography>
//             {allData.map((value, index) => {
              
//               return value.type === "Important News" ?
//                 <Link to={`/detailpage/${value.id}`} onClick={()=> console.log(value.id)}>
//                   <ImpNews
//                     key={index}
//                     Name={ value.title}
//                     img={value.imageUrl}
//                     //cell={value.description}
//                     Date={value.announceDate}  
//                     ID={value.id}       
//                     />
                   
//                 </Link>


//                 : null

                


//             })}
//           </div>
//         </div>
//         {/* </div> */}

//         <div className="colorG">
//           <div className="newH" >

//             <Button id="Buttoncompose" className="customButton" variant="contained" color="primary" disableElevation
//               style={{ backgroundColor: '#485D84' }}
//               onClick={handleClickOpen}>
//               <p id="editfontbutton" className="mediumfont">Compose</p>
//             </Button>
//           </div>

//           {/* <div className="AppBack2">  */}
//           <div className="greatcards-container2">

//             <Typography gutterBottom variant="h5" component="h1">
//               <h5 id="generaltitle">General News</h5>
//               <div className="divider" />
//             </Typography>
//             {allData.map((value, index) => {
//               return value.type !== "Important News" ?
//                 <General
//                   key={index}
//                   Name={value.title}
//                   //cell={value.description}
//                   img={value.imageUrl}
//                   Date={value.announceDate}
//                   //ID ={index.id}             
//                 />

//                 : null
//             })}
//           </div>

//         </div>
//         {/* </div> */}
//       </Grid>
//     </div>
//   );
// }

// export default Social;
