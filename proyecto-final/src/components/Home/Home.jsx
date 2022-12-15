import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import "./Home.css";
import axios from "axios";

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
    lng: -69.94453,
  },
  {
    lat: 18.4861,
    lng: -69.94423,
  },
];

// TODO: Arreglar posicionamiento de los botones de Iniciar y Registrar en /login,
// Cargar mapa correctamente ya que parece existir un error de autenticacion en /home edita un poco el home para replicar el error,
// arreglar los cards en /promociones ya que el sidebar en este se esta extendiendo sin razon
export default function Home() {
  const id = localStorage.getItem("id");

  const [puntos, setpuntos] = useState(0);
  const [email, setemail] = useState("");

  const url = `http://localhost:4200/api/users/${id}`;

  axios.get(url).then((response) => {
    setpuntos(response.data.puntos);
    setemail(response.data.email);
  });

  return (
    <div className="home-container">
      <div className="information">
        <p>{email}</p>
        <p>Puntos: {puntos}</p>
      </div>
      <div className="dropdown-menus">
        <DropdownButton
          id="dropdown-basic-button"
          title="Tipo de material a reciclar"
        >
          <Dropdown.Item>Plastico y/o envases metalicos</Dropdown.Item>
          <Dropdown.Item>Papel</Dropdown.Item>
          <Dropdown.Item>Vidrio</Dropdown.Item>
        </DropdownButton>
        <div className="map-container">
          <GoogleMaps zoom={10} position={center} marks={markers}></GoogleMaps>
        </div>
      </div>
    </div>
  );
}
