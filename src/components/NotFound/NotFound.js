import React from 'react';
import { Link } from 'react-router-dom';
import notfound404 from "../../404-not-found.webp"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>            
            <p className='text-center text-4xl font-bold'>Page Not Found</p>
            <img src={notfound404} alt=""/>
            <p className='text-center text-3xl font-semibold'>Return <Link className='underline link' to="/home">Home</Link></p>
        </div>
    );
};

export default NotFound;