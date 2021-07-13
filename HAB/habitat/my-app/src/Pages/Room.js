import React from 'react';
import clsx from 'clsx';
import { makeStyles, recomposeColor, useTheme } from '@material-ui/core/styles';
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
import Card from "../Component/Card";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import PersonIcon from '@material-ui/icons/Person';
import { green } from '@material-ui/core/colors';
import Button from '../Component/Button';
import Building from "../Dropdown/Building";
import Floor from "../Dropdown/Floor";
import SearchBar from "../Dropdown/SearchBar";
import Dia from "../Component/Dialog";
import Buil from "../Building/building";



//import ".../node_modules/bootstrap/dist/css/bootstrap.min.css";


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

  container:{
    marginBottom: '50%'
  }

}));

const rooms =[
  "King David room 112 floor 1 Great", 
  "King David room 122 floor 2 Jame", 
  "Queen Vv room 112 floor 3 My", 
  "Queen Vv room 132 floor 3 Zhang", 
  "Solomon DD room 212 floor 4 Not",
  "Solomon DD room 412 floor 5 Kain"
]

function createBuiding(Building){

}

function createFloor(Building){
  
}

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
        <NavLink to="/menu" icon={InboxIcon}>
          Room management
          </NavLink>

        <NavLink to="/about" icon={MailIcon}>
          Bill Payment
        </NavLink>

        <NavLink to="/" icon={MailIcon}>
         Bill History
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

        <Buil/>
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
   
        <div className="container">
                <div className="row">     
                    <div className="col-md-4">
                        <Card title="Building 1" 
                        bednum= "401"
                        text="Jirapat Suwanjunee"
                        text2="Jirapat Suwanjunee"    
                        text3="Jirapat Suwanjunee"   
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                          delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                          post={<CreateOutlinedIcon />}
                          bed={<SingleBedIcon color="primary"/>}
                          person={<PersonIcon color= "primary"/>}
                        />
                    </div>



                    <div className="col-md-4">
                        <Card title="Building 2"
                        bednum= "402"
                        text="Jirapat Suwanjunee"
                        text2="Jirapat Suwanjunee"
                        text3="Jirapat Suwanjunee"
                        erroricon= {<ErrorOutlineOutlinedIcon/>}        
                        delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>



                    <div className="col-md-4">
                        <Card title="Building 3" 
                        bednum= "403"
                          text="Jirapat Suwanjunee"
                         text2="Jirapat Suwanjunee"
                         text3="Jirapat Suwanjunee"
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                         delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>


                    <div className="col-md-4">
                        <Card title="Building 3" 
                        bednum= "404"
                          text="Jirapat Suwanjunee"
                         text2="Jirapat Suwanjunee"
                         text3="Jirapat Suwanjunee"
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                         delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card title="Building 3" 
                        bednum= "405"
                          text="Jirapat Suwanjunee"
                         text2="Jirapat Suwanjunee"
                         text3="Jirapat Suwanjunee"
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                         delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>


                    <div className="col-md-4">
                        <Card title="Building 3" 
                        bednum= "406"
                          text="Jirapat Suwanjunee"
                         text2="Jirapat Suwanjunee"
                         text3="Jirapat Suwanjunee"
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                         delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>
                    

                    <div className="col-md-4">
                        <Card title="Building 3" 
                        bednum= "407"
                          text="Jirapat Suwanjunee"
                         text2="Jirapat Suwanjunee"
                         text3="Jirapat Suwanjunee"
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                         delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card title="Building 3" 
                        bednum= "408"
                          text="Jirapat Suwanjunee"
                         text2="Jirapat Suwanjunee"
                         text3="Jirapat Suwanjunee"
                         erroricon= {<ErrorOutlineOutlinedIcon/>} 
                         delete= {<DeleteOutlinedIcon style={{ color: green[500] }}/>}
                        post={<CreateOutlinedIcon/>}
                        bed={<SingleBedIcon color="primary"/>}
                        person={<PersonIcon color= "primary"/>}
                        />
                    </div>
                </div>
            </div>
        </Typography>
        
      </main>
    </div>
  );
}



//<Gridbox/>
//export default withStyles(styles, { withTheme: true })(MiniDrawer);

/*<List>
{["Room management",
 "Bill Payment", 
 "Send email", 
 "Drafts"].map((text, index) => (

  
  <ListItem 
  button key={text}>

    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List>*/


/*<List>
          <ListItem button={this.handleClose} >
            <ListItemIcon>
            <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox"  />
         </ListItem>
        <Link to= "/login">
        <ListItem button>
            <ListItemIcon>
            <MailIcon/>
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          </Link>
        <ListItem button>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
        </ListItem>

          <ListItem button>
            <ListItemIcon>
            <MailIcon/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
       </List>*/
