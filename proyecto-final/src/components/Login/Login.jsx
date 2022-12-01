import React, { useState } from "react";
import "./Login.css";

// Icons
import logo from "../../assets/images/logoGPS.png";
import email from "../../assets/images/email.png";
import passwordIcon from "../../assets/images/password.png";
import hiddenPassword from "../../assets/images/hiddenPassword.png";
import visiblePassword from "../../assets/images/visiblePassword.png";
import { Link } from "react-router-dom";
import { getUser } from "../../database";

export default function Login(props) {
  // Estados para la funcionalidad de mostrar/esconder password
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  const [eemail, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [estado, setEstado] = useState();

  // const [auth, setAuth] = useState(false);

  const handleInputChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleInputChangeContrasena = ({ target }) => {
    setContrasena(target.value);
  };

  const togglePassword = () => {
    // Funcionalidad de mostrar/esconder password
    setPasswordShown(!passwordShown);
    setPasswordIconShown(!passwordIconShown);
  };

  const setAuthParent = () => {
    props.parentAuth(true);
    // this.props.parentAuth(true);
  };

  return (
    // Contenido general
    <div className="login-container">
      <div className="main-container">
        <Link to="/login">
          <img
            src={logo}
            style={{ margin: 40, width: 200, height: 200 }}
            alt=""
          />
        </Link>

        <div className="form-container">
          {/* Contenido de los formularios (username y password)
        tambien un poco de estilo */}
          <form>
            <div className="input-container">
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
                value={eemail}
                onChange={handleInputChangeEmail}
              />
            </div>

            <div className="input-container">
              <img
                src={passwordIcon}
                width={17}
                height={17}
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
            <div className="recovery">
              <Link
                style={{ textDecoration: "none", color: "#7E8CA0" }}
                to="/recovery"
              >
                <p>¿Olvidaste tu contraseña?</p>
              </Link>
            </div>

            <h4>{estado}</h4>

            <input
              value="Iniciar"
              className="sign-in"
              onClick={() => {
                try {
                  getUser(eemail, contrasena)
                    .then((value) => {
                      if (value === false) {
                        setEstado("No se inicio sesion");
                      } else {
                        // boolean
                        setAuthParent();
                        localStorage.setItem("user", value);
                        setEstado(
                          "Bienvendio usuario, este es su numero de cedula: " +
                            value.cedula
                        );
                      }
                    })
                    .catch((e) => alert(e));
                } catch (e) {
                  alert(e);
                }
              }}
            />
            <Link to={"/signup"}>
              <input
                value="Registrar"
                className="register"
                style={{ backgroundColor: "#23ad3e" }}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
