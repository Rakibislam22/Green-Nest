import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className=' quicksand-font relative'>
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>

            <div className='bg-green-50/30 pt-6 bg-gradient-to-r from-green-50 via-transparent to-green-50 pb-20'>
                <Outlet></Outlet>
            </div>
            
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

export default MainLayout; <Navbar></Navbar>