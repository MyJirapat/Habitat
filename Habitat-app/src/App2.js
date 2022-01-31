import { useState } from 'react'
import Navbar2 from './Components/AllComponent/Navbar2';
// import "./css/Navbar2.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Setting from "../src/page/Setting/Setup";
import Socialcard from "../src/page/Announcement/Mainpage";
import Announcep from './page/Announcement/Annoucep';
import "./Css/Everypage/Navbar2.css"
import Settingpage from './page/Setting/Settingpage';
import Detailpage from './page/Announcement/Detailpage';
import Detail from './Components/Anouncement/Detail';
import MoreDetail from './page/Announcement/Moredetails';
// import ExpenseHistory from './page/Expens/ExpenHistory';
import Exhistorypage from './page/ExpenseHistory/Exhistorypage';
import Expensepage from './page/Expens/Expensepage';
import Billpage from './page/Bill/Billpage';
import DetailBillpage from './page/Bill/DetailBillpage'
import Exdetailpage from './page/ExpenseHistory/Exdetailpage';
import { WorkOffRounded } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Roompage from './page/RoomManagement/Roompage';
import Personalinfopage from './page/RoomManagement/Personalinfopage';
import Dashpage from './page/DashBoard/Dashpage';
import Petitionpage from './page/Petition/Petitionpage';
import STBuildingpage from './page/STBuilding/STBuildingpage';
import Createbuilding from './page/STBuilding/Createbuilding';
import CreateFeetype from './page/STFeetype/CreateFeetype';
import DisplayDialog from './page/STRoom/DisplayDialog';
import DialogDetail from './page/STRoom/DialogDetail';
import STRoompage from './page/STRoom/STRoompage';
import CreateFloor from './page/STFloor/CreateFloor';
import CreateRoom from './page/STFloor/CreateRoom';
import Initialize from './page/STFloor/Initialize';
import EditBuilding from './page/STBuilding/EditBuilding';
import Petitiondetails from './page/Petition/Petitiondetails';
import CreateFeeset from './page/STFeeset/CreateFeeset';
import Feeset from './page/STFeeset/Feeset';
import CreateRoomRe from './page/STFloor/CreateRoomRe';
import Verifypage from './page/Verify/Verifypage';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Login from './page/Account/Login';
import Registration from './page/Account/Registration';
import LogoutIcon from '@mui/icons-material/Logout';
const useStyles = makeStyles((theme) => ({

fameinfoimg: {    
  //marginTop: '-2%',
  //marginRight: '127px'
  width: 280,
  height: 550,
  //display: 'absolute',
  //float: 'left',
  marginTop: '2%',
  marginLeft: '90px'
},
}));


