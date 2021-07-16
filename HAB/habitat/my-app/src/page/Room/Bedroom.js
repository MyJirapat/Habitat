import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
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
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import ReactDOM from "react-dom";
import Nav from 'react-bootstrap/Nav'
import TabPane from 'react-bootstrap/TabPane'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    marginTop: '-6%'   
  },

  Cards:{
    width: '100%',
    padding: theme.spacing(2),
    marginTop: "-7%",
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
    marginLeft: "60%",
    marginTop: "-8%"

  }

}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />     
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph className={classes.Heading} >
            <div class="container d-flex-end">
                <h4>Room Management</h4>
            </div>
          </Typography> 

    <div class="container d-flex-end">       
      <div className="row">                
        <div className="col align-self-start">    
        
        </div>

        <div className="col align-self-start">    
        
        </div>

        <div className="col align-self-start">    
        
        </div>

      <div className="col align-self-start">    
        
      </div>

      <div className="col align-self-start">    
        
      </div>
    </div> 
  </div>
    
  <Tab.Container  defaultActiveKey="home" >
    <div class="container d-flex-end">        
      <Card className={classes.Cards} variant="outlined" >
        <Table >
         <TableHead className={classes.heder}>
            <TableRow >     
              <TableCell className={classes.heder}>
                <h4>Bed</h4>
                <Nav variant="pills"className="flex">
                  <Nav.Item >
                    <Nav.Link eventKey="home">A-Phanuwat</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">B-Vacant</Nav.Link>
                  </Nav.Item>      
                </Nav>    
              </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
     <br/>
     <Grid container spacing={2}>
        <Grid item xs={3}>
            <div className="col-md">
                          
            </div>
        </Grid>

        
        <Grid item xs={6} >
        <Tab.Content>
        <Tab.Pane eventKey="home">
            <div className="col-md">
              <form noValidate>      
              <div className="password">
                <label htmlFor="Address">Address</label>
                <input   
                  placeholder="Address"
                  type="text"
                  name="Address"
                  noValidate           
                />    
              </div>

              <div className="firstName">
                <label htmlFor="Age">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  name="Phone Number"
                  noValidate       
                />
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  name="lastName"
                  noValidate        
                />         
              </div>
              <div className="Building">
                <label htmlFor="BuildingName">Building Name</label>
                <input   
                  placeholder="Building Name"
                  type="Buildingname"
                  name="text"
                  noValidate           
                />    
              </div>

              <div className="SubDistric">
                <label htmlFor="Sub-Distric">Sub-distric</label>
                <input   
                  placeholder="Sub-distric"
                  type="Sub-Distric"
                  name="Sub-Distric"
                  noValidate           
                />    
              </div>

              <div className="District">
                <label htmlFor="District">District</label>
                <input   
                  placeholder="District"
                  type="District"
                  name="District"
                  noValidate           
                />    
              </div>

              <div className="zipcode">
                <label htmlFor="District">Zipcode</label>
                <input   
                  placeholder="Zipcode"
                  type="text"
                  name="District"
                  noValidate           
                />    
              </div>

              <div className="zipcode">
                <label htmlFor="District">Zipcode</label>
                <input   
                  placeholder="Zipcode"
                  type="text"
                  name="District"
                  noValidate           
                />    
              </div>

              <div className="firstName">
                <label htmlFor="Age">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  type="text"
                  name="Phone Number"
                  noValidate       
                />
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  name="lastName"
                  noValidate        
                />         
              </div>
            </form>
          </div>
          </Tab.Pane>
      </Tab.Content>
      </Grid>
      
   
        <Grid item xs={3}>
                    <div className="col-md">
                   
                  </div>
        </Grid>
        <Grid item xs={3}>
                    <div className="col-md">
                        
                    </div>
        </Grid>

        <Grid item xs={3}>
                    <div className="col-md">
                          
                  </div>
        </Grid>
        <Grid item xs={3}>
                    <div className="col-md">
                    
                  </div>
        </Grid>
      </Grid>        
          </TableBody>
        </Table> 
    </Card>       
      </div> 
      </Tab.Container>
      </main>
</div>
  );
}