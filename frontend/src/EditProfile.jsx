import React,{Component} from 'react';
import { setState, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function EditProfile()
{
    const navigate = useNavigate();
    const[user,setUser]=useState({  name:"" ,designation:"", organization:"", 
                                    website:"", github:"" ,twitter:"", instagram:"",facebook:"",linkedin:"",
                                    email:"",phoneno:"", mobileno:"",address:"",
                                    techskillname1:"",techskillname2:"",techskillname3:"",techskillname4:"",techskillname5:"",
                                    techskilllevel1:"20",techskilllevel2:"20",techskilllevel3:"20",techskilllevel4:"20",techskilllevel5:"20",
                                    softskillname1:"Communication",softskillname2:"Leadership",softskillname3:"Managment Skill",softskillname4:"Presentation Skill",softskillname5:"Writing Skill",
                                    softskilllevel1:"20",softskilllevel2:"20",softskilllevel3:"20",softskilllevel4:"20",softskilllevel5:"20"
                            });

    
        let name,value;
        const  handleInput= (e) =>  {
                name=e.target.name;
                value=e.target.value;
                setUser({...user,[name]:value});
                console.log(user);
                console.log(user);
        }

        const sendData =async (e)=>{
            e.preventDefault();
            const {
                name,
                designation,
                organization,
                website,
                github,
                twitter,
                instagram,
                facebook,
                linkedin,
                email,
                phoneno,
                mobileno,
                address,
                techskillname1,
                techskillname2,
                techskillname3,
                techskillname4,
                techskillname5,
                techskilllevel1,
                techskilllevel2,
                techskilllevel3,
                techskilllevel4,
                techskilllevel5,
                softskillname1,
                softskillname2,
                softskillname3,
                softskillname4,
                softskillname5,
                softskilllevel1,
                softskilllevel2,
                softskilllevel3,
                softskilllevel4,
                softskilllevel5
            } = user;
            
            const res = await fetch('/editprofile',{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                        name,
                        designation,
                        organization,
                        website,
                        github,
                        twitter,
                        instagram,
                        facebook,
                        linkedin,
                        email,
                        phoneno,
                        mobileno,
                        address,
                        techskillname1,
                        techskillname2,
                        techskillname3,
                        techskillname4,
                        techskillname5,
                        techskilllevel1,
                        techskilllevel2,
                        techskilllevel3,
                        techskilllevel4,
                        techskilllevel5,
                        softskillname1,
                        softskillname2,
                        softskillname3,
                        softskillname4,
                        softskillname5,
                        softskilllevel1,
                        softskilllevel2,
                        softskilllevel3,
                        softskilllevel4,
                        softskilllevel5
                    
                })
            });
            // console.log(await res.json());
            const data = await res.json();
            console.log(res.status);
            if(res.status == 422 || !data)
            {
                window.alert("invalid registration");
                navigate('/editprofile');
            }
            else
            {
                window.alert("Profile Updated");
                navigate('/login');
            }
        }

        return (
            // <div className="segment">
            <div className='register-body'>
            <div className='container'>
                <form className='form-editprofile'>
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <h2 className='text-center'>Complete Profile</h2>
                    <p className='text-center'>Upadte your skills & Achivments</p>
                    
                    
                <div>

                    <h4>Personal Details</h4>

                    <div>

                        <div>
                            <div className='form-group m-2'>
                                    <div className='row'>
                                        <input className='form-control' style={{width:'95%'}} type="text" value={user.name} name="name" onChange={handleInput} placeholder='Full Name' />
                                    </div>
                            </div> 
                        </div>

                        <div>
                            <div className='form-group m-2'>
                                    <div className='row'>
                                        <input className='form-control' style={{width:'95%'}} type="text" value={user.designation} name="designation" onChange={handleInput} placeholder='Designation' />
                                    </div>
                            </div> 
                        </div>

                        <div>
                            <div className='form-group m-2'>
                                    <div className='row'>
                                        <input className='form-control' style={{width:'95%'}} type="text" value={user.organization} name="organization" onChange={handleInput} placeholder='Organization' />
                                    </div>
                            </div> 
                        </div>

                    </div>
                </div>

                    <hr/>


                <div>
                    
                    <h4>Social Media Handles</h4>

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.website} name="website" onChange={handleInput} placeholder='Website' />
                                </div>
                        </div> 
                        

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.github} name="github" onChange={handleInput} placeholder='Github' />
                                </div>
                        </div> 

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.twitter} name="twitter" onChange={handleInput} placeholder='Twitter' />
                                </div>
                        </div> 

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.facebook} name="facebook" onChange={handleInput} placeholder='Facebook' />
                                </div>
                        </div> 

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.instagram} name="instagram" onChange={handleInput} placeholder='Instagram' />
                                </div>
                        </div> 

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.linkedin} name="linkedin" onChange={handleInput} placeholder='LinkedIn' />
                                </div>
                        </div> 

                </div>

                <hr/>

                <div>
                    
                    <h4>Contact Details</h4>

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.email} name="email" onChange={handleInput} placeholder='Email' />
                                </div>
                        </div> 
                        

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.phoneno} name="phoneno" onChange={handleInput} placeholder='Phone no' />
                                </div>
                        </div> 

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.mobileno} name="mobileno" onChange={handleInput} placeholder='Mobile no' />
                                </div>
                        </div> 

                        <div className='form-group m-2'>
                                <div className='row'>
                                    <input className='form-control' style={{width:'95%'}} type="text" value={user.address} name="address" onChange={handleInput} placeholder='Address' />
                                </div>
                        </div> 


                </div>

                <hr/>

                <div>

                <h4>Soft Skill</h4>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.softskillname1} name="softskillname1" onChange={handleInput} placeholder='Soft Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" aria-label="Default select example" style={{width:'92.3%'}} value={user.softskilllevel1} name="softskilllevel1" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.softskillname2} name="softskillname2" onChange={handleInput} placeholder='Soft Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.softskilllevel2} name="softskilllevel2" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.softskillname2} name="softskillname2" onChange={handleInput} placeholder='Soft Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.softskilllevel3} name="softskilllevel3" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.softskillname4} name="softskillname4" onChange={handleInput} placeholder='Soft Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.softskilllevel4} name="softskilllevel4" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.softskillname5} name="softskillname5" onChange={handleInput} placeholder='Tech Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.softskilllevel5} name="softskilllevel5" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                </div>
                
                <hr/>

                <div>

                <h4>Technical Skill</h4>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.techskillname1} name="techskillname1" onChange={handleInput} placeholder='Tech Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.techskilllevel1} name="techskilllevel1" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.techskillname2} name="techskillname2" onChange={handleInput} placeholder='Tech Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.techskilllevel2} name="techskilllevel2" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.techskillname3} name="techskillname3" onChange={handleInput} placeholder='Tech Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.techskilllevel3} name="techskilllevel3" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.techskillname4} name="techskillname4" onChange={handleInput} placeholder='Tech Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.techskilllevel4} name="techskilllevel4" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                    <div className='form-group m-2'>
                            <div className='row'>
                                <input className='form-control' style={{width:'95%'}} type="text" value={user.techskillname5} name="techskillname5" onChange={handleInput} placeholder='Tech Skill ' />
                            </div>

                    </div> 
                    <div>
                            <select class="form-select" style={{width:'92.3%'}} aria-label="Default select example" value={user.techskilllevel5} name="techskilllevel5" onChange={handleInput} >
                                
                                <option value="20" selected>Basic</option>
                                <option value="40">Intermediate</option>
                                <option value="60">Advanced</option>
                                <option value="80">Expert</option>
                                <option value="100">Master</option>
                            </select>
                    </div>

                </div>
                
                <hr/>


                
                    
                    
                    
                    <div className="form-group m-2">
                        
                        <div className='row'>
                            <input class="btn btn-success btn-block" style={{width:'95%'}} type="submit" value="Edit Profile" onClick={sendData}/>
                        </div>
                        
                    </div>
                </div>
                </form>


            </div>
            </div>
            // </div>
        );
    
}

export default EditProfile;