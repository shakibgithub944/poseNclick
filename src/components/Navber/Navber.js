import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import navimg from '../asset/navimg.png'

const Navber = () => {
    const { user, logOutUser } = useContext(authContext);
    // console.log(user)

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div>
            <div className="navbar bg-zinc-600 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/services'>Services</Link> </li>
                            <li><Link to='/blog'>Blog</Link> </li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <img src={navimg} alt="" className='h-12 w-52' />
                        <Link to='/' className="text-xl">Pose N Click</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/services'>Services</Link> </li>
                        <li><Link to='/blog'>Blog</Link> </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.displayName? <p className='mr-12 font-bold'>{user.displayName}</p>
                        :
                        ''
                    }

                    {
                        user?.uid? <li onClick={handleLogOut} className="btn">Log Out</li>
                            :
                            <Link to='/login' className="btn">Log in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;