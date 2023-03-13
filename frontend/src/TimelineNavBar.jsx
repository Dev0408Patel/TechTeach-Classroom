import './App.css';
import './NavBar.css';
//  import SplitPane from 'react-split-pane';
import { NavLink } from 'react-router-dom';
 import {Routes} from 'react-router-dom';
import { yellow } from '@mui/material/colors';
function TimelineNavBar() {
  return (

    <div>
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
              {/* <!-- Container wrapper --> */}
              <div class="container-fluid">
                {/* <!-- Navbar brand --> */}
                <div class="navbar-brand " to="#">TechTeach Timeline</div>
            
                {/* <!-- Collapsible wrapper --> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  

            
                  {/* <!-- Right links --> */}
                  <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                    <li class="nav-item text-center mx-2 mx-lg-1">
                        <NavLink class="nav-link" exact to="/addpost">
                          <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                            Add Post
                        </button>
                       </NavLink>
                    </li> 
                    
                  </ul> 
                  
                  
                  {/* <!-- Right links --> */}
            
                  {/* <!-- Search form --> */}
                  
                </div>
                {/* <!-- Collapsible wrapper --> */}
              </div>
              {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
    </div>
    );
}

export default TimelineNavBar;