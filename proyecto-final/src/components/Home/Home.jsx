import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./Home.css";

// TODO: Arreglar posicionamiento de los botones de Iniciar y Registrar en /login,
// Cargar mapa correctamente ya que parece existir un error de autenticacion en /home edita un poco el home para replicar el error, 
// arreglar los cards en /promociones ya que el sidebar en este se esta extendiendo sin razon
export default function Home() {
  useLoadScript({
    googleMapsApiKey: "AIzaSyAGT9PG9-H-kpNG7JXlxYpDcyTxdqaawr0",
  });
  return (
    <div className="home-container">
      <div className="information">
        <p>email_aquemail_aquiemail_aqui</p>
        <p>489 puntos</p>
      </div>

      <div className="dropdown-menus">
        <DropdownButton
          id="dropdown-basic-button"
          title="Tipo de material a reciclar"
        >
          <Dropdown.Item href="#/action-1">
            Plastico y/o envases metalicos
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Papel</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vidrio</Dropdown.Item>
        </DropdownButton>
        <Map />
      </div>
    </div>
  );
}

function Map() {
  const center = { lat: 18.4861, lng: -69.9312 };

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}