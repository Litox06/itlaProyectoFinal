import React from "react";
import "./Recovery.css";

// Icons
import logo from "../../assets/images/logoGPS.png";
import email from "../../assets/images/email.png";
import { Link } from "react-router-dom";

export default function Recovery() {
  return (
    // Contenido general
    <div className="recovery-container">
      <div className="recovery-main-container">
        <Link to="/login">
          <img
            src={logo}
            style={{ margin: 40, width: 200, height: 200 }}
            alt=""
          /> 
        </Link>

        <div className="recovery-text">
          <h1>¿Contraseña olvidada?</h1>
          <p>
            Por favor indique el correo que usa para iniciar sesion en la
            aplicacion
          </p>
        </div>

        <div className="recovery-form-container">
          <form>
            <div className="recovery-input-container">
              <img
                src={email}
                width={17}
                height={17}
                style={{ padding: 5 }}
                alt=""
              />
              <input
                type="text"
                placeholder="E-mail"
                style={{ fontSize: 14 }}
              />
            </div>

            <Link to="/emailsent">
              <input
                type="submit"
                value="Enviar correo"
                className="send-email"
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
