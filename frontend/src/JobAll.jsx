import JobCard from "./JobCard";
import JobNavBar from "./JobNavBar";
import Sidebar from "./sidebar";
function JobAll() {
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
                <JobNavBar/>
                
                <JobCard/><JobCard/><JobCard/><JobCard/>

            </div>
          </div>

          
        </div> 
      </div>
      
      
      );
    }
    
export default JobAll;