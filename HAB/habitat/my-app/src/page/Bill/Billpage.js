import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NavLink from "../../Components/NavLink/NavLink";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
//import Table from "../Component/Table";
import Button from "@material-ui/core/Button";

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';




import Bill from "../../Components/Bill/Bill";




const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:"#8795b6"    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },

  Typo:{
    textAlign: "left",
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Habitat
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider/>

        <List>
        <NavLink to="/login" icon={InboxIcon}>
          Room management
          </NavLink>
          <NavLink to="/about" icon={MailIcon}>
          Bill Payment
          </NavLink>
          <NavLink to="/login" icon={MailIcon}>
          Room management
          </NavLink>
        </List>
        <Divider />
        <List>
        <NavLink to="/login" icon={MailIcon}>
          Logout
        </NavLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Typography paragraph>
        <h3> <CalendarTodayIcon/> 4 June 2021 </h3>
          <h4>Bill</h4>
        </Typography>
        <Typography paragraph>
        <div class="container d-flex justify-content-end">
                  <div className="row"> 
                    <div className="col align-self-end">
                    <Paper component="form" className={classes.Searchstyle}>
                        <TextField className={classes.Field}
                            size="small"
                            variant="outlined" 
                            label="Search"     
                            placeholder="Search..."
                        />
                    </Paper> 
                    </div>

                    <div className="col align-self-end">
                    <Paper component="form" className={classes.Searchstyle}>
                        <TextField className={classes.Field}
                            size="small"
                            variant="outlined" 
                            label="Search"     
                            placeholder="Search..."
                        />
                    </Paper> 
                    </div>            

                    <div className="col align-self-end">
                    <Paper component="form" className={classes.Searchstyle}>
                        <TextField className={classes.Field}
                            size="small"
                            variant="outlined" 
                            label="Search"     
                            placeholder="Search..."
                        />
                    </Paper> 
                    </div>

                    <div className="col align-self-end">
                    <Paper component="form" className={classes.Searchstyle}>
                        <TextField className={classes.Field}
                            size="small"
                            variant="outlined" 
                            label="Search"     
                            placeholder="Search..."
                        />
                    </Paper> 
                    </div>        
            
              </div>              
             </div>

        <div class="container d-flex-end">
        <div className="row">        
          <Bill
                header="Floor1"
                room1="101"
                status1="27/04/2021"
                PreviousDate1="4,700.00"
                previousReading1="575"
                curentReading1="90"
                usage1="0"
                option1="5,366.00"

                room2="102"
                status2="27/04/2021"
                PreviousDate2="4,700.00"
                previousReading2="575"
                curentReading2="90"
                usage2="0"
                option2="5,366.00"


                room3="103"
                status3="27/04/2021"
                PreviousDate3="4,700.00"
                previousReading3="575"
                curentReading3="90"
                usage3="0"
                option3="5,366.00"

                room4="104"
                status4="-"
                PreviousDate4="-"
                previousReading4="-"
                curentReading4="-"
                usage4="-"
                option4="-"

                room5="105"
                status5="27/04/2021"
                PreviousDate5="5,700.00"
                previousReading5="575"
                curentReading5="90"
                usage5="0"
                option5="5,366.00"
      
         />

         </div>

         <br/>


         <div className="row">        
          <Bill
                 header="Floor1"
                room1="101"
                status1="27/04/2021"
                PreviousDate1="4,700.00"
                previousReading1="575"
                curentReading1="90"
                usage1="0"
                option1="5,366.00"

                room2="102"
                status2="27/04/2021"
                PreviousDate2="4,700.00"
                previousReading2="575"
                curentReading2="90"
                usage2="0"
                option2="5,366.00"


                room3="103"
                status3="27/04/2021"
                PreviousDate3="4,700.00"
                previousReading3="575"
                curentReading3="90"
                usage3="0"
                option3="5,366.00"

                room4="104"
                status4="-"
                PreviousDate4="-"
                previousReading4="-"
                curentReading4="-"
                usage4="-"
                option4="-"

                room5="105"
                status5="27/04/2021"
                PreviousDate5="5,700.00"
                previousReading5="575"
                curentReading5="90"
                usage5="0"
                option5="5,366.00"
      
         />

         </div>


         
         </div>
         

      <div className="container">
            <div className="row">
                  <div className="col">                
                  </div>
            </div>

            <div className="row">
                  <div className="col">         
                  </div>         
            </div>

            <div className="row">
                  <div className="col">             
                  </div>                
            </div>

      </div>     
        </Typography>            
      </main>
    </div>
  );
}