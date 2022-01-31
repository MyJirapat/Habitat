import React from 'react'
import moment from 'moment'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { directive } from '@babel/types';



const Datetoday = () => {
    

    return (
        <div className="row" style={{marginLeft: '0px', marginRight: '0px', border:'none', marginTop:'38px', marginBottom:'30px'}}>
            <CalendarTodayIcon style={{ height: '32.5px', width: '32.5px', color: "#000000" }}/>
            <div style={{width:'20px'}}></div>
            <div style={{ display: "inline", fontSize: '22.5px', color:'#4A4A4A' , fontWeight:'bold'}}>
                 {moment(). format('DD MMM YYYY')}
            </div>
            
        </div>
    )
}

export default Datetoday;