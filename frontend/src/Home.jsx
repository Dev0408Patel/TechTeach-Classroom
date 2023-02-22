import React,{useEffect} from 'react';
import { setState, useState } from 'react';

function Home()
{
    // const {name,email,phone,work,password,cpassword} = user;
    // const[user,setUser]=useState({  name:"" ,email:"", password:"", cpassword:"",work:"",phone:"" });
    // let user;
    const takeData = async ()=>{
        // const {name,email,phone,work,password,cpassword} = user;
        try {
            const res = await fetch('/home',{
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            // user=res;
            // console.log(user);
        // console.log(await res.json());
            const data = await res.json();
            // console.log(data);
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
                <h1>Welcome to the home page Mr.</h1>
            </div>
            // </div>
        );
}


export default Home;