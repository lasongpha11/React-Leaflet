import React, { useState, useRef,useEffect } from "react";
import L from 'leaflet'
import { MapContainer , TileLayer, Marker, Popup, useMapEvents, LayersControl, LayerGroup } from "react-leaflet";
import Footer from "./Footer";
import "leaflet/dist/leaflet.css"
import "./css/style.css"
// icon - data
import burger from './resources/img/1622050.png'
import kfcicon from './resources/img/kfc-icon.png'
import locaiton from './resources/img/user-location-33-723648.png'
import locaiton1 from './resources/img/icon-location.png'
import addicon from './resources/img/addicon.png'

import Kfc from './resources/data/KFC.json'
import Lote from './resources/data/Lote.json'

// ant designt
import { Card, Button , Modal, Select ,Input, Row, Col   } from 'antd';
import Routing from "./RoutingMachine";
import Slider from './layout/Slider';

const { Option } = Select;
const { TextArea } = Input;
// Select
function handleChange(value) {
  console.log(`selected ${value}`);
}

const { Meta } = Card;
// markerIcon
const Addicon = new L.Icon({
  iconUrl: addicon,
  iconSize: [35,45]
});
const Burger = new L.Icon({
  iconUrl: burger,
  iconSize: [35,45]
});
const kfc_icon = new L.Icon({
  iconUrl: kfcicon,
  iconSize: [35,45]
});

const Locaiton = new L.Icon({
  iconUrl: locaiton,
  iconSize: [35,45]
});
const location_click = new L.Icon({
  iconUrl: locaiton1,
  iconSize: [45,55]
});
// ban dang o day
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker icon={Locaiton} position={position}>
      <Popup>Bạn đang ở vị trí này</Popup>
    </Marker>
  )
}



