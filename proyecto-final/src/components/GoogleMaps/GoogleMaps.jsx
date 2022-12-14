import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
const containerStyle = {
  width: '400px',
  height: '400px'
};


// TODO: Arreglar posicionamiento de los botones de Iniciar y Registrar en /login,
// Cargar mapa correctamente ya que parece existir un error de autenticacion en /home edita un poco el home para replicar el error, 
// arreglar los cards en /promociones ya que el sidebar en este se esta extendiendo sin razon
export default function GoogleMaps(props) {

  const { isLoaded } =  useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAGT9PG9-H-kpNG7JXlxYpDcyTxdqaawr0",
  });
  console.log(props.position)
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(props.position);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (


    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.position}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      
      { /* Child components, such as markers, info windows, etc. */ }
      <> {props.marks.map((mark)=>{return <MarkerF position={mark} />})}</>
    </GoogleMap>
) : <></>
}

// async function Map() {
//   const center = { lat: 18.4861, lng: -69.944312 };

//    return (
//     <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
//       <MarkerF position={center} />
//     </GoogleMap>
//   );
// }