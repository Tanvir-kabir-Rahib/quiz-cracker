import React from 'react';
import "./Header.css"
import overpic from "../../html-css-js.png"

const Header = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 banner-bg'>
            <div className='p-6 lg:p-12 text-indigo-500 text-3xl lg:text-4xl font-bold my-auto'>
                <p className='mb-6 text-indigo-500'>Web Dev Quizer </p>
                <p>Your best quizing partner for the web develop journey.</p>
            </div>
            <div>
                <img src={overpic} alt=""/>
            </div>
        </div>
    );
};

export default Header;