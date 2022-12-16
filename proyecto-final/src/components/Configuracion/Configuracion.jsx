import React, { useState } from "react";

// Icons
import email from "../../assets/images/email.png";
import passwordIcon from "../../assets/images/password.png";
import hiddenPassword from "../../assets/images/hiddenPassword.png";
import visiblePassword from "../../assets/images/visiblePassword.png";
import axios from "axios";
import validator from "validator";
import { comprobarEmail, comprobarPassword, editarEmail, editarPassword } from "../../database";

import "./Configuracion.css";

export default function Configuracion() {
  // Estados para la funcionalidad de mostrar/esconder password
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);
  const [eemail, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [placeholderEmail, setPlaceholderEmail] = useState("");

  const handleInputChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleInputChangeContrasena = ({ target }) => {
    setContrasena(target.value);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordIconShown(!passwordIconShown);
  };

  const id = localStorage.getItem("id");
  const url = `http://localhost:4200/api/users/${id}`;
 

  axios.get(url).then((response) => {
    setPlaceholderEmail(response.data.email);
  });

  return (
    // Contenido general
    <div className="login-container">
      <div className="main-container" style={{left: "60%"}}>
        <h2>Configuración</h2>
        <div className="form-container">
          <form>
            <div className="input-container" >
              <img
                src={email}
                width={27}
                height={27}
                style={{ padding: 5 }}
                alt=""
              />
              <input
                type="text"
                placeholder={placeholderEmail}
                value={eemail}
                style={{ fontSize: 14 }}
                onChange={handleInputChangeEmail}
              />
              <input
                type="button"
                value="Editar correo"
                className="edit-credentials"
                onClick={() => {
                  if (!comprobarEmail(eemail, id)) {
                    alert(
                      "El mismo correo con el que se ha registrado fue introducido, intente de nuevo"
                    );
                    return;
                  }
                  if (!validator.isEmail(eemail)) {
                    alert("Introduzca un email valido");
                    return;
                  }
                  alert("El correo ha sido editado!");
                  editarEmail(eemail, id);
                  setEmail("");
                }}
              />
            </div>

            <div className="input-container">
              <img
                src={passwordIcon}
                width={27}
                height={27}
                style={{ padding: 5 }}
                alt=""
              />
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Contraseña"
                style={{ fontSize: 14 }}
                value={contrasena}
                onChange={handleInputChangeContrasena}
              />
              <img
                className="edit-password-eye-icon"
                onClick={togglePassword}
                src={passwordIconShown ? visiblePassword : hiddenPassword}
                width={25}
                height={25}
                alt=""
              />
              <input
                type="button"
                value="Editar contraseña"
                className="edit-credentials"
                onClick={() => {
                  if (!comprobarPassword(contrasena, id)) {
                    alert(
                      "El mismo correo con el que se ha registrado fue introducido, intente de nuevo"
                    );
                    return;
                  }
                  if (contrasena.length < 8) {
                    alert("Tu contraseña debe tener mínimo de 8 caracteres");
                    return;
                  }
                  alert("La contraseña ha sido editada!");
                  editarPassword(contrasena, id);
                  setContrasena("");
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
