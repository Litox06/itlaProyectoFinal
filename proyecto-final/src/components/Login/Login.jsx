import React, { useState } from "react";
import "./Login.css"

// Icons
import logo from "../../assets/images/logoGPS.png";
import userIcon from "../../assets/images/username.png";
import passwordIcon from "../../assets/images/password.png";
import hiddenPassword from "../../assets/images/hiddenPassword.png";
import visiblePassword from "../../assets/images/visiblePassword.png";

export default function Login() {
  // Estados para la funcionalidad de mostrar/esconder password
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  const togglePassword = () => {
    // Funcionalidad de mostrar/esconder password
    setPasswordShown(!passwordShown);
    setPasswordIconShown(!passwordIconShown);
  };

  return (
    // Contenido general
    <div className="loginContainer">
      <div className="mainContainer">
        <img src={logo} style={{ margin: 40, width: 200, height: 200 }} alt="" />
        <div className="formContainer">
          {/* Contenido de los formularios (username y password)
        tambien un poco de estilo */}
          <form>
            <div className="inputContainer">
              <img
                src={userIcon}
                width={17}
                height={17}
                style={{ padding: 5 }}
                alt=""
              />
              <input
                type="text"
                placeholder="Usuario"
                style={{ fontSize: 14 }}
              />
            </div>

            <div className="inputContainer">
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
              />
              <img
                className="passwordEyeIcon"
                onClick={togglePassword}
                src={passwordIconShown ? visiblePassword : hiddenPassword}
                width={25}
                height={25}
                style={{}}
                alt=""
              />
            </div>
            <div className="recovery">
              <p>¿Olvidaste tu contraseña?</p>
            </div>
            <input type="submit" value="Iniciar" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
}