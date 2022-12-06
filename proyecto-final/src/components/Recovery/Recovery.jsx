import React, { useState } from "react";
import "./Recovery.css";

// Icons
import logo from "../../assets/images/logoGPS.png";
import email from "../../assets/images/email.png";
import { Link } from "react-router-dom";

export default function Recovery() {
  const [eemail, setEmail] = useState("");
  const handleInputChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  return (
    // Contenido general
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
              width={27}
              height={27}
              style={{ padding: 5 }}
              alt=""
            />
            <input
              type="text"
              placeholder="E-mail"
              style={{ fontSize: 14 }}
              value={eemail}
              onChange={handleInputChangeEmail}
            />
          </div>

          <Link to="/emailsent">
            <input
              type="submit"
              value="Enviar correo"
              className="send-email"
              onClick={localStorage.setItem("email", eemail)}
            />
          </Link>
        </form>
      </div>
    </div>
  );
}
