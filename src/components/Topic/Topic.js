import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Topic.css"

const Topic = ({category}) => {
    return (
        <div className='flex border border-gray-400 rounded-xl'>
            <div className='bg-gray-200 rounded-xl mr-5'>
                <img className='categroy-img' src={category.logo} alt=""/>
            </div>
            <div>
                <p className='text-clr text-3xl font-medium my-3'>{category.name}</p>
                <p className='text-clr text-xl my-5'>Total Questions: {category.total}</p>
                <button className='text-lg font-medium py-2 px-5 btn-bg rounded-full text-white'>Start Practice <FontAwesomeIcon className='text-3xl align-middle ml-2' icon={faArrowRightLong} /></button>
            </div>
        </div>
    );
};

export default Topic;