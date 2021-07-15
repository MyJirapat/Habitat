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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: -60,  
  },

  Input:{
    width:"180%",
    marginRight:70
 
  },

  Button:{
  
    marginLeft: "67%"
    },

  paper: {
    padding: theme.spacing(2),
    maxWidth: "70%",
    marginLeft: "10%", 
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
    width: 50,
    padding: theme.spacing(1),
    marginTop: '4%',
    
  },
}));

export default function แสดงความคิดเห็น() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table >
            <TableRow className={classes.heder} >     
                <TableCell >
                  <h4>Comment</h4>      
                </TableCell>
            </TableRow>
        <Grid container spacing={2}>
          <Grid item>
            
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <ButtonBase className={classes.image}>
            </ButtonBase>
              </Grid>
                  <div className="row">     
                    <div className="col-md"> 
                    <Typography >
                      <input className={classes.Input}></input>  
                    </Typography>
                    </div>

                    <div className="col-md"> 
                        <Button className={classes.Button}>send</Button>
                       </div>
                    </div>
              
              
            
               
            </Grid>        
          </Grid> 
        </Grid>
      </Table>
    </Paper>
  </div>







  );
}

