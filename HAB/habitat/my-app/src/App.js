import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from  '@material-ui/core';
import './App.css';
import Socialcard from "../src/page/Announcement/Mainpage";
import Rooms from "../src/page/Room/Mainroom";
import Fee from "../src/page/FeeTypes/Fee";
import Deatails from "../src/page/Announcement/Moredetails";
import Setting from "../src/page/Setting/Setup";
import Building from "../src/page/Building/Residence";
import Expens from "../src/page/Expens/Electricity";
import Feeset from "../src/Components/Feeset/Feeset";
import Bill from "../src/page/Bill/Billpage"
//import History from './Pages/History';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Route exact path="/expens" component={Expens}/>
      <Route exact path="/bill" component={Bill}/>
      <Route exact path="/" component={Socialcard}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/fee" component={Fee}/>
      <Route exact path="/details" component={Deatails}/>
      <Route exact path="/building" component={Building}/>
      <Route exact path="/setting" component={Setting}/>
      <Route exact path="/feeset" component={Feeset}/>


    </div>
  );
}

export default App;


/*<Route exact path="/" component={Socialcard}/>
      <Route exact path="/history" component={History}/>


*/