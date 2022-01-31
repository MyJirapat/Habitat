import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Roomcard from "../../Components/Room/Roomcard";
import Card from '@material-ui/core/Card';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    marginTop: "-2%",
    margin: 'auto',
    height: "120%"
  },

  heder:{
    width: '100%',
    padding: theme.spacing(2),
    margin: '50%',
    
  },
  container: {
    maxHeight:440,
    width: '100%'
  },
  root2: {
    minWidth: 275,
  },
}));

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
  <div>    
    <Card className={classes.root} variant="outlined">
        <Table >
         <TableHead className={classes.heder}>
            <TableRow >     
                <TableCell className={classes.heder}>
                  <h4>Floor 1</h4>
                </TableCell>
            </TableRow>
            </TableHead>
    <TableBody>
      <br/>
     <Grid container spacing={2}>
        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="101"
                    Type="Standard"/>           
                </div>
        </Grid>
        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="102"
                    Type="Standard"/>   
                </div>
        </Grid>

        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="103"
                    Type="Standard"/>   
                </div>
        </Grid>
        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="104"
                    Type="Standard"/>       
                </div>
        </Grid>

        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="105"
                    Type="Standard"/>         
                </div>
        </Grid>
        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="106"
                    Type="Standard"/>   
                </div>
        </Grid>
        <Grid item xs={3}>
                    <div className="col-md">
                    <Roomcard
                    Roomname="107"
                    Type="Standard"/>   
                </div>
        </Grid>
      </Grid>        
          </TableBody>
        </Table> 
    </Card>
</div>  

  );
}