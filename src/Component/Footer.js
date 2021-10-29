import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer className="footer py-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright © Cửa Hàng Online 2021</div>
                <div className="col-lg-4 my-3 my-lg-0">
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a className="link-dark text-decoration-none me-3" href="#!">Chính sách Tham gia</a>
                  <a className="link-dark text-decoration-none" href="#!">Hỗ Trợ</a>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