const Search = () => {


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [state, setState] = useState({ 
    // lat:10.81036278, 
    // lng:106.6929581
    lat:0, 
    lng:0
  });
// varible
  const ZOOM_LEVEL2 = 13;
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();
  const center = [10.801861826963755, 106.71069029773444];
  const [people, setPeople] = useState([]);
  const [place, setPlace] = useState([{
    name:'',
    img:'',
    address:'',
    link:'',  
    lat:'10.801861826963755',
    lng:'106.71069029773444'
  }]);

  
  // console.log(people.map((person) => {
  //   console.log(person)
  // }));
  
console.log(place)

  return (
    <>
    <Row>
      <Col span={20} push={4}>
      <MapContainer
          className="markercluster-map"
          center= {center}
          zoom= {ZOOM_LEVEL}
          maxZoom={18}
          ref = {mapRef}
          >
          <AddMarker people={people} setPeople={setPeople} />
          <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                  <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                  <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                  />
              </LayersControl.BaseLayer>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
{/* AddMarker */}
<LayersControl.Overlay checked name="Add Item">
  <LayerGroup>
    {people.map((person) => (
      <Marker icon={Addicon} position={[person.lat, person.lng]} >
        <Popup>
                      <Card
                          style={{ width: 300 }}
                          cover={
                            <img
                              alt="example"
                              src={person.img}
                            />
                          }
                        >
                          <Meta
                            title={ person.name}
                            description= {person.address}
                          />
                          <br />
                          <b>Giờ mở cửa: </b> 8h - 22h <br />
                          <b>Phone: </b> 0966109724
                          <Button value="large" block> <a href={person.linkweb}>Xem chi tiet</a></Button>
                          <br />
                          <a target="_blanks" href={"https://www.google.com/maps/dir/B%C3%ACnh+Th%E1%BA%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/10.817316119482395,+106.7072283396109"+ person.lat + ',+' + person.lng +"/@10.8145786,106.7024632,16z/data=!3m1!4b1!4m12!4m11!1m5!1m1!1s0x3175289f02a8eae9:0x34ec9d90e055cde3!2m2!1d106.7091422!2d10.8105831!1m3!2m2!1d106.7072283!2d10.8173161!3e0"} tabindex="0">Mở Google map - </a>
                            
                          <a target="_blanks" onClick={showModal} tabindex="0">
                            Báo cáo
                          </a>
                          <Modal title="Báo cáo địa điểm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <b>Lý do</b>
                          <Select defaultValue="Sai Tên" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="Sai Tên">Sai Tên</Option>
                            <Option value="Sai SĐT">Sai SĐT</Option>
                            <Option value="Sai Vị Trí">Sai Vị Trí</Option>
                            <Option value="Sai Địa Chỉ">Sai Địa Chỉ</Option>
                            <Option value="Các vấn đề khác">Các vấn đề khác</Option>
                         </Select>
                            <b>Nội dung báo cáo</b>
                            <TextArea rows={4} placeholder="Hãy mô tả cho chúng tối biết lý do" />
                          </Modal>
                        </Card>
                   </Popup>
      </Marker>
    ))}
  </LayerGroup>
</LayersControl.Overlay>
<LayersControl.Overlay checked name="Search">
  <LayerGroup>
      <Marker icon={location_click}  pane="popupPane" position={ ['undefined','undefined'] ? [0,0] : [place.lat, place.lng]} >
        <Popup>
                <Card
                    style={{ width: 300 }}
                    cover={
                      <img alt="example" src={place.img}/>
                    }
                  >
                    <Meta
                      title={ place.name}
                      description= {place.address}
                    />
                    <br />
                    <b>Giờ mở cửa: </b> 8h - 22h <br />
                    <b>Phone: </b> 0966109724
                    <Button value="large" block> <a href="https://www.foody.vn/thuong-hieu/kfc-ha-noi">Xem chi tiet</a></Button>
                    <br />
                    <a target="_blanks" href={place.link} tabindex="0">Mở Google map - </a>
                      
                    <a target="_blanks" onClick={showModal} tabindex="0">
                      Báo cáon
                    </a>
                    <Modal title="Báo cáo địa điểm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                      <b>Lý do</b>
                    <Select defaultValue="Sai Tên" style={{ width: '100%' }} onChange={handleChange}>
                      <Option value="Sai Tên">Sai Tên</Option>
                      <Option value="Sai SĐT">Sai SĐT</Option>
                      <Option value="Sai Vị Trí">Sai Vị Trí</Option>
                      <Option value="Sai Địa Chỉ">Sai Địa Chỉ</Option>
                      <Option value="Các vấn đề khác">Các vấn đề khác</Option>
                    </Select>
                      <b>Nội dung báo cáo</b>
                      <TextArea rows={4} placeholder="Hãy mô tả cho chúng tối biết lý do" />
                    </Modal>
                  </Card>
              </Popup>
      </Marker>
  </LayerGroup>
</LayersControl.Overlay>

<LayersControl.Overlay checked name="KFC">
                  <LayerGroup>
              {Kfc.map((kfc1, index) => (
                  <Marker 
                      position={[kfc1.lat, kfc1.lng]} 
                      icon={kfc_icon}
                      key={index}
                  >
                  <Popup>
                      <Card
                          style={{ width: 300 }}
                          cover={
                            <img
                              alt="example"
                              src={kfc1.img}
                            />
                          }
                        >
                          <Meta
                            title={ kfc1.name}
                            description= {kfc1.address}
                          />
                          <br />
                          <b>Giờ mở cửa: </b> 8h - 22h <br />
                          <b>Phone: </b> 0966109724
                          <Button value="large" block> <a href="https://www.foody.vn/thuong-hieu/kfc-ha-noi">Xem chi tiet</a></Button>
                          <br />
                          <a target="_blanks" href={kfc1.link} tabindex="0">Mở Google map - </a>
                            
                          <a target="_blanks" onClick={showModal} tabindex="0">
                            Báo cáo
                          </a>
                          <Modal title="Báo cáo địa điểm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <b>Lý do</b>
                          <Select defaultValue="Sai Tên" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="Sai Tên">Sai Tên</Option>
                            <Option value="Sai SĐT">Sai SĐT</Option>
                            <Option value="Sai Vị Trí">Sai Vị Trí</Option>
                            <Option value="Sai Địa Chỉ">Sai Địa Chỉ</Option>
                            <Option value="Các vấn đề khác">Các vấn đề khác</Option>
                         </Select>
                            <b>Nội dung báo cáo</b>
                            <TextArea rows={4} placeholder="Hãy mô tả cho chúng tối biết lý do" />
                          </Modal>
                        </Card>
                   </Popup>
                  </Marker>
              ))}
              </LayerGroup>
</LayersControl.Overlay>

<LayersControl.Overlay checked name="Lote">
                  <LayerGroup>
              {Lote.map((lote1, index) => (
                  <Marker 
                      position={[lote1.lat, lote1.lng]} 
                      icon={Burger}
                      key={index}
                      eventHandlers={{ click: () => console.log("haha") }}
                  >
                                      <Popup>
                    <Card
                        style={{ width: 300 }}
                        cover={
                          <img
                            alt="example"
                            src={lote1.img}
                          />
                        }
                      >
                        <Meta
                        
                          title={ lote1.name}
                          description= {lote1.address}
                        />
                        
                        <b>Giờ mở cửa: </b> 8h - 22h <br />
                        <b>Phone: </b> 0966109724
                        
                        <Button value="large" block> <a href="https://www.foody.vn/ho-chi-minh/lotteria-lotte-mart-go-vap">Xem chi tiet</a> </Button>
                        <br />
                          <a target="_blanks" href={lote1.link} tabindex="0">Mở Google map - </a>
                          
                          <a target="_blanks" onClick={showModal} tabindex="0">
                            Báo cáo
                          </a>
                          <Modal title="Báo cáo địa điểm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <b>Lý do</b>
                          <Select defaultValue="Sai Tên" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="Sai Tên">Sai Tên</Option>
                            <Option value="Sai SĐT">Sai SĐT</Option>
                            <Option value="Sai Vị Trí">Sai Vị Trí</Option>
                            <Option value="Sai Địa Chỉ">Sai Địa Chỉ</Option>
                            <Option value="Các vấn đề khác">Các vấn đề khác</Option>
                         </Select>
                            <b>Nội dung báo cáo</b>
                            <TextArea rows={4} placeholder="Hãy mô tả cho chúng tối biết lý do" />
                          </Modal>
                      </Card>
                                      </Popup>
                                      </Marker>
                                  ))}
                  </LayerGroup>
</LayersControl.Overlay>
                  <LocationMarker />
                  <Routing  lote1={state} setState={setState} />
                </LayersControl >
              </MapContainer>
      </Col>
      {/* left - group */}
      <Col span={4} pull={20}>
        <Slider place={place} setPlace={setPlace} people={people} setPeople={setPeople} />
      </Col>
    </Row>
    <Footer />
    </>
  );
};

