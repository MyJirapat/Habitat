import Social from "../../Components/Anouncement/Socialcard";
import "./../../Css/Announcement/Socialcard.css"
import { ScrollView } from "react-native";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    scrollspace280: {
        height: "730px",
        width: '100%',
        margin: 'auto',
        paddingLeft: 280,
        transition: 'all 0.5s ease',

    },
    scrollspace202: {
        height: "730px",
        width: '100%',
        margin: 'auto',
        paddingLeft: 202,
        transition: 'all 0.5s ease',


    }
}));


const Announcep = ({isOpened}) => {
    const classes = useStyles();
    
    return(
        <ScrollView>
            {/* <div id="con"> */}
            <div className={isOpened ? classes.scrollspace202 : classes.scrollspace280}>

                <Social/>
            </div>
          
        </ScrollView>
            
    )
}

export default Announcep;