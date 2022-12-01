import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Recovery from "./components/Recovery/Recovery";
import EmailSent from "./components/EmailSent/EmailSent";
import UserRegistered from "./components/UserRegistered/UserRegistered";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [auth, setAuth] = React.useState(false);
  const parentAuth = (bool) => {
    setAuth(bool);
  };
  return (
    
    <Router>
      {!auth ? "" : <Sidebar />}

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login parentAuth={parentAuth} />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/emailsent" element={<EmailSent />} />
        <Route path="/userregistered" element={<UserRegistered />} />
      </Routes>
    </Router>
  );
}

export default App;
