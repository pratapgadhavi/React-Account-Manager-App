import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && form.email === savedUser.email && form.password === savedUser.password) {
      alert("Login successful!");
      setUser(savedUser);
      navigate("/account");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-3">Login</h3>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-success w-100 mb-2">Login</button>
        <Link to="/register" className="btn btn-link w-100">Don’t have an account? Register</Link>
      </form>
    </div>
  );
}
