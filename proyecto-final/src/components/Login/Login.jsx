import React, { useState } from "react";
import "./Login.css";

// Icons
import logo from "../../assets/images/logoGPS.png";
import email from "../../assets/images/email.png";
import passwordIcon from "../../assets/images/password.png";
import hiddenPassword from "../../assets/images/hiddenPassword.png";
import visiblePassword from "../../assets/images/visiblePassword.png";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../database";

export default function Login(props) {
  // Estados para la funcionalidad de mostrar/esconder password
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  const [eemail, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [estado, setEstado] = useState();

  const navigate = useNavigate()

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
            <div className="recovery">
              <Link
                style={{ textDecoration: "none", color: "#7E8CA0" }}
                to="/recovery"
              >
                <p>¿Olvidaste tu contraseña?</p>
              </Link>
            </div>

            <h4>{estado}</h4>

            {/* 
            TODO: 

            FRONTEND
            - Arreglar el submit en el login
            - Crear Home component
            - Hacer que al iniciar sesion se redirija al Home component
            - Crear validaciones para: Cedula invalida, email ya esta en uso, usuario no existe con ese email, contraseña incorrecta.

            BACKEND

            - Crear otra coleccion para los botes de basura que contengan: latitud, longitud, material
            */}

            <input
              type="button"
              value="Iniciar"
              className="sign-in"
              onClick={() => {
                try {
                  getUser(eemail, contrasena)
                    .then((value) => {
                      if (value === false) {
                        setEstado("Email o contraseña incorrecta");
                      } else {
                        // boolean
                        setAuthParent();
                        localStorage.setItem("email", value.email);
                        localStorage.setItem("puntos", value.puntos);
                        navigate("/home")
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
                type="button"
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
