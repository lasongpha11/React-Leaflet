import React, {useState} from 'react';
import LoginForm from './LoginForm';
import '../index.css'
import {
    Route,
    NavLink,
    HashRouter,
  } from "react-router-dom";
import Search from "../Component/Search";
import '../App.css'
import App from '../App'
function LoginReact() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Login in");
            setUser({
                name: details.name,
                email: details.email
            })
        }else {
            console.log("Details not match");
            setError("Details not match");
        }
    }
    const Logout = () => {
        setUser({name:"", email:""})
    }
    return (
        <div className="LoginReact">
            {(user.email !== "") ? (
                <div className="welcone">
                    <HashRouter>
                        <div>
                            <ul className="header">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/search">Search</NavLink></li>
                            <li style={{float:'right'}} onClick={Logout} ><NavLink to="/login">Logout</NavLink></li>
                            </ul>
                            <div className="content">
                            <Route exact path="/" component={App}/>
                            <Route path="/search" component={Search}/>
        
                            {/* <Route path="/tintuc/:slug.:id.html" component={a}/> */}
                            </div>
                        </div>
                    </HashRouter>
                    {/* <h2>Welcone, <span> {user.name} </span></h2>
                    <button onClick={Logout}>Logout</button> */} 
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    )
}
export default LoginReact;

