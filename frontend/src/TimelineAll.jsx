import TimelineNavBar from "./TimelineNavBar";
import TimelinePost from "./TimelinePost";
import Sidebar from "./sidebar";
function TimelineAll() {
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
                <TimelineNavBar/>
                <TimelinePost/>

            </div>
          </div>

          
        </div> 
      </div>
      
      
      );
    }
    
export default TimelineAll;