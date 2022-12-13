import React, { useState } from "react";
import "./Recovery.css";

// Icons
import logo from "../../assets/images/logoGPS.png";
import email from "../../assets/images/email.png";
import { Link, useNavigate } from "react-router-dom";
import { comprobarUsuario, existenciaUsuario } from "../../database";

export default function Recovery() {
  const [eemail, setEmail] = useState("");
  const handleInputChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const navigate = useNavigate();

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
            <input
              type="button"
              value="Enviar correo"
              className="send-email"
              onClick={async ()=>{
                if(eemail === ""){
                  alert("Debe rellenar el espacio")
                  return;
                }
                let comp = await existenciaUsuario(eemail)
                if(comp !== true){
                  alert("El correo no esta registrado");
                  return;
                }

                localStorage.setItem("email", eemail)
                navigate("/emailsent")
              }}
            />
        </form>
      </div>
    </div>
  );
}
