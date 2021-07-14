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
import Buildings from "../../Components/Building/Addbuilding";
import CardBuildings from "../../Components/Building/CardBuilding";
import '../../Css/Building/Building.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',    
  },
  
  menuButton: {
    marginRight: 36,
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Typography paragraph>
          <h4>Building</h4>
          <div className="col"> 
                  <Buildings/>
                  </div>
        </Typography>
        <Typography paragraph>
        <div className="Background">
        <div className="container">
                <div className="row">     
                    <div className="col-md-6">
                        <CardBuildings
                        Title="King Solomon"
                        Listname1="Overdue 4 rooms"
                        Listname2="Vacant 96 rooms"
                        Listname3= "Tenant 4 rooms"
                        Manage="Manage"
                        Edit="Edit"
                        Roomnumber="100 rooms"
                        />
                    </div>

                    <div className="col-md-6">    
                      <CardBuildings
                      Title="King David"
                      Listname1="Overdue 4 rooms"
                      Listname2="Vacant 96 rooms"
                      Listname3="Tenant 4 rooms"
                      Manage="Manage"
                      Edit="Edit"
                      Roomnumber="100 rooms"
                      />           
                    </div>    

                    <div className="col-md-6">     

                    </div>                         
                  </div>
                </div>
          </div>      
        </Typography>            
      </main>
    </div> 
  );
}