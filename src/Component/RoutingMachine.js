import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({lote1, setState}) => {

  // console.log(lote1.lat, lote1.lng)
  const instance = L.Routing.control({
    waypoints: [ 
        L.latLng(10.820600754436127, 106.71197996743955),
        L.latLng(10.81918168005943, 106.69420325519941)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    position: 'bottomright',
    collapsible: true,
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });
  console.log(instance);
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
