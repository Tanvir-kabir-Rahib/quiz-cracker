import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from '../Options/Options';
import "./Quiz.css";

const Quiz = ({ quiz }) => {
    return (
        <div className='mx-auto my-12 p-4 md:p-8 border-2 border-sky-500 rounded-xl lg:w-3/5 quiz-bg'>
            <div className='flex items-center'>
                <p className='flex-grow text-2xl md:p-3 mb-5 text-clr mr-5 md:mr-0'>{quiz.question.slice(3, -4)}</p>
                <FontAwesomeIcon className='flex-none text-2xl text-clr' icon={faEye} />
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    quiz.options.map((option,idx) => <Options key={idx} id={quiz.id} option={option}></Options>)
                }
            </div>

        </div>
    );
};

export default Quiz;