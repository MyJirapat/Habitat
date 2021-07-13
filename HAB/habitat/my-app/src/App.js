import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from  '@material-ui/core';
import './App.css';
import Registration from './Account/registration';
import Login from './Account/Login';

import History from './Pages/History';
import Electric from './Pages/Electricity';
import Billtable from './Bill/BillTable';
import Building from './Building/building';
import  Dialog from './Component/Dialog';
import Buidingsidebar from './Building/Sidebarpage';
import TestElec from "./Expens/Electricity";
//import Socialcard from "./Anouncement/Mainpage";
import Socialcard from "../src/page/Announcement/Mainpage";
import Setup from "./Building/Setup";
import Rooms from "../src/page/Room/Mainroom";
//import Fee from "./FeeTypes/Fee";
import Fee from "../src/page/FeeTypes/Fee";
import Deatails from "../src/page/Announcement/Moredetails";

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Route exact path="/login" component={Login}/>
      <Route exact path="/history" component={History}/>
      <Route exact path="/electricity" component={Electric}/>
      <Route exact path="/expens" component={TestElec}/>
      <Route exact path="/billtable" component={Billtable}/>
      <Route exact path="/register" component={Registration}/>
      <Route exact path="/dialog" component={Dialog}/>
      <Route exact path="/" component={Socialcard}/>
      <Route exact path="/building" component={ Buidingsidebar}/>
      <Route exact path="/setup" component={Setup}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/fee" component={Fee}/>
      <Route exact path="/details" component={Deatails}/>

    </div>
  );
}

export default App;


/*<Route exact path="/" component={Socialcard}/>*/