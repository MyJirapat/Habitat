import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { useParams } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';

//import "../../Css/Fee/Fee.css"
import axios from "axios";
import Chip from '@material-ui/core/Chip';
import { ScrollView } from 'react-native';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },

  heder:{
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '4%',
    
  },
  Cards:{
    width: '78%',
    padding: theme.spacing(3),
    margin: 'auto',
  },
  Dialogcards:{
    width: '100%',
    padding: theme.spacing(5),
    margin: 'auto',
  },
  Card:{
    width: '83%',
    padding: theme.spacing(3),
    margin: 'auto',
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  Btn:{
    marginLeft: "88%",
    marginTop: "0.5%",  
    
  },

  head:{
    marginLeft: "9%",  
  },
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
    color: "#4A4A4A",
    marginRight: "150%"
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

PriceTag: {
  height: "24px",
  width: "100px",
  backgroundColor: '#D8D8D8',
  borderRadius: '13px',
  fontSize: '13px',
  color: '#4A4A4A',
  fontWeight: '400',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: "center",

  PriceTagFont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: '400',
    fontcolor: "#4a4a4a"
},

},

savebutton: {
width: "407px",
height: "42.8px",
position: "absolute",
top: 620,
left: "35%"

},

}));

export default function CreateFeeset(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen =() =>{
    setOpen(true)
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const {id} = useParams()
  const [price, setPrice]= useState("");
  const [feetype, setFeetype] =useState([]);
  //const [addFeetypename, setAddfeetypename]= useState(false);
  //const [addFeeprice, setAddfeeprice]= useState("");
  //const [feesetname, setFeesetname]= useState("");
  //const [check, setCheck]= React.useState(false)
  //const [data, setData]= React.useState(false)
  //const [arrayList, setArrayList] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [addFeesetname, setAddfeesetname]= useState("");
  const [roomprice, setRoomprice]= useState("");
  const [isfeeloading, setIsfeeloading] = useState(false);


  useEffect(() => {
    axios('/feetype/fee-types')
    .then(response => {
         console.log(response.data)
    setFeetype(response.data);
    setIsfeeloading(true);
    
})
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

   const deletetable=(id) =>{
    axios.post(`/feetype/fee-type/${id}`)
    .then(() => {
      setFeetype(
        feetype.filter((row) => {
          return row.id != id;
        })
      );
    });
  };

const AddFeeSet = event => {
  event.preventDefault();
    axios.post("/feeset/create-feeset", 
    {
      "FeeSetName": addFeesetname,
      "RoomPrice": parseInt(roomprice),
      "FeeTypeIds":selected
    }).then((response)=>{
      window.location.href = `/feesets_sp/${id}`;
      
      console.log(response);
    })
  };

const handleClick = (event, name) => {
  const selectedIndex = selected.indexOf(name);

  let newSelected = [];
 if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, name);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1)
    );
  }
  setSelected(newSelected);
};
console.log(selected)

const isSelected = (name) => selected.indexOf(name) !== -1;
  
if (isfeeloading){
  return (
      <div className="container ">
      <div>
      <ScrollView>
        <div style={{ width: '100%', height: '549px' }}>
        <Card className={classes.Card} variant="outlined">
            <Table  aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>Create Fee Set</h4>      
                        </TableCell>
                    </TableRow>
                </TableHead>  
            <TableBody>
            <br/>
            <div className="container ">
              <div style={{ display: "flex" }} className={classes.setwidth2}>
                    <div style={{ width: "45%" }} >
                        {/*<div htmlFor="Phone" className={classes.eachtitle} style={{paddingLeft: "98px", paddingBottom: 5 }}>Phone Number</div>*/}
                        <input
                            className={classes.setrow}
                            placeholder="Name"
                            type="text"
                            //name="Phone Number"
                            style={{ position: "absolute", width: "36%", right: 480 }}
                            onChange={(event) => {
                              setAddfeesetname(event.target.value);
                          }} 
                          />
                    </div>
                    <div style={{ width: "45%" }}>
                        {/*<div htmlFor="lastName" className={classes.eachtitle} style={{ paddingLeft: "80px", paddingBottom: 5 }}>Email</div>*/}
                        <input
                            className={classes.setrow}
                            placeholder="Room Price"
                            type="text"
                            style={{ position: "absolute", width: "36%", left: 470 }}
                            //name="lastName"
                            onChange={(event) => {
                              setRoomprice(event.target.value);
                          }} 
                           />
                    </div>
                </div>


                <h5 className={classes.head}> 
                    Select Fee Types <Button onClick={handleClickOpen}>
                           {/*<AddIcon/>*/}
                </Button>  
              <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="edit-apartment">
                <DialogTitle id="edit-apartment">Create Fee Type Name</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                <div className="Building">
                <Card className={classes.Dialogcards} variant="outlined">
                  <Table >
                    <TableBody>      
                    {feetype.map((row,index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                return(      
                  <TableRow 
                     
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index.id}
                      selected={isItemSelected}

                      >       
                <TableCell>
                    <Checkbox
                       onClick={(event) => handleClick(event, row.id)}
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{ "aria-labelledby": labelId }}

                  />
              </TableCell>


              <TableCell align="Left">
                {row.feeTypeName == 'Electricity'|| row.feeTypeName =='Water' ? row.feeTypeName+"(price/unit)": row.feeTypeName }

              </TableCell>
              <TableCell align="right">
              <Chip label={row.feeTypePrice}/> 
              </TableCell>
            </TableRow>
            );
        })}
        </TableBody>                     
      </Table>  
    </Card>
  </div> 
  
  <DialogActions >
      <Button 
          variant="contained" 
          color="primary" disableElevation
          style={{ backgroundColor: '#485D84' }}>
      Create
      </Button>   
      <Button variant="contained"  disableElevation
          onClick={handleClickOpen}>
          cancel
      </Button>    
      </DialogActions>
  </DialogContentText>
  </DialogContent>      
   </Dialog>
      </h5> 
                <Card className={classes.Cards} variant="outlined">
                  <Table >
                    <TableBody>      
                    {feetype.map((row,index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return(      
                      <TableRow 
                          onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          //key={index.id}
                          selected={isItemSelected} >       
                        <TableCell>
                          <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{ "aria-labelledby": labelId }}/>
                        </TableCell>
                         <TableCell align="Left">
                            <h5> {row.feeTypeName} </h5>
                         </TableCell>
                         <TableCell>
                            <div className={classes.PriceTag}>
                              <h6 className={classes.PriceTagFont}> {row.feeTypePrice} THB </h6>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                  })}
        </TableBody>                     
      </Table>  
          </Card>
      </div>
      </TableBody>
    </Table>   

     <div className="container-fruid ">
      <Button 
          onClick={AddFeeSet}
          className={classes.Btn}
          variant="contained" color="primary" disableElevation
          style={{ backgroundColor: '#485D84' }}>
        Save
      </Button>            
  </div>      
</Card>   
</div>
      </ScrollView>
     {/* <Link to="/feesets">
        <Button
          onClick={AddFeeSet}
           className={classes.savebutton}
           variant="contained" color="primary" disableElevation
           style={{ backgroundColor: '#485D84' }} >
           Save
       </Button>
      </Link>*/}
    </div>        
</div>    
  );
} else {
  return (
      <div>
          <CircularProgress color="secondary" />
      </div>
    )
  }
}