import React, {Component, useState} from 'react';
import axios from 'axios';

function Login() {
    // register
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setpasswordReg] = useState("");

    // login
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    // login status
    const [loginStatus, setLoginStatus] = useState("");

    const register = () => {
    return axios.post(`${URL}/register`,{
        username:usernameReg,
        password:passwordReg
    })
    .then((respon) => console.log(respon));
    }
    const login = () => {
        return axios.post(`${URL}/login`,{
            username:username,
            password:password
        })
        .then((resp) => {
            // if(resp.data.message) {
            //     setLoginStatus(resp.data.message)
            // }else {
            //     setLoginStatus(resp.data[0].username)
            // }
            console.log(resp)
        });
    }
    return ( 
        <div className="container">
            <h2>Register</h2>
            <div className="form-group">
            <input onChange={(e) => {setUsernameReg(e.target.value)}} type="text" name="user" id="user" className="form-control" placeholder=" User " />
            </div>
            <div className="form-group">
            <input onChange={(e) => {setpasswordReg(e.target.value)}} type="text" name="password" id="password" className="form-control" placeholder=" Password " />
            </div>
            <button onClick={register} type="reset" className="btn btn-primary">Register</button>

            <h2>Login</h2>
            <div className="form-group">
            <input onChange={(e) => {setUsername(e.target.value)}} type="text" name="user" id="user" className="form-control" placeholder=" User " />
            </div>
            <div className="form-group">
            <input onChange={(e) => {setpassword(e.target.value)}} type="text" name="password" id="password" className="form-control" placeholder=" Password " />
            </div>
            <button onClick={login} type="reset" className="btn btn-primary">Login</button>

            <h1>{loginStatus}</h1>
        </div>
     )
}

export default Login;