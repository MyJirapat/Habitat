import React from 'react'
import Detail from '../../Components/Anouncement/Detail'
import Comment from '../../Components/Anouncement/Comment'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';


const useStyles = makeStyles((theme) => ({
    scrollspace280: {
        height: "730px",
        width: '100%',
        margin: 'auto',
        paddingLeft: 245,
        transition: 'all 0.5s ease',

    },
    scrollspace202: {
        height: "730px",
        width: '100%',
        margin: 'auto',
        //marginTop:120,
        paddingLeft: 172,
        transition: 'all 0.5s ease',
    },
    texttile: {
        fontWeight: "bold",
        color: "#4A4A4A",
        fontSize: "19.4px"
    },
    frametop: {
        width: "100%",
        height: "106px"
    }

}));

export default function Detailpage({ isOpened, props }) {

    const classes = useStyles()
    const [allData, setAllData] = useState([])
    const [isdetailLoading, setIsdetailLoading] = useState(false)

    const { id } = useParams();
    useEffect(() => {
        axios('/announcement/announcements/')
            .then(response => {
                console.log("hi" + response.data)
                setAllData(response.data);
                setIsdetailLoading(true)
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    if (isdetailLoading){
    return (
        
        <ScrollView>
            
            <div className={isOpened ? classes.scrollspace202 : classes.scrollspace280}>
                <div style={{ width: "1169.8px", background: "red", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0 }} >
                        {allData.filter(data => data.id == id).map((item) => (

                            <Detail
                                id={item.id}
                                title={item.title}
                                announceDate={moment(item.announceDate).format("DD/MM/yyyy")}
                                type={item.type}
                                imageUrl={item.imageUrl}
                                likes={item.likes}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <div style={{ position: "absolute", right: 0 }}>
                        {allData.filter(data => data.id == id).map((item) => (
                            <Comment
                                likes={item.likes}
                                postId={id}
                            />
                        ))}
                    </div>
                </div>
            </div>
           
        </ScrollView>
    
        )
    } else {
        return (
            <div>
                <CircularProgress className={classes.IsLoading} color="secondary" />
            </div>
        )
    }
}