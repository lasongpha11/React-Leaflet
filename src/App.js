import 'antd/dist/antd.css';
import axios from 'axios';
import React from 'react';
import './App.css';
import Footer from './Component/Footer';
import Porfolio from './Component/Porfolio';
// store

const URL = 'https://reactjs-leaflet.herokuapp.com/'

const getStore = () => axios.get(`${URL}/getstore`)
.then((res) => res.data);
const addStore = (name,category,client,content,image) => {
  return axios.post(`${URL}/addStore`,{name,category,client,content,image})
  .then((resp) => resp.data);
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      name:'',
      category:'',
      client:'',
      content:'',
      image:'',
    };
  }
  componentWillMount() {
    if(this.state.data === null) {
      getStore().then((resP)=> {
        this.setState({
          data:resP
        });
      })
    }
  }
  PrintStore = () => {
    if(this.state.data !== null) {
       return this.state.data.map((value,key) =>(<Porfolio id={key+1} name={value.name} category = {value.category}
          client = {value.client}
          content = {value.content}
          image = {value.image}
  />))
    }
  }
  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]:value
    });
  }
  isChange1 = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]:value
    });
  }

  handelClickStore = () => {
      console.log(JSON.stringify(this.state));
      var {name,category,client,content,image} = this.state;
      var dataTempStore = [];
      var itemStore = {};
      itemStore.name = name;
      itemStore.category = category;
      itemStore.client = client;
      itemStore.content = content;
      itemStore.image = image;
      dataTempStore = this.state.data;
      console.log(dataTempStore)
      if(itemStore.category !=='') {
        dataTempStore.push(itemStore);
      }
      addStore(name,category,client,content,image).then((response) => {
          console.log(response);
      })
  }
  
  render() {

console.log(this.state)
    return (

     <div className="container-fluid">
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Chào mừng bạn đến Trang Tìm Kiếm Cửa hàng</div>
                <div class="masthead-heading text-uppercase">Nhanh Và Tiện Lợi  </div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Đăng Tin Cửa Hàng
            </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Đăng Bán Sản Phẩm</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
              <form method="post">
                  <div className="form-group">
                    <label style={{color: 'black', float: 'left', fontSize: '18px'}} >Tên cửa hàng</label>
                    <input onChange={(event) => this.isChange1(event)} type="text" name="name" className="form-control" placeholder="name" />
                  </div>
                  <div className="form-group">
                  <label style={{color: 'black', float: 'left', fontSize: '18px'}} > Danh mục</label>
                    <input onChange={(event) => this.isChange1(event)} type="text" name="category" className="form-control" placeholder="Category" />
                  </div>
                  <div className="form-group">
                  <label style={{color: 'black', float: 'left', fontSize: '18px'}}>Tác Giả</label>
                    <input onChange={(event) => this.isChange1(event)} type="text" name="client" className="form-control" placeholder="client" />
                  </div>
                  <div className="form-group">
                  <label style={{color: 'black', float: 'left', fontSize: '18px'}}>Nội dung</label>
                    <input onChange={(event) => this.isChange1(event)} type="text" name="content" className="form-control" placeholder="content" />
                  </div>
                  <div className="form-group">
                  <label style={{color: 'black', float: 'left', fontSize: '18px'}}>Linh Ảnh (nếu có) </label>
                    <input onChange={(event) => this.isChange1(event)} type="text" name="image" className="form-control" placeholder="Link" />
                  </div>
                  <button type="button" style={{margin:'0px 5px'}} className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button onClick={() => this.handelClickStore()} type="reset" className="btn btn-primary">Đăng Tin Sản Phẩm</button>
              </form>
              </div>
            </div>
          </div>
        </div>
            </div>
        </header>
        <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Các Mặt Hàng</h2>
            <h3 className="section-subheading text-muted">Danh Sách Các Kinh Doanh Chuỗi Cửa Hàng Tiềm Năng Năm 2021</h3>
          </div>
         <div className="row">

         {this.PrintStore()}
        </div>
        </div>
      </section>
      <Footer />
    
    </div>
    );
  }
}

export default App;
