import React,{Component} from 'react';
function CreateClass() 
{
   
        return (
            // <div className="segment">
            <div className='register-body'>
            <div className='container'>
                <form className='form-signup'>
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Add Jobs</h2>
                    <p className='text-center'>Aware your peers about new opprtunities </p>
                    
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="text" name="organization" placeholder='Organization Name' />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="text" name="jobrole" placeholder='Job Role' />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="text" name="jodescription" placeholder='Job Description' />
                            </div>
                    </div>
                    
                    
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input class="btn btn-success btn-block"type="submit" value="Add Job" />
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