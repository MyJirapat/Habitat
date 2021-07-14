import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
//import Electricity from "./Electricity";

//import SearchBar from "material-ui-search-bar";
import Simplecard from "../../Components/Expens/Simplecard";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: '60%',
  },
 
 Htext:{
   
 }
});

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <TabContext value={value}>
          <h3> <CalendarTodayIcon/> 4 June 2021 </h3>
          <caption>Expenses </caption>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Electricity"value="1" />
        <Tab label="Water" value="2" />
        <Tab label="other"  />
      </Tabs>

        <TabPanel value="1"> 
             <div class="container d-flex justify-content-end">
                  <div className="row align-items-end"> 
                      <div className="col align-self-end">
                           
                      </div>

                      <div className="col align-self-end">
                          
                      </div>

                       <div className="col align-self-end">
                            
                      </div>            
              </div>                 
             </div>

                      <Simplecard 
                      header="Floor1"
                      room1="101"
                      status1 ="Inhabitable"
                      PreviousDate1="27/04/2021"
                      previousReading1="3962"
                      curentReading1=""
                      usage1="96"
                      option1=""
                      
                      room2="102"
                      status2 ="habitable"
                      PreviousDate2="27/04/2021"
                      previousReading2="3962"
                      curentReading2=""
                      usage2="96"
                      option2=""

                      room3="103"
                      status3 ="Inhabitable"
                      PreviousDate3="27/04/2021"
                      previousReading3="3962"
                      curentReading3=""
                      usage3="96"
                      option3=""

                      room4="104"
                      status4 ="Inhabitable"
                      PreviousDate4="27/04/2021"
                      previousReading4="3962"
                      curentReading4=""
                      usage4="96"
                      option4=""
                      
                      room5="105"
                      status5 ="Inhabitable"
                      PreviousDate5="27/04/2021"
                      previousReading5="3,962"
                      curentReading5=""
                      usage5="96"
                      option5="" 
                      />

                      <br></br>
                      <Simplecard 
                      header="Floor2"
                      room1="201"
                      status1 ="Inhabitable"
                      PreviousDate1="27/04/2021"
                      previousReading1="3962"
                      curentReading1=""
                      usage1="96"
                      option1=""
                      
                      room2="202"
                      status2 ="habitable"
                      PreviousDate2="27/04/2021"
                      previousReading2="3962"
                      curentReading2=""
                      usage2="96"
                      option2=""

                      room3="203"
                      status3 ="Inhabitable"
                      PreviousDate3="27/04/2021"
                      previousReading3="3962"
                      curentReading3=""
                      usage3="96"
                      option3=""

                      room4="204"
                      status4 ="Inhabitable"
                      PreviousDate4="27/04/2021"
                      previousReading4="3962"
                      curentReading4=""
                      usage4="96"
                      option4=""
                      
                      room5="205"
                      status5 ="Inhabitable"
                      PreviousDate5="27/04/2021"
                      previousReading5="3962"
                      curentReading5=""
                      usage5="96"
                      option5=""
                                           
                      />
                      <br></br>

        </TabPanel>
        <TabPanel value="2">
        <div class="container d-flex justify-content-end">
                  <div className="row"> 
                      <div className="col-sm">
                         
                      </div>

                      <div className="col-sm">
                          
                      </div>

                       <div className="col-sm">
                            
                      </div>            
              </div>              


             </div>
             
        
        <Simplecard 
                      header="Floor2"
                      room1="201"
                      status1 ="Inhabitable"
                      PreviousDate1="27/04/2021"
                      previousReading1="3962"
                      curentReading1=""
                      usage1="96"
                      option1=""
                      
                      room2="202"
                      status2 ="habitable"
                      PreviousDate2="27/04/2021"
                      previousReading2="3962"
                      curentReading2=""
                      usage2="96"
                      option2=""

                      room3="203"
                      status3 ="Inhabitable"
                      PreviousDate3="27/04/2021"
                      previousReading3="3962"
                      curentReading3=""
                      usage3="96"
                      option3=""

                      room4="204"
                      status4 ="Inhabitable"
                      PreviousDate4="27/04/2021"
                      previousReading4="3962"
                      curentReading4=""
                      usage4="96"
                      option4=""
                      
                      room5="205"
                      status5 ="Inhabitable"
                      PreviousDate5="27/04/2021"
                      previousReading5="3962"
                      curentReading5=""
                      usage5="96"
                      option5=""                  
                      />
                     
        </TabPanel>

        <TabPanel value="3">
        
        </TabPanel>
        </TabContext >
  );
}
/*<div class="container d-flex justify-content-xl-center">
           
           <div className="row align-items-end"> */
      