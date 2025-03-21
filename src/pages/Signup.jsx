import React from 'react';
import Header2 from '../components/prod/Header2';
import Footer from '../components/home/Footer';

const Signup = () => {
    return (
        <div className='m-0 p-0 overflow-hidden flex flex-col jusify-center'>
            <Header2 />
            <div className="container flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
                <form className="flex flex-col gap-4 w-[80vw] md:w-[40vw] p-4 border rounded-lg shadow-md bg-white">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-500">Login here</a>.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
