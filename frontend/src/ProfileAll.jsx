import Profile from "./Profile";
import ProfileNavBar from "./ProfileNavBar";
import Sidebar from "./sidebar";
function ProfileAll() {
    return (
      <div >
         
        <div className='maindiv'>
        
        
          <div className='mainsidebarsetup'>  
            <div className='sidebar'>
                <Sidebar/>
            </div>
          </div>

          <div className='pagecontent'>
            <div>
                <ProfileNavBar/>
                <Profile/>

            </div>
          </div>

          
        </div> 
      </div>
      
      
      );
    }
    
export default ProfileAll;