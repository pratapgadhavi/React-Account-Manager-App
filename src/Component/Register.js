import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };    

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-3">Register</h3>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
