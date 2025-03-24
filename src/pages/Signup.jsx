import React, { useState } from "react";
import Header2 from "../components/prod/Header2";
import Footer from "../components/home/Footer";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { signup, loading, error, success } = useSignup();
  const [formData, setFormData] = useState({
    name: "", // 🔹 Renamed from fullName to match backend
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 Check if passwords match before sending request
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Send only relevant data (excluding confirmPassword)
    const { confirmPassword, ...signupData } = formData;
    await signup(signupData);
  };

  return (
    <div className="m-0 p-0 overflow-hidden min-h-[100vh] items-center flex flex-col justify-between">
      <Header2 />
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 w-[80vw] md:w-[40vw] p-4 bg-white"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && (
          <p className="text-green-500 mt-2">Signup successful! Redirecting...</p>
        )}
        <p className="my-8 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login here
          </a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
