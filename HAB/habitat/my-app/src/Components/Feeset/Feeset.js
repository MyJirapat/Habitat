import React from 'react';
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
import TableContainer from "@material-ui/core/TableContainer";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Feecard from "../../Components/Feeset/Feecard";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const columns = [
  { id: "room", 
  label: "Room",
   minWidth: 170,
   align: "left"
  },

 
  {
    id: "status",
    label: "Date",
    minWidth: 150,

   
  },
  {
    id: "previous date",
    label: "Room Price",
    minWidth: 130,
    align:"right"
    
  },
  {
    id: "previous reading",
    label: "Electricity",
    minWidth: 150,
    align:"right"
    
  },

  {
    id: "current reading",
    label: "Water",
    minWidth: 150,
    align:"right"
    
  },

  {
    id: "usage",
    label: "Others",
    minWidth: 180,
    align:"right"
    
  },
  {
    id: "option",
    label: "Totals",
    minWidth: 200,
    align:"right"
  }
];


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },

  heder:{
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '4%',
    
  },


  Card:{
    width: '100%',
    padding: theme.spacing(3),
    margin: 'auto',
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Btn:{
    marginLeft: "92%",
    marginTop: "-6%",

   
  }


}));

export default function Bill(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className="container ">
        <Card className={classes.Card} variant="outlined">
            <Table  aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>Fee Set</h4>
                            <Button  className={classes.Btn}
                                variant="contained" color="primary" disableElevation
                                style={{ backgroundColor: '#485D84' }}>Create</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>  
            <TableBody>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div className="col-sm">
                        <Feecard
                            Set="Set A"
                            Roomprice="Standard"
                            Electric="Electricity"
                            Water="water"
                            delete={<DeleteOutlinedIcon size="small"/>}/>           
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className="col-sm">
                        <Feecard
                            Set="Set B"
                            Roomprice="Standard"
                            Electric="Electricity"
                            Water="water"
                            delete={<DeleteOutlinedIcon size="small"/>}/>           
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className="col-sm">
                        <Feecard
                            Set="Set C"
                            Roomprice="Standard"
                            Electric="Electricity"
                            Water="water"
                            delete={<DeleteOutlinedIcon size="small"/>}/>           
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className="col-sm">
                        <Feecard
                            Set="Set D"
                            Roomprice="Standard"
                            Electric="Electricity"
                            Water="water"
                            delete={<DeleteOutlinedIcon size="small"/>}/>           
                    </div>
                </Grid>
        </Grid>
        </TableBody>
        </Table>    
      <CardActions>
        <Button size="small">{props.Btn}</Button>
      </CardActions>
    </Card>
    </div>
   
  );
}



/*<Feecard
                        Set="Set A"
                         Roomprice="Standard"
                         Electric="Electricity"
                         Water="water"
                         delete={<DeleteOutlinedIcon size="small"/>}/> */