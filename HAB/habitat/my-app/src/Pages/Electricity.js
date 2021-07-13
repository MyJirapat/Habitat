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

import ElecTable from "../Component/ElecTable";
import SimpleCard from "../Component/SimpleCard";
import Tabhistory from "../Component/Tabhistory";

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
        <div class="container d-flex justify-content-start">
         <div className="row"> 
             <div className="search-bar1 col-sm  ">
                <SearchBar name= "Search"           
                />
             </div>

             <div className="search-bar1 col-sm  ">
                <Building name= "Building"      
                />
             </div>

              <div className="search-bar1 col-sm  ">
                <Floor name= "Floor"           
                />
             </div>

             <div className="search-bar1 col-xs ">                      
                <Button
               />
             </div>           
                   
          </div>                   
      </div>

      <Tabhistory/>

      <div className="container">
       
            <div className="row">
                  <div className="col">
                        <SimpleCard 
                        Text="Floor 1"
                        />
                          <ElecTable
                         
                          />
                  </div>
                  
                 
            </div>

            <div className="row">
                  <div className="col">
                        <SimpleCard 
                        Text="Floor 2"
                        />


                        <ElecTable/>
                        

                  </div>
                  
                 
            </div>

      </div>
   
       
        </Typography>

        
   
        
                
                    
                    
                       
                  
               
            
       
        
      </main>
    </div>
  );
}











/*<TableBody>
                        <TableRow>
              <TableCell component="th" scope="row"></TableCell>
             
              <TableCell align="left"> 55555555555 </TableCell>
              <TableCell align="left">55555555555</TableCell>
              <TableCell align="left">5555555555</TableCell>
              <TableCell align="left"> 5555555555</TableCell>
          
        
      
            </TableRow>
                        </TableBody>*/

