import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Check if passwords match before sending request
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return setError("Passwords do not match.");
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <Header />
      <div className="container flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-[80vw] md:w-[40vw] p-4 bg-white shadow-md rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-2 border rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-2 border rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 border rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 border rounded-md"
            onChange={handleChange}
            required
          />
          <button type="submit" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AdminSignup;
