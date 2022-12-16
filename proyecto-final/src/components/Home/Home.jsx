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
    setMarkers((markers) => []);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        lat: 18.48373129363572,
        lng: -69.93936346282472,
      },
      {
        lat: 18.46230846131442,
        lng: -69.97575640780086,
      },
      {
        lat: 18.451074693159523,
        lng: -69.95286811795593,
      },
    ]);
  };

  let handlePapel = () => {
    setMarkers((markers) => []);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        lat: 18.426967001374425,
        lng: -69.97735400063748,
      },
      {
        lat: 18.442517540324015,
        lng: -69.96994811265985,
      },
      {
        lat: 18.463655884409064,
        lng: -69.91902304808973,
      },
    ]);
  };

  let handleVidrio = () => {
    setMarkers((markers) => []);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      {
        lat: 18.476603224127874,
        lng: -69.92015097876276,
      },
      {
        lat: 18.464411532355296,
        lng: -69.95872640517196,
      },
      {
        lat: 18.428317511114933,
        lng: -69.98940658921907,
      },
    ]);
  };

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
          <Dropdown.Item onClick={handlePlastico}>
            Plastico y/o envases metalicos
          </Dropdown.Item>
          <Dropdown.Item onClick={handlePapel}>Papel</Dropdown.Item>
          <Dropdown.Item onClick={handleVidrio}>Vidrio</Dropdown.Item>
        </DropdownButton>
        <div className="map-container">
          <GoogleMaps position={center} marks={markers}></GoogleMaps>
        </div>
      </div>
    </div>
  );
}
