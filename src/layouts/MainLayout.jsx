import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';

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

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout; <Navbar></Navbar>