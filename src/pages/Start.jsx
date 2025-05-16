
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/home/Header';

const Start = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Get Started with Shoppy</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
            <p className="text-gray-600 mb-4">Join our community and start shopping today.</p>
            <Link to="/register" className="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Already have an account?</h2>
            <p className="text-gray-600 mb-4">Welcome back! Sign in to continue shopping.</p>
            <Link to="/login" className="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
