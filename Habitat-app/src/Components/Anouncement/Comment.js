import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Cardcomment from './Cardcomment';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 0,  
  },

  Input:{
    width:"180%",
    marginRight:70
 
  },

  Button:{
    height:"35.6px",
    width:"52.6px"
    },

  paper: {
    // padding: theme.spacing(2),
    width: "436px",
    borderRadius: "8.5px",
    height: "606px",
    boxShadow: "0 0px 0px 0 #ffffff"

  },

  image: {
    width: 300,
    height: 308,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  heder:{
    height: "105px",
    position: "relative"
    // padding: theme.spacing(1),
    // marginTop: '4%',
    
  },
  
}));

/*const api = axios.create ({
  baseURL: '/comment/comment'
})*/


export default function Comment(props) {
  const classes = useStyles();
  const postId = props.postId
  const id = useParams()
  
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    console.log(postId)
    axios(`/comment/comments/${postId}`) //changewithpostID
      .then(response => {
        console.log("hi"+response.data)
        setAllData(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
    }, []);


    const [message, setMessage] = useState("")
    const [date, setDate] = useState("2021-07-21")
    ///const [postid, setPostid] = useState(3)
    ///const [personid, setPersonid] = useState(5)

    const addNews = async () => {
      await axios({ 
        url: "/comment/comment",
        method: "POST",
        data:{
          "Message": message,
          "CommentDate": "2021-07-05",
          "PostAnnouncementId":  parseInt(postId),
          "StaffId": 1
        }
      //   "Message": message,
      //   "PostAnnouncementId": 10,
      //  "UserId": personid
        
      }).then(() => {
        setAllData([
            {
                ...allData,
                "Message": message,
                "CommentDate": "2021-07-05",
                "PostAnnouncementId":  parseInt(postId),
                "StaffId": 2
            },
        ]);
        //window.location.href = `/detailpage/${id}`;
        //props.isLog(false)
    });
    
};


     const deletetable=(id) =>{
      axios.post(`/comment/comment/${id}`)
      .then(() => {
        //window.location.href = `/detailpage/${id}`;
        setAllData(
          allData.filter((row) => {
            return row.feeSetId != id;
      })
        );
      });
    };

    
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{position:"relative"}}>
        <Table >
            <div className={classes.heder} >    
            <div style={{marginLeft:"25px", paddingTop:"10.4px",display: "block" }}>
              <p style={{fontSize:"19.4px", fontWeight:"bold", color:"#4A4A4A",display: "inline", }}>
                Comments
              </p>

                <p style={{fontSize:"19.4px", fontWeight:"bold", color:"#4A4A4A",display: "inline", float:'right',marginRight:'13.7px',marginTop:'22px' }}>

                    {props.likes} Likes

                </p>

            </div>

          
            </div>
            <Divider style={{backgroundColor:"#AAAAAA", margin: "0px 13.7px"}}/>
        <Grid container spacing={0}>
          <Grid item>
            
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
              <ScrollView style={{height:'428px',weight:'436px', position:'absolute'}}>
                  {allData.map((value, index) => {
                  return value.message !== "" ? 
                  
                  <Cardcomment
                    key={index}
                    id={value.id}
                    message={value.message}
                    commentDate={moment(value.commentDate).format("L")}
                    role={value.role}
                    firstName={value.firstName}
                    lastName={value.lastName}
                    profileUrl={value.profileUrl}     
                    remove={      
                      <DeleteIcon
                          style={{ marginTop:"100%", color:'#4A4A4A'}}
                          onClick={()=>{
                            if(window.confirm('Delete the item?'))
                          {deletetable(value.id)};}}
                          />}
                  />
                  
                :null
                })}
              </ScrollView>
                {/* <div style={{height:'50px', backgroundColor:'red'}}></div> */}
              <Divider style={{backgroundColor:"#AAAAAA", marginTop: "428px"}}/>
              </Grid>
                  <div style={{margin:"0px 0px 0px 0px" ,display: "block", height:"35.6px", position:"absolute", bottom:"20px",   borderTop: "5px solid red"}}> 
                      <img src="https://firebasestorage.googleapis.com/v0/b/habitat-34ee0.appspot.com/o/50601063_1178218075671311_2091927988328202240_n.jpeg?alt=media&token=8ba089cb-f6df-4c01-9b84-ff903ee720b3"
                      style={{width:"35.6px", height:"35.6px", backgroundColor:"#3FBAB1", borderRadius:"17.8px", position:"absolute", marginLeft:"20px"}}>
                        
                      </img>  
                      <input placeholder="Enter a comment" type="text" className={classes.Input} style={{width:"296px", height:"35.6px",  borderRadius:"17.8px", marginLeft:"68px",fontSize:"13px",position:'absolute'}}
                       onChange={(event) => {
                        setMessage(event.target.value)
                      }}>
                        </input>  
                      <Button onClick={addNews} className={classes.Button} style={{margin:"0px 0px 0px 0px" , position: "absolute", 
                      color:"#485D84", textTransform:"none", fontSize:"16px", marginLeft:"364px"}}>
                        Send</Button>
                  </div>
            </Grid>        
          </Grid> 
        </Grid>
      </Table>
    </Paper>
  </div>

  );
}


