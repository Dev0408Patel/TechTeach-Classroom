import React,{Component} from 'react';
// import {BrowserRouter as router,routes,link} from './react-router-dom';
// import { SidebarData } from './sidebardata';
import {Link, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import ClassCardGrid from './ClassCardGrid';
import TimelinePost from './TimelinePost';
import { NavLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
class Sidebar extends Component
{
    render()
    {
        return (
            
            <div className='sidebarsetup' style={{position:"fixed"}}>
            <div className='sidebar'>
            <div >
            <ul className='sidebarlist'>
                    <nav>
                        <NavLink   exact to="/classroom">
                            <li className='listrow' >
                                {" "}
                                <div id='icon'> <SchoolIcon/> </div> {" "}
                                <div id='title'> Classroom </div>
                            </li>
                        </NavLink>
                        <NavLink   exact to="/timeline">
                            <li className='listrow' >
                                {" "}
                                <div id='icon'> <FeedIcon/> </div> {" "}
                                <div id='title'> Timeline </div>
                            </li>
                        </NavLink>
                        <NavLink   exact to="/jobs">
                            <li className='listrow' >
                                {" "}
                                <div id='icon'> <PersonIcon/> </div> {" "}
                                <div id='title'> Jobs </div>
                            </li>
                        </NavLink>
                        <NavLink   exact to="/profile">
                            <li className='listrow' >
                                {" "}
                                <div id='icon'> <PersonIcon/> </div> {" "}
                                <div id='title'> Profile </div>
                            </li>
                        </NavLink>

                        <NavLink   exact to="/aboutus">
                            <li className='listrow' >
                                {" "}
                                <div id='icon'> <PersonIcon/> </div> {" "}
                                <div id='title'> About Us </div>
                            </li>
                        </NavLink>
                    </nav>


                {/* { SidebarData.map((value,key)=>{ return (
                        <li key={key} className='listrow'> 
                            {" "}
                            <div id='icon'> {value.icon} </div> {" "}
                            <div id='title'> {value.title}</div>

                        </li>
                        ); 
                })}   */}
                    {/* <NavLink  to="/">
                        Classroom
                        <li className='listrow' >
                        {" "}
                        <div id='icon'> <SchoolIcon/> </div> {" "}
                        <div id='title'> Classroom </div>

                        </li>
                    </NavLink>
                    <NavLink  to="/timeline">
                        Timeline
                        <li className='listrow' >
                        {" "}
                        <div id='icon'> <FeedIcon/> </div> {" "}
                        <div id='title'> Timeline </div>

                        </li>
                    </NavLink> */}

                    {/* <Link to="/"><li>Classroom</li></Link>
                    <Link to="/timeline"><li>Timeline</li></Link>                     */}

                    {/* <Link><li>Classs</li></Link>
                    <li>Timeline</li> */}

                    {/* <div>
                        <ul>
                        <a onClick={() => history.push(<ClassCardGrid/>)}>Page 1</a>
                        <a onClick={() => history.push(<TimelinePost/>)}>Page 2 </a>

                        </ul>
                    </div> */}
    
                    {/* <NavLink exact to="/">
                            Classroom
                        </NavLink>
                        <NavLink exact to="/timeline">
                            Timeline
                        </NavLink> */}
                </ul>
                </div>
                </div>
                </div>
                
            
        );
        
        
    }
}

export default Sidebar;