import React,{Component} from 'react';
import { setState, useState } from 'react';
import axios from "axios";
function Register()
{
    const[user,setUser]=useState({  name:"" ,email:"", password:"", cpassword:"",work:"",phone:"" });

    let name,value;
    const  handleInput= (e) =>    {
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        // console.log(user);
         console.log(user);
    }

    const sendData =async (e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword} = user;
        
        const res = await fetch('/register',{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });
        console.log(res);
        const data = await res.json();
        console.log(data);
        if(data.status === 422 || !data)
        {
            window.alert("invalid registration");
        }
        else
        {
            window.alert("registration done");
        }
    }


   
        return (
            
            <div className='register-body'>
            <div className='container'>
                <form className='form-signup' method='post'>
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Register</h2>
                    <p className='text-center'>Create Your Account</p>
                    <div className='form-group m-2'>
                        <div className='row'>
                            <input className='form-control' type="text" value={user.name} name="name" onChange={handleInput} placeholder="Full Name"></input>
                        </div>
                    </div>
                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' type="email" name="email" value={user.email} onChange={handleInput} placeholder='Email Address' />
                            </div>
                    </div>
                    <div className='form-group m-2'>
                        <div className='row'>
                            <input className='form-control' type="text" value={user.phone} name="phone" onChange={handleInput} placeholder="Phone no."></input>
                        </div>
                    </div>
                    <div className='form-group m-2'>
                        <div className='row'>
                            <input className='form-control' type="text" value={user.work} name="work" onChange={handleInput} placeholder="Profession"></input>
                        </div>
                    </div>
                    <div className='form-group m-2'>
                        <div className='row'>
                                <input className='form-control' type="password" name='password' value={user.password} onChange={handleInput} placeholder='Password'/>
                        </div>
                    </div>
                    <div className="form-group m-2">
                        <div className="row">
                                <input className='form-control' type="password" name="cpassword" value={user.cpassword} onChange={handleInput} placeholder='Confirm Password' />
                        </div>
                    </div>
                    
                    <div className="form-group m-2">
                    
                        <div className="row">
                        <label>
                            <input type="checkbox"/> I accept the <span><a href=''> T&C </a></span> and <span><a href=''> Privacy Policy </a></span></label>
                        </div>
                        
                    </div>
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input className="btn btn-success btn-block"type="submit" value="Submit" onClick={sendData}/>
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
        );
            
}

export default Register;