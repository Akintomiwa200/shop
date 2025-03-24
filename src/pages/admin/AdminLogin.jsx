import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use React Router for navigation
import Header2 from "../../components/prod/Header2";
import Footer from "../../components/home/Footer";

const AdminLogin = () => {
  const navigate = useNavigate(); // React Router navigation
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", { // Update with your backend API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard/"); // Navigate to admin dashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <Header2 />
      <div className="container flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-[80vw] md:w-[40vw] p-4 bg-white">
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
          <button type="submit" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
