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
import NavLink from "../Component/NavLink";
//import Table from "../Component/Table";
import Button from "@material-ui/core/Button";
import SearchBar from "../Dropdown/SearchBar";
import Building from "../Dropdown/Building";
import Floor from "../Dropdown/Floor";

import Simplecard from "./Simplecard";
import Tab from "./Tab";
import Tabs from "./Tabs";


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
        </Typography>
        <Typography paragraph>
      <Tabs/>

      <div className="container">
       
            <div className="row">
                  <div className="col">
                        <Simplecard 

                        Text="Floor 1"
                        room1="101"
                        status1="Inhabitat"
                        PreviousDate1="27/04/2021"
                        previousReading1= "3,962"
                        curentReading1="Empty"
                        usage1="96"

                        room2="102"
                        status2="habitat"
                        PreviousDate2="27/04/2021"
                        previousReading2= "3,962"
                        curentReading2="Empty"
                        usage2="96"

                        room3="103"
                        status3="Inhabitat"
                        PreviousDate3="27/04/2021"
                        previousReading3= "3,962"
                        curentReading3="Empty"
                        usage3="96"

                        room4="104"
                        status4="Inhabitat"
                        PreviousDate4="27/04/2021"
                        previousReading4= "3,962"
                        curentReading4="Empty"
                        usage4="96"


                        room5="104"
                        status5="Inhabitat"
                        PreviousDate5="27/04/2021"
                        previousReading5= "3,962"
                        curentReading5="Empty"
                        usage5="96"
                        />
                         
                  </div>
            </div>

            <div className="row">
                  <div className="col">
                        <Simplecard 
                        Text="Floor 2"

                        room1="201"
                        status1="Inhabitat"
                        PreviousDate1="27/04/2021"
                        previousReading1= "3,962"
                        curentReading1="Empty"
                        usage1="96"

                        room2="202"
                        status2="habitat"
                        PreviousDate2="27/04/2021"
                        previousReading2= "3,962"
                        curentReading2="Empty"
                        usage2="96"

                        room3="203"
                        status3="Inhabitat"
                        PreviousDate3="27/04/2021"
                        previousReading3= "3,962"
                        curentReading3="Empty"
                        usage3="96"

                        room4="204"
                        status4="Inhabitat"
                        PreviousDate4="27/04/2021"
                        previousReading4= "3,962"
                        curentReading4="Empty"
                        usage4="96"


                        room5="205"
                        status5="Inhabitat"
                        PreviousDate5="27/04/2021"
                        previousReading5= "3,962"
                        curentReading5="Empty"
                        usage5="96"
                        />      

                  </div>
                  
                 
            </div>





            

      </div>     
        </Typography>            
      </main>
    </div>
  );
}


