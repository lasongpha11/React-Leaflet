import React, { useState } from 'react';
import { Menu, Input, Modal, Button, Row, Col, Select   } from 'antd';
import { HomeOutlined, createFromIconfontCN, PlusOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';
import Kfc from '../resources/data/KFC.json'
import Lote from '../resources/data/Lote.json'
// import { renderToString } from 'react-dom/server';
const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

function Slider({ place, setPlace, people, setPeople }) {

const dataList = Kfc.concat(Lote,people);

const [searchText, setSearchText] = useState('');
const [data, setData] = useState(dataList);
const excludeColumns = ['name','lat', 'lng' , 'img', 'link'];

console.log(place)
const handleChange = value => {
  setSearchText(value);
  filterData(value);
};
const filterData = value => {
  const lowerCaseValue = value.toLowerCase().trim();
  if (!lowerCaseValue) {
    setData(dataList);
  }
  else {

    const filter = dataList.filter(item => {
      return Object.keys(item).some(key => {
        return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue);
      })
    });
    setData(filter)
  }
}
const handleClick = () => {
  // setData(dataList)
};
// modal
const [visible, setVisible] = useState(false);
const [visible2, setVisible2] = useState(false);
const [visible3, setVisible3] = useState(false);
const [input2, setInput2] = useState([{
  name: "",
  address: "", 
  img:"", 
  link:"", 
  lat:0,
  lng:0
}]);
// onchange input
const onChange2 = e => {
  setInput2({
    ...input2,
    [e.target.name]: e.target.value
})
};
const handelClick2 = () => {
  setPeople([
    ...people,
    {
        name: input2.name,
        address: input2.address,
        img: input2.img,
        link: input2.link,
        lat: input2.lat,
        lng: input2.lng
    }
])
}
// Select 
const { Option } = Select;
function handleChange1(value) {
  console.log(`selected ${value}`);
}
const onChange3 = e => {
  console.log('Change:', e.target.value);
};
const { TextArea } = Input;
  return (
    <>
    <Menu
        onClick={handleClick}
        style={{ width: '300px' , overflow: 'auto' , height: '800px'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
         <Row>
          <Col span={11}><Button onClick={() => setVisible(true)} style={{margin: '10px 0px'}} block> <PlusOutlined style={{ fontSize: '16px', margin: '4px' ,position: 'relative', top:'-3px' }} /> Đóng Góp</Button></Col>
          <Col span={1} ></Col>
          <Col span={11}><Button onClick={() => setVisible2(true)} style={{margin: '10px 0px'}} block> <UserOutlined style={{ fontSize: '16px', margin: '4px' ,position: 'relative', top:'-3px' }} /> Hỗ Trợ</Button></Col>
        </Row>
        <Row>
          <Col span={5}></Col>
          <Col span={14}><Button onClick={() => setVisible3(true)} style={{margin: '0px 0px 10px 0px'}} type="primary"> <EditOutlined style={{ fontSize: '16px', margin: '4px' ,position: 'relative', top:'-3px' }} /> Báo lỗi Và Góp Ý </Button></Col>
          <Col span={5}></Col>
        </Row>
        <Modal
        title="Về Chúng Mình"
        centered
        visible={visible2}
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
        width={600}
      >
        <p>Dự án được phát triển bởi sinh viên trường Tài Nguyên Và Môi Trường: </p>
        <p><li><b>Tên: Phan Phương Nam</b> <a href="https://www.facebook.com/waidkid1412/" >(https://www.facebook.com/waidkid1412/)</a> </li> </p>
        <p><li>Liên hệ hoặc zalo: <b>0966109724</b> để được hỗ trợ tốt nhất.</li></p>
        <p> Email: phanphuongnam0103@gmail.com nếu có góp ý dự án.</p>
      </Modal>
      <Modal
        title="Báo Cáo Địa Điểm"
        centered
        visible={visible3}
        onOk={() => setVisible3(false)}
        onCancel={() => setVisible3(false)}
        width={600}
      >
          <p><b>Lý Do</b></p>
          <Select defaultValue="Sai Tên" style={{ width: 550 }} onChange={handleChange1}>
            <Option value="Sai Tên">Sai Tên</Option>
            <Option value="Sai Vị Trí">Sai Vị Trí</Option>
            <Option value="Sai SĐT">Sai SĐT</Option>
            <Option value="Sai Địa Chỉ">Sai Địa Chỉ</Option>
            <Option value="Các Vấn Đề Khác">Các Vấn Đề Khác</Option>
          </Select>
          <p><b>Nội Dung Báo Cáo</b></p>
          <TextArea showCount maxLength={100} onChange={onChange3} autoSize={{ minRows: 4, maxRows: 6 }} />
      </Modal>
       
        <Modal
          title="Đóng Góp Địa Điểm Cửa Hàng Của Bạn"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={600}
        >
          <h6>Điền Thông Tin Cửa Hàng Của Bạn</h6>
            <b>Nhập Tên Cửa Hàng</b>
            <Input  name="name" value={input2.name}  onChange={onChange2} placeholder="Vd: Bách Hóa Xanh" />
             <b>Địa chỉ cửa hàng</b>
            <Input  name="address" value={input2.address} onChange={onChange2} placeholder="Vd: 125 Nguyễn Cửu Vân" />
            <b>Hình ảnh cửa hàng</b>
            <Input  name="img" value={input2.img} onChange={onChange2} placeholder="Vd: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxiUjTzqT-_uzNHBDVvV5Snaox88FUmQ2UA&usqp=CAU" />
            <b>Website đến cửa hàng</b>
            <Input  name="link" value={input2.link} onChange={onChange2} placeholder="Vd: https://www.bachhoaxanh.com/" />       
            <b>Lat</b>
            <Input  name="lat" value={input2.lat} onChange={onChange2} placeholder="vd: 10.814729470191677" />    
            <b>Long</b>
            <Input  name="lng" value={input2.lng} onChange={onChange2} placeholder="vd: 106.71152718772049" />      
            <Button onClick={handelClick2} >Thêm Điểm cửa hàng</Button>
      </Modal>
             <Input placeholder="Tìm cửa hàng"
              value= {searchText}
              onChange={e => handleChange(e.target.value)} 
              />
        <SubMenu key="sub1" icon={<HomeOutlined />} title="Danh Sách Cửa Hàng">
            {data.map((data, index) => 
            <Menu.Item style={{padding: '10px'}} key={index} onClick={ () => setPlace(data)  } > 
                  <IconFont type="icon-shoppingcart" style={{ fontSize: '16px', margin: '7px' ,position: 'relative', top:'-3px' }} />
                  
                   {data.address}
                </Menu.Item>
              )}
              {data.length === 0 && <span>Từ khóa không phù hợp</span>}
        </SubMenu>
      </Menu>
      </>
  );
}
export default Slider;
