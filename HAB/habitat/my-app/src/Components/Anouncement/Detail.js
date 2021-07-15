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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: -60,
   
  
  },
  paper: {
    padding: theme.spacing(2),
    
    marginLeft: 80,
    maxWidth: "100%",
    
  },
  image: {
    width: 570,
    height: 308,

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    padding: theme.spacing(1),

  },

  heder:{
    width: 50,
    padding: theme.spacing(1),
    marginTop: '3%',
    
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table >
            <TableRow className={classes.heder} >     
                <TableCell >
                  <h4>Important News
                  <Typography>18/04/2021</Typography>
                  </h4>  
                </TableCell>
            </TableRow>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://image.freepik.com/free-vector/megaphone-with-important-announcement-flat_149152-517.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Typography >
                The booster jab could be associated to a "higher risk of adverse reactions", said Jay Butler, the deputy director of the CDC, who is concerned that "more severe – although very rare – side effects" may occur.
                While America has not made a decision on whether to go ahead with booster jabs or not, the UK is taking on the advice from the Joint Committee on Vaccination and Immunisation (JCVI). The JCVI advise booster jabs will "prolong the protection that vaccines provide" – especially in the most vulnerable ahead of the winter months.
                </Typography>
              </Grid>
            </Grid>           
          </Grid>
        </Grid>
        </Table>
      </Paper>
    </div>







  );
}











/*<Paper className={classes.paper}>
<Grid container spacing={2}>
  <Grid item xs={12} sm container>
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs>
      <CardActionArea>
      <img src={props.img} className={classes.media}/>  
      </CardActionArea>
      </Grid>
      <Grid item>
        <Typography variant="body2" style={{ cursor: 'pointer' }}>
         {props.Delete}
        </Typography>
      </Grid>
    </Grid>
    <Grid item>
    </Grid>       
  </Grid>
</Grid>
</Paper>*/