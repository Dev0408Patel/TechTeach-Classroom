import './App.css';
import './NavBar.css';
//  import SplitPane from 'react-split-pane';
import { NavLink } from 'react-router-dom';
 import {Routes} from 'react-router-dom';
import { yellow } from '@mui/material/colors';
function ClassNavBar() {
  return (

    <div>
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
              {/* <!-- Container wrapper --> */}
              <div class="container-fluid">
                {/* <!-- Navbar brand --> */}
                <div class="navbar-brand " to="#">TechTeach Classroom</div>
            
                {/* <!-- Toggle button --> */}
                {/* <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true"
                  aria-label="Toggle navigation"  >
                  <i class="fas fa-bars text-light"></i>
                </button> */}
            
                {/* <!-- Collapsible wrapper --> */}
                {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
                  {/* <!-- Left links --> */}
                  {/* <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
                    <li class="nav-item text-center mx-2 mx-lg-1">
                      <NavLink class="nav-link active" aria-current="page" to="#!">
                        <div>
                          <i class="fas fa-home fa-lg mb-1"></i>
                        </div>
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item text-center mx-2 mx-lg-1">
                      <NavLink class="nav-link" to="#!">
                        <div>
                          <i class="far fa-envelope fa-lg mb-1"></i>
                          <span class="badge rounded-pill badge-notification bg-danger">11</span>
                        </div>
                        Link
                      </NavLink>
                    </li>
                    <li class="nav-item text-center mx-2 mx-lg-1">
                      <NavLink class="nav-link disabled" aria-disabled="true" to="#!">
                        <div>
                          <i class="far fa-envelope fa-lg mb-1"></i>
                          <span class="badge rounded-pill badge-notification bg-warning">11</span>
                        </div>
                        Disabled
                      </NavLink>
                    </li> */}
                    {/* <li class="nav-item dropdown text-center mx-2 mx-lg-1">
                      <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
                        aria-expanded="false">
                        <div>
                          <i class="far fa-envelope fa-lg mb-1"></i>
                          <span class="badge rounded-pill badge-notification bg-primary">11</span>
                        </div>
                        Dropdown
                      </NavLink> */}
                      {/* <!-- Dropdown menu --> */}
                      {/* <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                        <li><NavLink class="dropdown-item" to="#">Action</NavLink></li>
                        <li><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <NavLink class="dropdown-item" to="#">Something else here</NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul> */}

                  {/* <!-- Left links --> */}
                 
                    <ul className=' ms-auto  flex-row mt-3 mt-lg-2 '>
                      <div className='navbarlist text-center mx-2 mx-lg-1 navbar-brand ' >
                      {/* <div className='listrow'> */}
                      
                        <NavLink class="navbar-brand " exact to="/">Created  Classes</NavLink>
                        {/* </div> */}
                      
                      {/* <div className='listrow'> */}
                        <NavLink class=" " exact to="/enrolledclasses">Enrolled Classes</NavLink>
                        
                        {/* </div> */}
                      </div>
                    </ul>

            
                  {/* <!-- Right links --> */}
                  <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                    <li class="nav-item text-center mx-2 mx-lg-1">
                        <NavLink class="nav-link" exact to="/class/joinclass">
                          <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                          Join Class
                        </button>
                       </NavLink>
                    </li> 
                    <li class="nav-item text-center mx-2 mx-lg-1">
                      <NavLink class="nav-link" exact to="/class/craeteclass">
                        <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                          Create Class
                        </button>
                        
                      </NavLink>
                    </li>
                  </ul> 
                  </div>
                  </nav>
                  {/* <!-- Right links --> */}
            
                  {/* <!-- Search form --> */}
                  {/* <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
                    <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                      Search
                    </button>
                  </form> */}
                {/* </div> */}
                {/* <!-- Collapsible wrapper --> */}
              {/* </div> */}
              {/* <!-- Container wrapper --> */}
            {/* </nav> */}
            {/* <!-- Navbar --> */}
    </div>
    );
}

export default ClassNavBar;