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


// TODO: Arreglar posicionamiento de los botones de Iniciar y Registrar en /login,
// Cargar mapa correctamente ya que parece existir un error de autenticacion en /home edita un poco el home para replicar el error,
// arreglar los cards en /promociones ya que el sidebar en este se esta extendiendo sin razon
export default function Home() {
  const id = localStorage.getItem("id");

  const [puntos, setpuntos] = useState(0);
  const [email, setemail] = useState("");

  const url = `http://localhost:4200/api/users/${id}`;

  const [markers, setMarkers] = useState([]);

  axios.get(url).then((response) => {
    setpuntos(response.data.puntos);
    setemail(response.data.email);
  });


  let handlePlastico = () => {
    setMarkers(markers => []);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        lat: 18.4861,
        lng: -69.92103,
      },
      {
        lat: 18.4861,
        lng: -69.912312,
      },
      {
        lat: 18.4861,
        lng: -69.95143,
      }
  ]);
  }

  let handlePapel = () => {
    setMarkers(markers => []);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        lat: 18.4861,
        lng: -69.94403,
      },
      {
        lat: 18.4861,
        lng: -69.944312,
      },
      {
        lat: 18.4861,
        lng: -69.94443,
      }
  ]);
  }

  let handleVidrio = () => {
    setMarkers(markers => []);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        lat: 18.4731,
        lng: -69.94403,
      },
      {
        lat: 18.4711,
        lng: -69.944312,
      },
      {
        lat: 18.4741,
        lng: -69.94443,
      }
  ]);
  }
  // pushMarkers([

  // ], markers)



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
          <Dropdown.Item onClick={handlePlastico}>Plastico y/o envases metalicos</Dropdown.Item>
          <Dropdown.Item onClick={handlePapel}>Papel</Dropdown.Item>
          <Dropdown.Item onClick={handleVidrio}>Vidrio</Dropdown.Item>
        </DropdownButton>
        <div className="map-container">
          <GoogleMaps zoom={10} position={center} marks={markers}></GoogleMaps>
        </div>
      </div>
    </div>
  );
}
