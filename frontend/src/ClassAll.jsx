import ClassCardGrid from "./ClassCardGrid";
import ClassNavBar from "./ClassNavBar";
import Sidebar from "./sidebar";
function ClassAll() {
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
                <ClassNavBar/> 
                <ClassCardGrid/> 
            </div>
          </div>

          
        </div> 
      </div>
      
      
      );
    }
    
export default ClassAll;