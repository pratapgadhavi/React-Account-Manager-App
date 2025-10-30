import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Account from "./Component/Account";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={user ? <Account user={user} setUser={setUser} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
