import React from 'react';
import favicon from '../../favicon.webp'
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center mb-12'>
            <div className='flex items-center'>
                <img src={favicon} alt=""/>
                <p className='text-3xl ml-3 font-semibold logo-color'>Web Dev Quizer</p>
            </div>
            <div className='flex text-lg font-semibold justify-evenly'>
                <NavLink className="mx-5 logo-color" to="/home">Home</NavLink>
                <NavLink className="mx-5 logo-color" to="/topics">Topics</NavLink>
                <NavLink className="mx-5 logo-color" to="/statistics">Statistics</NavLink>
                <NavLink className="mx-5 logo-color" to="/blogs">Blog</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;