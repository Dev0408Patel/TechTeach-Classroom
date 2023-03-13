import React,{Component} from 'react';
function CreateClass() 
{
   
        return (
            // <div className="segment">
            <div className='register-body'>
            <div className='container'>
                <form className='form-signup'>
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Create Class</h2>
                    <p className='text-center'>Create Class with Class Name</p>
                    
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="text" name="classname" placeholder='Class name' />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="text" name="classdescription" placeholder='Class Description' />
                            </div>
                    </div>
                    
                    
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input class="btn btn-success btn-block"type="submit" value="Create Classroom" />
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
            // </div>
        );
    
}

export default CreateClass;