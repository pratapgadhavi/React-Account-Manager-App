import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account({ user, setUser }) {
  const [form, setForm] = useState(user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(form));
    setUser(form);
    alert("Account updated!");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-3">Account Details</h3>
      <div className="w-50 mx-auto">
        <input className="form-control mb-2" name="name" value={form.name} onChange={handleChange} />
        <input className="form-control mb-2" name="email" value={form.email} onChange={handleChange} />
        <input className="form-control mb-3" type="password" name="password" value={form.password} onChange={handleChange} />
        <button onClick={handleSave} className="btn btn-primary w-100 mb-2">Save Changes</button>
        <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
      </div>
    </div>
  );
}
