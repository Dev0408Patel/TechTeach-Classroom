
import './App.css';

import Register from './register';
import ClassCard from './ClassCard';
import Sidebar from './sidebar';
import ClassCardGrid from './ClassCardGrid';
import TimelinePost from './TimelinePost';
import Profile from './Profile';
import Login2 from './Login2';
import JoinClass from './JoinClass';
import CreateClass from './CreateClass';
import JobAll from './JobAll';
import ProfileNavBar from './ProfileNavBar';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//  import SplitPane from 'react-split-pane';
 import {Routes} from 'react-router-dom';
import AboutUs from './AboutUs';
import ClassNavBar from './ClassNavBar';
import JobNavBar from './JobNavBar';
import JobCard from './JobCard';
import TimelineAll from './TimelineAll';
import AddJob from  './AddJob';
import TimelineNavBar from './TimelineNavBar';
import ClassBottomBar from './ClassBottomBar';
import EditProfile from './EditProfile';
import ClassAll from './ClassAll';
import ProfileAll from './ProfileAll';
import AboutUsAll from './AboutUsAll';
// import ClassNavBar from './ClassNavBar';
function App() {
  return (
    <div >
      {/* <Profile/> */}
      {/* <Cart /> */}
      {/* <Login2 />       */}
      {/* <ClassItem /> */}
      {/* <JoinClass /> */}
      {/* <CreateClass/> */}
      {/* <AboutUs /> */}
      {/* <ClassNavBar /> */}
     
        
        <Router>
        
              <Routes >
                <Route path="/" element={<div><Register/> </div>}></Route>
                <Route path="/login" element={<div><Login2/> </div>}></Route>
                <Route path="/classroom" element={<div><ClassAll/> </div>}></Route>
                <Route path="/timeline" element={<div><TimelineAll/></div>}></Route>
                <Route path="/profile" element={<div><ProfileAll/></div>}></Route>
                <Route path="/aboutus" element={<AboutUsAll/>}></Route>
                <Route path="/addjobs" element={<AddJob/>}></Route>
                <Route path="/editprofile" element={<EditProfile/>}></Route>

                <Route path="/jobs" element={<div><JobAll/></div>}></Route>
                <Route path="/class/craeteclass" element={<CreateClass/>}></Route>
                <Route path="/class/joinclass" element={<JoinClass/>}></Route>

              </Routes>

          

         </Router>
        
      

      {/* <Routes>
                  <Route exact path='/'><ClassCardGrid/></Route>
                  <Route exact path='/timeline' component={TimelinePost}></Route>
              </Routes> */}
              {/* <Register />   */}
              {/* <ClassCardGrid/>  */}
            
              {/* <TimelinePost />
                <TimelinePost />
                <TimelinePost />  */}
    
      {/* <CartItem /> */}
      {/* <CartItem /> */}
      {/* <h1>
        cart
      </h1> */}


      {/* 
        <div className='maindiv'>
        
        <Router>
            <div className='mainsidebarsetup'>
            <div>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/timeline">Topics</Link></div>
            </div>
            </div>
            <div className='pagecontent'>
            <div>
              <Routes>
              <Route exact path="/" component={<ClassCardGrid/>} />
              <Route exact path="/timeline" component={<TimelinePost/>} />
              </Routes>
            </div>
            </div>
          
        </Router>

        </div> */}

        
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