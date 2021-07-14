import React, { Component } from "react";
import "../../Css/Account/Registration.css";


function register(){
    return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Registration</h1>
            <form noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  
                />
               
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  
                />
                
              </div>
              <div className="firstName">
                <label htmlFor="Age">Age</label>
                <input
                  placeholder="Age"
                  type="text"
                  name="firstName"
                  noValidate
                  
                />
                
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input  
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  
                />
               
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  
                />
                
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input   
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate           
                />    
              </div>
              <div className="createAccount">
                <button type="submit">Sign Up</button>
                <small></small>
              </div>
            </form>
          </div>
        </div>
      );
    }
  
  
  export default register;
