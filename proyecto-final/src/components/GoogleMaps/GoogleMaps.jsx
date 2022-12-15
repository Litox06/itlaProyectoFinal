import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
const containerStyle = {

  width: "50%",
  height: "50vh",
  borderRadius: "15px",
  border: "30px",
};

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
  }, [props.position])

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