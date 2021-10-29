import React, { Component } from "react";
import {
  Redirect,
} from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: true
    }
  }
  
  submitForm = (event) => {
    event.preventDefault();
    if(this.state.isRedirect === true) {
      return <Redirect to ="/" />
    }
  }
  render() {
    return (
      <form action method="post">
      <div className="form-group">
        <input type="text" className placeholder="username" />
      </div>
      <div className="form-group">
        <input type="text" className placeholder="password" />
      </div>
      <button type="submit" onClick={(event) =>this.submitForm(event)} className="btn btn-primary">Send</button>
      </form>
    );
  }
}
 
export default Contact;