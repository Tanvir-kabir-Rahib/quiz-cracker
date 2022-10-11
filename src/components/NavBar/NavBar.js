import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to="/home">Topics</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
        </div>
    );
};

export default NavBar;