import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

// TODO: arreglar boton de registrar, crear componente de recuperacion, arreglar nombres de divs y CSS para que esten separados,
// conectar los componentes (Login - Registrarse - Recuperar Contraseña)

function App() {
  return (
    <Router>
      <Login/>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;