import React from "react";
import { Link } from "react-router-dom";
import "./EmailSent.css";


import logo from "../../assets/images/logoGPS.png";
import returnArrow from "../../assets/images/returnArrow.png";

export default function EmailSent() {
  const email = localStorage.getItem("email");
  return (
    <div className="main-container">
      <Link to="/login">
        <img
          src={logo}
          style={{ margin: 40, width: 200, height: 200 }}
          alt=""
        />
      </Link>
      <div className="email-sent-text">
        <h2>Hemos enviado un link al correo: {email}</h2>
      </div>
      <div className="email-sent-return">
        <Link to="/login" style={{ textDecoration: "none", color: "#3C6B76" }}>
          <h3>
            {" "}
            <img
              src={returnArrow}
              style={{ width: 35, height: 50, paddingBottom: 20 }}
              alt=""
            />{" "}
            Devuelta al inicio de sesion
          </h3>
        </Link>
      </div>
    </div>
  );
}
