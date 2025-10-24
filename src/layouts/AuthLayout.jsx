import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className=' quicksand-font'>
            <Navbar></Navbar>
            <Outlet></Outlet>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                closeOnClick={false}
                pauseOnHover
                pauseOnFocusLoss={false}
                draggable={false}
                theme="colored"
                style={{ zIndex: 9999 }}
            />

            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;