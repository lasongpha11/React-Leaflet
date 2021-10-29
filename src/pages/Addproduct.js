import React from 'react';
import axios from 'axios';

// axios
// const axios = require('axios').default;
const addProductAction = (product_name,product_price,img) => {
    return axios.post('/add',{product_name,product_price,img})
    .then((resp) => resp.data);
}

class Addproduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:'',
            img:''
        };
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    handelClick = () => {
        // console.log(JSON.stringify(this.state));
        var {product_name,product_price,img} = this.state;
        addProductAction(product_name,product_price,img).then((response) => {
            console.log(response);
        })
    }
    render() {
        return (

            <div className="row">
              <form>
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} type="text" name="product_name" id="product_name" className="form-control" placeholder=" Ten sp" />
                </div>
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} type="text" name="product_price" id="product_price" className="form-control" placeholder=" Gia sp" />
                </div>
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} type="text" name="img" id="img" className="form-control" placeholder=" Duong link sp" />
                </div>
                <button onClick={this.handelClick()} type="reset" className="btn btn-primary">Them moi</button>
              </form>
            </div>

        );
    }
}
export default Addproduct;
