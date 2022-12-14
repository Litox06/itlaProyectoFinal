import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import "./Home.css";

const center = {
  lat: 18.4861,
  lng: -69.944312,
};

let markers = [
  {
    lat: 18.4861,
    lng: -69.944382,
  },
  {
    lat: 18.4861,
    lng: -69.944353,
  },
  {
    lat: 18.4861,
    lng: -69.944329,
  },
];
// TODO: Arreglar posicionamiento de los botones de Iniciar y Registrar en /login,
// Cargar mapa correctamente ya que parece existir un error de autenticacion en /home edita un poco el home para replicar el error,
// arreglar los cards en /promociones ya que el sidebar en este se esta extendiendo sin razon
export default function Home() {
  const user = localStorage.getItem("email");
  const puntos = localStorage.getItem("puntos");
  return (
    <div className="home-container">
      <div className="information">
        <p>{user}</p>
        <p>Puntoxxxs: {puntos}</p>
      </div>
      <div className="dropdown-menus">
        <DropdownButton
          id="dropdown-basic-button"
          title="Tipo de material a reciclar"
        >
          <Dropdown.Item href="#/action-1">
            Plastico y/o envases metalicos
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Papeeel</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vidrio</Dropdown.Item>
        </DropdownButton>
        <div className="map-container">
          <GoogleMaps zoom={10} position={center} marks={markers}></GoogleMaps>
        </div>
      </div>
    </div>
  );
}
