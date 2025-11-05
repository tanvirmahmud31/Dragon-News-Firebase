import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>

            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto mt-7 grid grid-cols-12 gap-5 '>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside> </LeftAside>
                </aside>

                <main className='col-span-6'>
                    <Outlet></Outlet>
                </main>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside> </RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;