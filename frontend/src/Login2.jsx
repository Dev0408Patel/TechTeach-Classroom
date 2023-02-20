import React,{Component} from 'react';
class Register extends Component
{
    render()
    {
        return (
            // <div className="segment">
            <div className='register-body'>
            <div className='container'>
                <form className='form-signup'>
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Login</h2>
                    <p className='text-center'>Login to TechTeach</p>
                    
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="email" name="emailid" placeholder='Email Address' /><hr />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                        <div className='row'>
                                <input className='form-control' type="password" name='password' placeholder='Password'/><hr />
                        </div>
                    </div>
                    
                    
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input class="btn btn-success btn-block"type="submit" value="Login" />
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
            // </div>
        );
    }
}

export default Register;