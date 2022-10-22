import { React, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logoGPS.png";
import cedula from "../../assets/images/cedula.png";
import email from "../../assets/images/email.png";
import passwordIcon from "../../assets/images/password.png";
import hiddenPassword from "../../assets/images/hiddenPassword.png";
import visiblePassword from "../../assets/images/visiblePassword.png";

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIconShown, setPasswordIconShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordIconShown(!passwordIconShown);
  };
  return (
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
          <form>
            <div className="input-container">
              <img
                src={cedula}
                width={17}
                height={17}
                style={{ padding: 5 }}
                alt=""
              />
              <input
                type="text"
                placeholder="Cedula: 00000000000"
                style={{ fontSize: 14 }}
              />
            </div>
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
              type="submit"
              value="Registrar"
              className="register"
              style={{ backgroundColor: "#23ad3e" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
