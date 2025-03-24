import React, { useState } from "react";
import Header2 from "../components/prod/Header2";
import Footer from "../components/home/Footer";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { login, loading, error, success } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="m-0 p-0 overflow-hidden min-h-[100vh] items-center flex flex-col justify-between">
      <Header2 />
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 w-[80vw] md:w-[40vw] p-4 bg-white"
        >
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">Login successful! Redirecting...</p>}
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500">Sign up here</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
