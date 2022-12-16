import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "50vh",
  borderRadius: "15px",
  border: "30px",
};

export default function GoogleMaps(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAGT9PG9-H-kpNG7JXlxYpDcyTxdqaawr0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(props.position);
      map.fitBounds(bounds);

      setMap(map);
    },
    [props.position]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={11}
      center={props.position}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        {" "}
        {props.marks.map((mark) => {
          return <MarkerF position={mark} />;
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
