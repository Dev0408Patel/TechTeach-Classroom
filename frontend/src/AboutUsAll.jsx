import AboutUs from "./AboutUs";
import Sidebar from "./sidebar";
function AboutUsAll() {
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
                <AboutUs/>

            </div>
          </div>

          
        </div> 
      </div>
      
      
      );
    }
    
export default AboutUsAll;