import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usericon from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = (e) => {
        e.preventDefault();
        console.log('trying logout')

        logOut().then(() => {
            alert('logout successfully')
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-4 text-primary'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='login flex gap-5'>
                <img src={usericon} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-6 py-3'>LogOut</button> : <Link to={'/auth/login'} className='btn btn-primary px-6 py-3'>Login</Link>
                }

            </div>

        </div>
    );
};

export default Navbar;