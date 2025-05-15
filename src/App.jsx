import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

const App = () => {
  const [user, setUser] = useState(null); 

  const handleLogin = (username, role) => {
    setUser({ username, role }); 
    console.log("Kullanıcı Giriş Yaptı:", { username, role });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;