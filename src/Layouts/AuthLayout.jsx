import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <header className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto text-center h-screen'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;