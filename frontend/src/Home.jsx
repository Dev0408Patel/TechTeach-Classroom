
import './App.css';
import CartItem from './CartItem';
import ClassItem from './ClassItem';
import Cart from './Cart';
import Login from './Login';
import Register from './register';
import ClassCard from './ClassCard';
import Sidebar from './sidebar';
import ClassCardGrid from './ClassCardGrid';
import TimelinePost from './TimelinePost';
import Profile from './Profile';
import Login2 from './Login2';
import JoinClass from './JoinClass';
import CreateClass from './CreateClass';
import ProfileNavBar from './ProfileNavBar';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//  import SplitPane from 'react-split-pane';
 import {Routes} from 'react-router-dom';
import AboutUs from './AboutUs';
import ClassNavBar from './ClassNavBar';
import JobNavBar from './JobNavBar';
import JobCard from './JobCard';
import AddJob from  './AddJob';
import {LinkContainer} from 'react-router-bootstrap';
import TimelineNavBar from './TimelineNavBar';
import ClassBottomBar from './ClassBottomBar';
import EditProfile from './EditProfile';

// import ClassNavBar from './ClassNavBar';
function App() {
  return (
    <div >
     
      <div className='maindiv'>
        
        
        
          <div className='mainsidebarsetup'>  
            <div className='sidebar'>

            <Sidebar/>
            </div>
          </div>

          <div className='pagecontent'>

              <Routes >
                <Route path="/" element={<div><ClassNavBar/> <ClassCardGrid/> </div>}></Route>
                <Route path="/timeline" element={<div><TimelineNavBar/><TimelinePost/></div>}></Route>
                <Route path="/profile" element={<div><ProfileNavBar/><Profile/></div>}></Route>
                <Route path="/aboutus" element={<AboutUs/>}></Route>
                <Route path="/addjobs" element={<AddJob/>}></Route>
                <Route path="/editprofile" element={<EditProfile/>}></Route>

                <Route path="/jobs" element={<div><JobNavBar/><JobCard/><JobCard/><JobCard/><JobCard/></div>}></Route>
                <Route path="/class/craeteclass" element={<CreateClass/>}></Route>
                <Route path="/class/joinclass" element={<JoinClass/>}></Route>
                
                

              </Routes>

          </div>

        
        
      </div> 

     

      
      </div>
  
      
  );
}



export default App;

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

// import React,{Component} from 'react';
// import { SidebarData } from './sidebardata';
// class Sidebar extends Component
// {
//     render()
//     {
//         return (
//             <div className='sidebarsetup'>
//             <div className='sidebar'>
//             <div >
//             <ul className='sidebarlist'>
//             { SidebarData.map((value,key)=>{ return (
//                     <li key={key} className='row'> 
//                         {" "}
//                         <div id='icon'> {value.icon} </div> {" "}
//                         <div> {value.title}</div>
//                     </li>
//                     );
//             })}
//             </ul>
//             </div>
//             </div>
//             </div>
//         );
//     }
// }

// export default Sidebar;