function App2() {
  const classes = useStyles()

  // const [ word , setWord] = useState('Bob')
  const [word, setWord] = useState(true)
  const [announceId, setAnnounceId] = useState(0)
  const [arrayFloor, setArrayFloor] = useState()
  
  const Logout =() =>{
    window.location.href = '/login';
  }
  //Building Room all page

  const [youareinthisBuilding, iWillBeInthisBuilding] = useState()
  const [thisBuildingId, setThisBuildingID] = useState("")
  const [allData, setAllData] = useState("")
  const [buildingId, setBuildingId] = useState("")

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu //style={{width:"100%"}}
      className={classes.fameinfoimg}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*<MenuItem >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge >
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>*/}
      <MenuItem style={{marginLeft: "-1%", width:340, height:50 }}>
        <IconButton
          //size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge>
            <LogoutIcon />
          </Badge>
        </IconButton>
        {/*<h6>Log Out</h6>*/}     
        <li>
          <i></i>
          <span onClick={Logout} class="links_name">
          {/*<Link  to='/login' style={{ textDecoration: "none" }}>
           </Link>*/}
            Log Out 
          </span>
          {/* <span class="tooltip">Dashboard</span> */}
       </li>            
      </MenuItem>
    </Menu>
  );
  const [islogin, setIslogin] = useState(false);
  return (
    <>
    {islogin? 
      <Router>
        <Switch>
          <Route exact path="/login" render={(props) => <Login isLog = {islogin => setIslogin(islogin)}/>} />
          <Route path="/registration" exact={true} component={Registration} />
        </Switch>
      </Router>:
      
      <Router>        
        <header>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>     
          <Box sx={{ marginRight: 160 }} />   
            <Box sx={{ display: { xs: 'flex'} }}>
              <Button 
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit">
              <Avatar src="https://firebasestorage.googleapis.com/v0/b/habitat-34ee0.appspot.com/o/50601063_1178218075671311_2091927988328202240_n.jpeg?alt=media&token=8ba089cb-f6df-4c01-9b84-ff903ee720b3"/>
              <h6 style={{marginLeft:"15%"}}>Jirapat</h6>  <h6 style={{marginLeft:"15%"}}>Suwanjunee</h6></Button>   
            </Box>
        </Toolbar>
            {renderMobileMenu}
            {renderMenu}
    </Box>

        </header>
        <Navbar2 isOpened={word => setWord(word)}>
        </Navbar2>
        {/* <Bill/> */}

        <div className='main' style={{ backgroundColor: "#F3F7FC", position: 'relative' }}>
        <Route exact path="/bill/:id" exact={true} render={(props) => <Billpage isOpened={word} {...props} />} />
        <Route exact path="/announce/:id" exact={true} render={(props) => <Announcep isOpened={word} {...props} />} />

          {/* <Route exact path="/" exact={true} component={Socialcard}/> */}
          <Route exact path="/expense/:id" exact={true} render={(props) => <Expensepage isOpened={word} {...props} />} />
          {/* <Route path="/expensehistory" exact={true} render={(props) => <Exhistorypage isOpened = {word => setWord(word)} {...props} />} /> */}

          {/* <Route path="/expensehistory" exact={true} component={Exhistorypage} /> */}

          <Route path="/expensehistory/:id" exact={true} render={(props) => <Exhistorypage isOpened={word} {...props} />} />


          <Route path="/setting" exact={true} component={Setting} />


          <Route path="/setting2/:id" exact={true} render={(props) => <Settingpage getId={thisBuildingId => setThisBuildingID(thisBuildingId)} isOpened={word} {...props} />} />

          <Route path="/momo" exact={true} component={Settingpage} />
          {/* <Route path="/details" exact={true} component={Detailpage}/> */}
          <Route path="/details" exact={true} component={MoreDetail} />

          <Route path="/billdetails/:id" exact={true} render={(props) => <DetailBillpage isOpened={word} {...props} />} />
          
          <Route path="/rooms/:id" exact={true} render={(props) => <Roompage isOpened={word} {...props} />} />
          <Route path="/personinfo/:id" exact={true} render={(props) => <Personalinfopage isOpened={word} {...props} />} />
          <Route path="/dashpage/:id" exact={true} render={(props) => <Dashpage isOpened={word} {...props} />} />
          {/* <Route path="/petitionpage" exact={true}  render={(props) => <Petitionpage isOpened = {word} {...props} />} /> */}


          <Route path="/building_sp" exact={true} render={(props) => <STBuildingpage isOpened={word} save={buildingId => setBuildingId(buildingId)} {...props} />} />

          <Route path="/addbuilding" exact={true} render={(props) => <Createbuilding isOpened={word} {...props} />} />
          <Route path="/feetype_sp/:id" exact={true} render={(props) => <CreateFeetype getId={thisBuildingId => setThisBuildingID(thisBuildingId)} isOpened={word} {...props} />} />
          <Route path="/detailpage" exact={true} render={(props) => <Detailpage isOpened={word} {...props} />} />
          <Route path="/petitionpage/:id" exact={true} render={(props) => <Petitionpage isOpened={word} {...props} />} />
          <Route path="/notedetails/:id" exact={true} render={(props) => <Petitiondetails isOpened={word} {...props} />} />

          <Route path="/stCreateFloor/:id" exact={true} render={(props) => <CreateFloor keptArray={arrayFloor => setArrayFloor(arrayFloor)} />} />
          {/* <Route path="/settingroom/:id" exact={true} render={(props) => <CreateRoom allFloor={arrayFloor} {...props} />} /> */}

          {/* <Route path="/testnewpage" exact={true}  render={(props) => <STRoompage isOpened = {word} {...props} />} /> */}
          {/* <Route path="/testnewpage" exact={true}  render={(props) => <Personalinfopage isOpened = {word} {...props} />} /> */}

          <Route path="/detailpage/:id" exact={true} render={(props) => <Detailpage isOpened={word} {...props} />} />
          <Route path="/roomtype_sp/:id" exact={true} render={(props) => <STRoompage getAllData={allData => setAllData(allData)}  isOpened={word} {...props} />} />
          <Route path="/st_initialize/:id" exact={true} render={(props) => <Initialize isOpened={word} {...props} />} />
          {/* <Route path="/testnewpage" exact={true} render={(props) => <Initialize isOpened={word} {...props} />} /> */}
          <Route path="/editbuilding_sp/:id" exact={true} render={(props) => <EditBuilding isOpened={word} {...props} />} />

          {/* <Route path="/testnewpage" exact={true} render={(props) => <Testjmae2 keptArray={arrayFloor => setArrayFloor(arrayFloor)} />} /> */}
          <Route path="/feesets_sp/:id" exact={true} render={(props) => <Feeset isOpened={word} {...props} />} />
          <Route path="/feesets/:id" exact={true} render={(props) => <CreateFeeset isOpened={word} {...props} />} />
          {/* <Route path="/testnewpage" exact={true} render={(props) => <Verifypage isOpened={word} {...props} />} /> */}
          <Route path="/settingroom/:id" exact={true} render={(props) => <CreateRoomRe allFloor={arrayFloor} isOpened={word} {...props} />} />
          {/* <Route path="/historydetails" exact={true} render={(props) => <Exdetailpage isOpened={word} {...props} />} /> */}
          {/* <Route path="/testnewpage" exact={true} render={(props) => <Exdetailpage isOpened={word} {...props} />} /> */}
          

          <Route path="/verify/:id" exact={true} render={(props) => <Verifypage isOpened={word} {...props} />} />




        </div>

      </Router>
}
    </>

  );
}

export default App2;

