import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className=' quicksand-font'>
            
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default AuthLayout;