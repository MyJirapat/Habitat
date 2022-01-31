import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from  '@material-ui/core';
import './App.css';
import Socialcard from "../src/page/Announcement/Mainpage";
import Fee from "../src/page/FeeTypes/Fee";
import Deatails from "../src/page/Announcement/Moredetails";
import Setting from "../src/page/Setting/Setup";
import Building from "../src/page/Building/Residence";
//import History from './Pages/History';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Socialcard}/>
      <Route exact path="/fee" component={Fee}/>
      <Route exact path="/details" component={Deatails}/>
      <Route exact path="/building" component={Building}/>
      <Route exact path="/setting" component={Setting}/>

    </div>
  );
}

export default App;


/*<Route exact path="/" component={Socialcard}/>
      <Route exact path="/history" component={History}/>


*/