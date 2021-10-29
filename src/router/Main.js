import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "../Component/Home";
import Search from "../Component/Search";
import a from '../Component/a'
import LoginReact from '../pages/LoginReact'
class Main extends Component {
    constructor(props) {
      super(props);
    }
    render() {    
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Search">Search</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/search">SignUp</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/Search" component={Search}/>
              <Route path="/login" component={LoginReact}/>
              <Route path="/search" component={Search}/>
              <Route path="/tintuc/:slug.:id.html" component={a}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;