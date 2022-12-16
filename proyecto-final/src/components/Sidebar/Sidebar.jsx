import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

// Iconos
import logo from "../../assets/images/logoGPS.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarLogo">
        <img
          src={logo}
          style={{ padding: 20, height: 184, width: 200 }}
          alt=""
        />
      </div>

      <ul className="sidebarElements" style={{cursor:'pointer'}}>
        <li>
          <NavLink className="sidebarFontElements" to="/home">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className="sidebarFontElements" to="/promociones">
            Promociones
          </NavLink>
        </li>
        <li>
          <NavLink className="sidebarFontElements" to="/foro">
            Foro
          </NavLink>
        </li>

        <div className="sidebarExtras">
          <li>
            <NavLink className="sidebarFontElements" to="/configuracion">
              Configuración
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarFontElements" to="/login">
              Cerrar Sesión
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
