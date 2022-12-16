import { React, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logoGPS.png";
import cedula from "../../assets/images/cedula.png";
import email from "../../assets/images/email.png";
import passwordIcon from "../../assets/images/password.png";
import hiddenPassword from "../../assets/images/hiddenPassword.png";
import visiblePassword from "../../assets/images/visiblePassword.png";

import {
  saveUser,
  comprobarUsuario,
  validateDominicanId,
} from "../../database";
import validator from "validator";

export default function SignUp() {
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  const [ceedula, setCedula] = useState("");
  const [eemail, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleInputChangeCedula = ({ target }) => {
    setCedula(target.value);
  };
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
  return (
    <div className="main-container">
      <Link to="/login">
        <img
          src={logo}
          style={{ margin: 40, width: 200, height: 200 }}
          alt=""
        />
      </Link>

      <div className="form-container">
        <form>
          <div className="input-container">
            <img
              src={cedula}
              width={27}
              height={27}
              style={{ padding: 5 }}
              alt=""
            />
            <input
              type="text"
              placeholder="Cedula: 00000000000"
              style={{ fontSize: 14 }}
              value={ceedula}
              onChange={handleInputChangeCedula}
              maxLength="11"
            />
          </div>
          <div className="input-container">
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
              className="password-eye-icon"
              onClick={togglePassword}
              src={passwordIconShown ? visiblePassword : hiddenPassword}
              width={25}
              height={25}
              style={{}}
              alt=""
            />
          </div>

          <input
            type="button"
            value="Registrar"
            className="register"
            style={{ backgroundColor: "#23ad3e" }}
            onClick={async () => {
              if (eemail === "" || ceedula === "" || contrasena === "") {
                alert("Debe de llenar todos los campos");
                return;
              }

              if (!validateDominicanId(ceedula)) {
                alert("La cédula que ha introducido no es válida");
                return;
              }

              if (!validator.isEmail(eemail)) {
                alert("El email que ha introducido no es valido");
                return;
              }

              if (contrasena.length < 8) {
                alert("Tu contraseña debe tener mínimo de 8 caracteres");
                return;
              }

              let alerta = await comprobarUsuario(eemail, ceedula);

              if (alerta !== true) {
                alert(alerta);
                return;
              }

              saveUser(eemail, ceedula, contrasena);
              localStorage.setItem("email", eemail);
              navigate("/userregistered");
              return;
            }}
          />
        </form>
      </div>
    </div>
  );
}
