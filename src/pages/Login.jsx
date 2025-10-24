import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { google, userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [eye, setEye] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value

        e.target.reset();

        userLogin(email, password).then(result => {
            setUser(result.user);
            navigate(`${location.state ? location.state : "/"}`)
        }).catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    }


    const handleGoogle = () => {
        google().then(result => {
            toast.success('Login successful!');
            setUser(result.user);
            navigate(`${location.state ? location.state : "/"}`)
        }).catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    }


    return (<div className="flex justify-center items-center min-h-screen bg-green-50/25">
        <title>Green Nest - Login</title>
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"> <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Login </h2>

            <form onSubmit={handleLogin} className="space-y-5 relative">
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
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type={eye ? "text" : "password"} name='password'
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                    />
                    <span onClick={() => setEye(!eye)} className='absolute right-3 top-33 cursor-pointer z-10'>
                        {
                            eye ? <FaEye /> : <FaEyeSlash />
                        }
                    </span>
                </div>

                <div className="text-right">
                    <a
                        href="https://gmail.com/" target='_blank'
                        className="text-sm text-emerald-600 hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full btn btn-primary text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                    Login
                </button>

                <button onClick={handleGoogle} type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-colors" > <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> <span className="text-gray-700 font-medium">Continue with Google</span> </button>
            </form>

            <p className="text-sm text-center text-gray-600 mt-6">
                Don’t have an account?{" "}
                <Link to="/auth/signup" className="text-emerald-600 hover:underline">
                    Sign Up
                </Link>
            </p>
        </div>
    </div>


    );
};

export default Login;