// AddMarker
const AddMarker = ( { people,setPeople }) => {
  const [position, setPosition] = useState(null);
  const [input, setInput] = useState({
    name: "",
    address: "", 
    img:"", 
    link:""
  });
  useMapEvents({
    click: (e) => {
      setPosition(e.latlng); // 👈 add marker
      /* CODE TO ADD NEW PLACE TO STORE (check the source code) */
    },
  });
  const onChange = e => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  };
  const handelClick = () => {
      setPeople([
        ...people,
        {
            name: input.name,
            address: input.address,
            img: input.img,
            link: input.link,
            lat: position.lat,
            lng: position.lng
        }
    ])
  }

  return position === null ? null : (
    <Marker icon={Addicon} position={position}>
        <Popup>
    <h6> Đóng góp điểm cửa hàng của bạn </h6>
    <b>Lat</b>
      <div>
        <input 
            type = "text"
            value={position.lat} 
            name="lat"
            disabled={true}
          />
      </div>
      <b>Lng</b>
      <div>
        <input 
            type = "text"
            value={position.lng} 
            name="lng"
            disabled={true}
          />
      </div>
      <br />
            <h6>Điền Thông Tin Cửa Hàng Của Bạn</h6>
            <b>Nhập Tên Cửa Hàng</b>
            <Input onChange={onChange} type="text" name="name" value={input.name} placeholder="Vd: Bách Hóa Xanh" />
             <b>Địa chỉ cửa hàng</b>
            <Input onChange={onChange} name="address" value={input.address} placeholder="Vd: 125 Nguyễn Cửu Vân" />
            <b>Hình ảnh cửa hàng</b>
            <Input onChange={onChange} name="img" value={input.img} placeholder="Vd: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxiUjTzqT-_uzNHBDVvV5Snaox88FUmQ2UA&usqp=CAU" />
            <b>Website đến cửa hàng</b>
            <Input onChange={onChange} name="link" value={input.linkweb} placeholder="Vd: https://www.bachhoaxanh.com/" />          
            <Button onClick={handelClick} >Thêm Điểm cửa hàng</Button>
        </Popup>
    </Marker>
  );
};

 
export default Search;

 {/* <iframe src="https://www.atlistmaps.com/map/ae88d114-d97f-4587-a5dc-ed5c5fc04ded?share=true" allow="geolocation" width="100%" height="700px" frameborder="0" scrolling="no" allowfullscreen></iframe> */}