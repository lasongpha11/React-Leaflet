import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

          <div className="col-2">
            <div className="card">
            <img className="card-img-top" style={{width:"250px"}} src={this.props.img} />
              <div className="card-body">
                <h4 className="card-title">{this.props.product_name}</h4>
                <p className="card-text">{this.props.product_price}</p>
              </div>
            </div>
          </div>

        );
    }
}

export default Product;
