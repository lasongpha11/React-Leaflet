import React, { Component } from "react";
import ChiTiet from "./ChiTiet";
import dl from './dulieu.json'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h2 className="text-center">HELLO</h2>
        <div className="row">
        {/* {
          dl.map((value,key) => {
            return (
              <ChiTiet key ={key}
              id = {value.id}
              tieude = {value.name} 
              />
            )
          })
        } */}
        </div>
      </div>
    );
  }
}
 
export default Home;