import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';

function Layout() {
    return (
        <div className='layoutContainer'>
            
            {/* <Navbar /> */}
            <Header />

            <div className='flex flex-col min-h-screen max-w-5xl mx-auto'>
                <Outlet />
            </div>
            
        </div>
    )
}

export default Layout;