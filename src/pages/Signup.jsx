import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
    return (<div className="flex justify-center items-center min-h-screen bg-gray-100"> <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"> <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Sign Up </h2>

        <form className="space-y-5">
            
            <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Photo URL</label>
                <input
                    type="text"
                    placeholder="Enter your photo URL"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
                Register
            </button>
            <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors" > <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> <span className="text-gray-700 font-medium">Continue with Google</span> </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-emerald-600 hover:underline">
                Login
            </Link>
        </p>

    </div>
    </div>

    );
};

export default Signup;
