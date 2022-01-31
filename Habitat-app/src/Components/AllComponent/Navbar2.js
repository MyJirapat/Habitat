import { Facebook } from '@material-ui/icons';
import { useState } from 'react'
import { Link } from "react-router-dom";
import Exhistorypage from '../../page/ExpenseHistory/Exhistorypage';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import BedRoundedIcon from '@mui/icons-material/BedRounded';

import HistoryIcon from '@mui/icons-material/History';

import SmsRoundedIcon from '@mui/icons-material/SmsRounded';

import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerSharpIcon from '@mui/icons-material/EqualizerSharp';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

const Navbar2 = (props) => {
    const [showNav, setShowNav] = useState(false)
    // const [currentClicked, setCurrentClicked] = useState(false)
    const [currentTag, setCurrentTag] = useState(0)
    const { id } = useParams()
    const pathname = window.location.pathname
    const currentId = pathname.slice(-1)

    function handlerclick() {
        setShowNav(!showNav)
        props.isOpened(showNav)
    }

    function isClicked(tag) {
        // setCurrentClicked(!currentClicked)
        setCurrentTag(tag)

    }

    return (
        <div className={showNav ? 'sidebar active' : 'sidebar'}>
            <div class="logo_content">
                <div class="logo">
                    <i class='bx bxl-c-plus-plus'>
                        
                    </i>
                    <div class="logo_name">HABITAT</div>

                </div>
                {/* <i class='bx bx-menu' id="btn"></i> */}
                <i class='bx bx-menu' id="btn" onClick={() => handlerclick()}></i>
                {/* <Exhistorypage myvalue={true}/> */}
            </div>
            <ul class="nav_list">
                <div style={{ height: 20 }}>
                    {/* <Button  style={{backgroundColor: 'blue'}} onClick={() => handlerclick()}/> */}

                </div>
                {/* <li>
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder="Search..." /> */}
                {/* <span class="tooltip">Dashboard</span> */}

                {/* </li> */}
                <li className={currentTag == 5 ? 'selected' : 'unselected'} onClick={() => isClicked(5)}>
                    <Link to={`/dashpage/${currentId}`}>
                        <i >
                            <EqualizerSharpIcon  style={{color:'#4A4A4A'}} />
                        </i>
                        <span className="links_name">Dashboard</span>
                    </Link>

                    {/* <span class="tooltip">Dashboard</span> */}

                </li>

                <li className={currentTag == 1 ? 'selected' : 'unselected'} onClick={() => isClicked(1)} >
                    <Link to={`/expense/${currentId}`}>
                        <i>
                            <AppsRoundedIcon style={{color:'#4A4A4A'}}/>
                        </i>
                        <span class="links_name">Expenses</span>
                    </Link>
                    {/* <span class="tooltip">Dashboard</span> */}

                </li>
                <li className={currentTag == 2 ? 'selected' : 'unselected'} onClick={() => isClicked(2)} >
                    <Link to={`/bill/${currentId}`}>
                        <i >
                            <InsertDriveFileOutlinedIcon style={{color:'#4A4A4A'}}/>
                        </i>
                        <span class="links_name">Bill</span>
                    </Link>

                    {/* <span class="tooltip">Dashboard</span> */}

                </li>
                <li className={currentTag == 3 ? 'selected' : 'unselected'} onClick={() => isClicked(3)} >
                    <Link to={`/rooms/${currentId}`}>
                        <i>
                            <BedRoundedIcon style={{color:'#4A4A4A'}}/>
                        </i>
                        <span class="links_name">Room Management</span>

                    </Link>

                    {/* <span class="tooltip">Dashboard</span> */}

                </li>

                <li className={currentTag == 4 ? 'selected' : 'unselected'} onClick={() => isClicked(4)} >
                    <Link to={`/expensehistory/${currentId}`}>
                        {/* <i class='bx bx-folder'></i> */}
                        <i>
                            <HistoryIcon style={{color:'#4A4A4A'}}/>
                        </i>

                        <span class="links_name">Expense History</span>
                    </Link>

                    {/* <span class="tooltip">Dashboard</span> */}

                </li>

                <li className={currentTag == 6 ? 'selected' : 'unselected'} onClick={() => isClicked(6)} >
                    <Link to={`/announce/${currentId}`}>

                        <i>
                            <SmsRoundedIcon style={{color:'#4A4A4A'}}/>
                        </i>

                        <span class="links_name">Announcements</span>
                    </Link>
                    {/* <span class="tooltip">Dashboard</span> */}

                </li>

                <li className={currentTag == 8 ? 'selected' : 'unselected'} onClick={() => isClicked(8)} >
                    <Link to={`/petitionpage/${currentId}`}>
                        <i>
                            <AssignmentOutlinedIcon style={{color:'#4A4A4A'}}/>
                        </i>
                        <span class="links_name">Petitions</span>
                    </Link>
                    {/* <span class="tooltip">Dashboard</span> */}
                </li>
                {/* <li>
                    <a href='#'>
                        <i class='bx bx-cog'></i>
                        <span class="links_name">Setting</span>
                    </a>
                </li> */}


                <li className={currentTag == 7 ? 'selected' : 'unselected'} onClick={() => isClicked(7)}>
                    <Link to={`/setting2/${currentId}`}>

                        <i>
                            <SettingsIcon style={{color:'#4A4A4A'}}/>
                        </i>
                        <span className="links_name">Setting</span>
                    </Link>
                    {/* <span class="tooltip">Dashboard</span> */}

                </li>
                {/* <li className={currentTag == 9 ? 'selected' : 'unselected'} onClick={() => isClicked(9)} >
                    <Link to='/testnewpage'>
                        <i class='bx bx-heart'></i>
                        <span class="links_name">testnewpage</span>
                    </Link>
                </li> */}
            </ul>

            {/* <div className="profile_content">
                <div class="profile">
                    <div class="profile_details">
                        <img src="great.jpg" alt=""></img>
                        <div className="name_job">
                            <div class="name">Krittamet Chuwongworaphinit</div>
                            <div class="job">Web Designer</div>
                        </div>
                    </div>
                    <i class='bx bx=log-out' id="log_out"> </i>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar2;