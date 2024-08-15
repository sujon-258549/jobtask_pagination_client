import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navber_and_footer/Navbar';
import Footer from './Navber_and_footer/Footer';

const Main = () => {
    return (
        <div className='flex  flex-col'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;
