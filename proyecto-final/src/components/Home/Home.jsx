import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Home.css";

export default function Home() {
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
      </div>

      <div className="map"></div>
    </div>
  );
}
