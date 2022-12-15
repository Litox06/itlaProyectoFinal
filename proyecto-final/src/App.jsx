import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Recovery from "./components/Recovery/Recovery";
import EmailSent from "./components/EmailSent/EmailSent";
import UserRegistered from "./components/UserRegistered/UserRegistered";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home"
import Promociones from "./components/Promociones/Promociones";
import Foro from "./components/Foro/Foro"
import 'bootstrap/dist/css/bootstrap.min.css';
import Configuracion from "./components/Configuracion/Configuracion";


function App() {
  const [auth, setAuth] = React.useState(false);
  const parentAuth = (bool) => {
    setAuth(bool);
  };

  return (
    <Router>
      {!auth ? "" : <Sidebar />}
      <Routes>
        <Route path="*" element={<Login parentAuth={parentAuth} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login parentAuth={parentAuth} />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/emailsent" element={<EmailSent />} />
        <Route path="/userregistered" element={<UserRegistered />} />
        <Route path="/home" element={<Home />} />
        <Route path="/promociones" element={<Promociones/>} />
        <Route path="/foro" element={<Foro/>}/>
        <Route path="/configuracion" element={<Configuracion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
