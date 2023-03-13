import React,{Component} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login2()
{
    const navigate = useNavigate();
    const[user,setUser]=useState({  email:"", password:""});

    let name,value;
    const  handleInput= (e) =>    {
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        console.log(user);
    }

    const sendData =async (e)=>{
        e.preventDefault();
        const {email,password} = user;
        
        const res = await fetch('/signin',{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
        // console.log(data);
        if(res.status === 422 || !data)
        {
            window.alert("Login unSuccessful");
            navigate('/login');
        }
        else
        {
            window.alert("Login Successful");
            navigate('/profile');
        }
    }

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
                                <input className='form-control' style={{width:'95%'}} type="email" name="email" value={user.email} onChange={handleInput} placeholder='Email Address' />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                        <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="password" name='password' value={user.password} onChange={handleInput} placeholder='Password'/>
                        </div>
                    </div>
                    
                    
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input class="btn btn-success btn-block" style={{width:'95%'}} type="submit" value="Login" onClick={sendData}/>
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
            // </div>
        );
    
}

export default Login2;