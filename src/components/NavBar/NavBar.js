import React, { useState } from 'react';
import favicon from '../../favicon.webp'
import { NavLink } from 'react-router-dom';
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center mb-24'>
            <div className='flex items-center'>
                <img src={favicon} alt="" />
                <p className='text-3xl ml-3 font-semibold logo-color'>Web Dev Quizer</p>
            </div>
            <div className=''>
                <div onClick={() => setOpen(!open)} className='md:hidden text-3xl logo-color' >
                    {
                        open ? <FontAwesomeIcon icon={faXmark} />
                            : <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <div className={`text-xl font-semibold bg-white flex flex-col md:flex-row absolute md:static ease-in duration-300 z-10 ${open ? "h-full right-8 top-20" : "right-8 top-[-144px]"}`}>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mx-5 logo-color underline underline-offset-4 md:underline-offset-8 mb-2 md:mb-0" : "mx-5 logo-color mb-2 md:mb-0"
                    } to="/home">Home</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mx-5 logo-color underline underline-offset-4 md:underline-offset-8 mb-2 md:mb-0" : "mx-5 logo-color mb-2 md:mb-0"
                    } to="/topics">Topics</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mx-5 logo-color underline underline-offset-4 md:underline-offset-8 mb-2 md:mb-0" : "mx-5 logo-color mb-2 md:mb-0"
                    } to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mx-5 logo-color underline underline-offset-4 md:underline-offset-8 mb-2 md:mb-0" : "mx-5 logo-color mb-2 md:mb-0"
                    } to="/blogs">Blog</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;