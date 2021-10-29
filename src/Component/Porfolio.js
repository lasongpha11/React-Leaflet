import React from 'react';

class Porfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 1*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href={"#portfolioModal"+this.props.id}>
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={this.props.image} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{this.props.name}</div>
                <div className="portfolio-caption-subheading text-muted">{this.props.category}</div>
              </div>
            </div>
           {/* modal */}
 <div className="portfolio-modal modal fade" id={"portfolioModal"+this.props.id} tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal"  /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">{this.props.name}</h2>
                    <p className="item-intro text-muted"></p>
                    <img className="img-fluid d-block mx-auto" src={this.props.image} alt="..." />
                    <p>{this.props.content}</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        {this.props.client}
                      </li>
                      <li>
                        <strong>Category:</strong>
                        {this.props.category}
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





          </div>

        );
    }
}

export default Porfolio;
