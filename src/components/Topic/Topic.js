import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Topic.css"

const Topic = ({category,showQuizs}) => {
    return (
        <div className='flex border border-gray-400 rounded-xl'>
            <div className='bg-gray-200 rounded-xl mr-2 md:mr-5'>
                <img className='categroy-img' src={category.logo} alt=""/>
            </div>
            <div>
                <p className='text-clr text-xl md:text-3xl font-medium mt-3'>{category.name}</p>
                <p className='text-clr md:text-xl my-5'>Total Questions: {category.total}</p>
                <button onClick={() => showQuizs(category.id)} className='md:text-lg font-medium py-2 px-2 md:px-5 btn-bg rounded-full text-white'>Start Practice <FontAwesomeIcon className='text-xl md:text-3xl align-middle ml-1 md:ml-2' icon={faArrowRightLong} /></button>
            </div>
        </div>
    );
};

export default Topic;