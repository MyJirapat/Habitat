import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';

import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const columns = [
  { id: "name", label: "No", minWidth: 170 },

  { id: "code", 
  label: "Buildingname", 
  minWidth: 170,
},
  {
    id: "population",
    label: "People",
    minWidth: 170,
   
  },
  {
    id: "size",
    label: "Room",
    minWidth: 170,
    
  },
  {
    id: "density",
    label: "Amount",
    minWidth: 170,
    
  }
];


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  },

  Head:{
    backgroundColor: '#8795b6',
    color: '#ffff'
  },

  dialog: {
    marginLeft: '95%',
    marginTop: "-4%",
    display: "block",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    
  },
}));


export default function StickyHeadTable() {
  const classes = useStyles();

  const [no, setNo] =useState(0);
  const [buildingname, setBuildingname] =useState("");
  //const [roomnumber, setRoom] =useState(0);
  const [people, setPeople] =useState(0);
  const [amount, setAmount] =useState(0);
  const [bill, setBill] =useState("");




  const [data, setData] = useState([]);



  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 
  useEffect(() => {
    fetch("http://localhost:3001/tablehistory")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  
  const addtable = () => {
    Axios.post("http://localhost:3001/create", {
      no: no,
      buildingname: buildingname,
      //roomnumber: roomnumber,
      people: people,
      amount: amount,
      
    }).then(() => {
      setData([
        ...data,
        {
          no: no,
      buildingname: buildingname,
      //roomnumber: roomnumber,
      people: people,
      amount: amount,
      
        },
      ]);
    });
  };


  const deletetable=(id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setData(
        data.filter((row) => {
          return row.id != id;
        })
      );
    });
  };

  /*const updatestatus = (id) => {
    Axios.put("http://localhost:3001/update", { amount: newamount, id: id }).then(
      (response) => {
        setData(
          data.map((row) => {
            return row.id == id
              ? {
                  id: row.id,
                  no: row.no,
                  buildingname: row.buildingname,
                  people: row.people,
                  amount: newamount,
                 
                }
              :row;
          })
        );
      }
    );
  };*/

  






  return (
   
 <div className>
    <Typography paragraph>
    <Button  className={classes.dialog} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, edit .
          </DialogContentText>

          <TextField autoFocus
                  margin="dense"
                  id="no"
                  label="No"
                  type="text"
                  fullWidth
                  onChange={(event) =>{
                   setNo(event.target.value)
                  }}
                 
          />
          <TextField autoFocus
                  margin="dense"
                  id="buildingname"
                  label="Buildingname"
                  type="text"
                  fullWidth
                  onChange={(event) =>{
                    setBuildingname(event.target.value)
                   }}
          />

         
          <TextField autoFocus
                margin="dense"
                id="people"
                label="People No"
                type="text"
                fullWidth
                onChange={(event) =>{
                  setPeople(event.target.value)
                 }}
          />

          <TextField autoFocus
                margin="dense"
                id="amount"
                label="Amout"
                type="text"
                fullWidth
                onChange={(event) =>{
                  setAmount(event.target.value)
                 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={addtable} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Typography>


    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                className={classes.Head}    
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              {row.no}  
              
              </TableCell>
              <TableCell align="left"> {row.buildingname} </TableCell>
              <TableCell align="left">{row.people}</TableCell>
              <TableCell align="left">{row.people}</TableCell>
              <TableCell align="left">{row.amount} </TableCell>
              <TableCell align="left"> <Button onClick={() =>{deletetable(row.id)}} color="primary">
            delete
          </Button></TableCell>

      
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>

    
  );
}
