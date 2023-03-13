import { Component } from "react";
import './profile.css';
import { NavLink } from 'react-router-dom';

function JobCard()
{
        return (
          // <h1>Yagnik</h1>
          <div>
          
                <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                <h6 class="mb-0">Organization Name </h6>
                                </div>
                                <div class="col-sm-10 text-secondary">
                                Google
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-2">
                                <h6 class="mb-0">Job Role</h6>
                                </div>
                                <div class="col-sm-10 text-secondary">
                                Software Devlpment Engineer
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-2">
                                <h6 class="mb-0">Job Description</h6>
                                </div>
                                <div class="col-sm-10 text-secondary">
                                    <p>
                                        Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

                                        You must write an algorithm with O(log n) runtime complexity.
                                    </p>
                               
                                </div>
                            </div>
                            <hr/>

                            <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
                                <li class="nav-item text-center mx-2 mx-lg-1">
                                    <NavLink class="nav-link" exact to="https://careers.google.com/">
                                    <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                                        Apply Now 
                                    </button>
                                </NavLink>
                                </li>
                            </ul> 
                            
                            
                            </div>
                        </div>
                    </div>
            

            </div>
        
        

        
        );
    
}

export default JobCard;

//https://www.bootdey.com/snippets/view/profile-with-data-and-skills#css