
import ReactDOM from "react-dom";
import React, { Component } from "react";

class SignUp extends Component {
    render(){ return (
        <div>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" style={{marginBottom: '15px'}} /> Remember me 
        </label>
        <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.</p>
        <div className="clearfix">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="signupbtn">Sign Up</button>
        </div>
      </div>
        );
}}
export default SignUp;