import React,{Component} from 'react';
function JoinClass()
{
   
        return (
            // <div className="segment">
            <div className='register-body'>
            <div className='container'>
                <form className='form-signup'>
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Join Class</h2>
                    <p className='text-center'>Join Class Using Classcode</p>
                    
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="text" name="classcode" placeholder='Class Code' />
                            </div>
                    </div>
                    
                    
                    
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input class="btn btn-success btn-block"type="submit" value="Join Classroom" />
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
            // </div>
        );
    
}

export default JoinClass;