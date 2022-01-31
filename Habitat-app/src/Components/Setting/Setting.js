import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import '../../Css/Setup/Setup.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  root2: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(8),
    marginTop: "-2%",
    margin: 'auto',
    width: 960,
    height: 640
   
  },

  buttonStyle:{
    borderRadius: 18,
    
  },

  Save:{
    borderRadius: 18,
    marginRight: "45%",
    marginTop: "5%"
  },

  image: {
    width: 128,
    height: 110,
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  Head:{
    textAlign: 'center',
  },
  
  ListView:{
    marginRight: '60%'     
  },

}));

export default function ComplexGrid() {
  const classes = useStyles();
  const [name, setName] = useState("set");
  return (
    <div className={classes.root}>   
      <Paper variant="outlined" square className={classes.paper}>
      <h2 
       style={{textAlign: "center"}}>Setup Residence</h2>
          <Grid item xs={13}  container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={18}
                    align="center"
                    style={{ border: "2px solid grey", 
                    borderColor: '#aaaaaa',
                    borderRadius: '5px',
                             marginTop: "3%"}}>
              <List className={classes.root}>
      <ListItem>
      <h5 >Residece</h5>
        <ListItemSecondaryAction>
        <Button 
                  className={classes.buttonStyle} 
                  size="small"
                  variant="contained" 
                  color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}
                  onClick={() => setName("Edit")}
                  >
                  {name}
                </Button>
        </ListItemSecondaryAction>
      </ListItem>
      {/* <br/> */}
      <ListItem>
      <h5>Rooms</h5>
        <ListItemSecondaryAction>
        <Button className={classes.buttonStyle} 
                  size="small"
                  variant="contained" 
                  color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}>
                  Edit
                </Button>
        </ListItemSecondaryAction>
      </ListItem>
      {/* <br/> */}
      <ListItem>  
      <h5>Fee Types</h5>
        <ListItemSecondaryAction>
        <Button className={classes.buttonStyle} 
                  size="small"
                  variant="contained" 
                  color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}>
                  Set
                </Button>
        </ListItemSecondaryAction>
      </ListItem>
      {/* <br/> */}
      <ListItem>
        <h5>Room Types</h5>
        <ListItemSecondaryAction>
        <Button className={classes.buttonStyle} 
                  size="small"
                  variant="contained" 
                  color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}>
                  Set
                </Button>
        </ListItemSecondaryAction>
      </ListItem>
      {/* <br/> */}
      <ListItem>
      <h5>Bank Account</h5>
        <ListItemSecondaryAction>
        <Button className={classes.buttonStyle} 
                  size="small"
                  variant="contained" 
                  color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}>
                  Set
                </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={35}  container>
            <Grid item xs container direction="column" spacing={1}
            direction="row"
            justify="flex-end"
            alignItems="center"
            >
          <Button className={classes.Save} 
                  size="large"
                  variant="contained" 
                  color="primary" disableElevation
                  style={{ backgroundColor: '#485D84',
                  padding: "10px 150px",
                  marginRight: "29%" }}>
                  Save
                </Button>
          </Grid>
          </Grid>
      </Paper>

      </div>

      
   
   
  );
}













/*<Grid item xs={12} sm container >
<Button className
            size="large"
            variant="contained" 
            color="primary" disableElevation
            style={{ backgroundColor: '#485D84' }}>
           Save
          </Button>

          </Grid>*/


















































/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"80%",
    height:420,
    marginTop: "-5%",
    marginLeft: "12%"
  },

  buttonStyle:{
    borderRadius: 19
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },

  heder:{
    alignItems: 'center',
    display: 'flex',
    justifyContent:'center'
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent >
      <Grid container spacing={2}>
            <Grid item xs container direction="column" spacing={2}>    
            
            <Typography >
                <h5> Room </h5> 
            </Typography>
            <br/>
            <br/>
            <Typography >
            <h5> Room </h5> 
            </Typography>
            <br/>
            <br/>
            <Typography>
            <h5> Room </h5> 
            </Typography>
            <br/>
            <br/>
            <Typography >
            <h5> Room </h5> 
            </Typography>
            <br/>
            <br/>
            <Typography gutterBottom variant="subtitle1">
            <h5> Room </h5> 
            </Typography>


            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography >
              <Button 
                  className={classes.buttonStyle} 
                  variant="contained" 
                  color="primary" disableElevation>
                Edit
              </Button>
              </Typography>
              <br/>
              <br/>
              <Typography >
                <Button className={classes.buttonStyle} 
                  variant="contained" 
                  color="primary" disableElevation>
                  Edit
                </Button>
              </Typography>
              <br/>
              <br/>
              <Typography >
                <Button className={classes.buttonStyle} variant="contained" color="primary" disableElevation>Edit</Button>
              </Typography>
              <br/>
              <br/>
              <Typography >
                <Button className={classes.buttonStyle} variant="contained" color="primary" disableElevation>Set</Button>
              </Typography>
              <br/>
              <br/>
              <Typography >
                <Button className={classes.buttonStyle} variant="contained" color="primary" disableElevation>Set</Button>
              </Typography>   
            </Grid>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">   
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
        
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
      
    </Card>
    
  );
}*/

/*<h2 className={classes.heder}>Setup Residence</h2>*/