import React,{useEffect} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home()
{
    const [userdata,setuserdata]=useState({});
    const navigate = useNavigate();
    const takeData = async ()=>{
        
        try {
            const res = await fetch('/home',{
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            // if(!res.status == 200)
            // {
            //     throw new Error("Error occured");
            //     navigate('/login');
            // }
            const data = await res.json();
            setuserdata(data);
            
            // console.log("this is "+userdata);
        }
        catch(err)
        {
            throw new Error("error occured");
        }
    }
    useEffect(()=>{
        takeData();
    });

        return (
            // <div className="segment">
            
            <div className='register-body'>
                <h1>Welcome to the home page Mr.{userdata.name} with the email id {userdata.email}.</h1>
            </div>
            // </div>
        );
}


export default Home;