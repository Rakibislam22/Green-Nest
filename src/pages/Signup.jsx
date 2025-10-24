import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

    const { createUser, setUser, google, forUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    

    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        const hasUpLow = /[A-Z][a-z]/.test(password);

        if (!hasUpLow || password.length < 6) {
            setError('Password must contain at least one uppercase letter, at least one lowercase letter and at least 6 characters long.');
            return;
        }
        setError('');
        e.target.reset();

        createUser(email, password).then(result => {
            toast.success('Register successful!');
            setUser(result);
            console.log(result);
            //Navigate("/")
        }).catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });

        forUpdateProfile(name,photo).then(()=>{}).catch(err => { toast.error(err.message);});
    }

    const handleGoogle = () => {
        google().then(result => {
            toast.success('Register successful!');
            setUser(result.user);
            
        }).catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-50/25"> <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"> <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Sign Up </h2>

            <form onSubmit={handleSignup} className="space-y-5">

                <div>
                    <label className="block text-gray-700 mb-1">Name</label>
                    <input
                        type="text" name='name'
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email" name='email'
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Photo URL</label>
                    <input
                        type="text" name='photoUrl'
                        placeholder="Enter your photo URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password" name='password'
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full btn btn-primary text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                    Register
                </button>
                <button type="button" onClick={handleGoogle} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors" > <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> <span className="text-gray-700 font-medium">Continue with Google</span> </button>
            </form>

            <p className="text-sm text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-emerald-600 hover:underline">
                    Login
                </Link>
            </p>

        </div>
            <ToastContainer position="top-center"/>
        </div>

    );
};

export default Signup;
