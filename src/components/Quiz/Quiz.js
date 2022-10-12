import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Options from '../Options/Options';
import "./Quiz.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const [stopSelection, setStopSelection] = useState(false)
    const [selection, setSelection] = useState("") 
    const checkAns = (selected) => {
        const answer = quiz.correctAnswer;
        setSelection(selected);
        setStopSelection(!stopSelection)
        if (answer === selected){
            toast("Correct Answer")
        }
        else{
            toast(`"${answer}" is the Correct Answer.`)
        }
    }
    const showAns = () =>{
        toast(`"${quiz.correctAnswer}" is the Correct Answer`)
    }
    return (
        <div className='mx-auto my-12 p-4 md:p-8 border-2 border-sky-500 rounded-xl lg:w-3/5 quiz-bg'>
            <div className='flex items-center'>
                <p className='flex-grow text-2xl md:p-3 mb-5 text-clr mr-5 md:mr-0'>{quiz.question.slice(3, -4)}</p>
                <FontAwesomeIcon onClick={() => showAns()} className='flex-none text-2xl text-clr' icon={faEye} />
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    quiz.options.map((option,idx) => <Options key={idx} checkAns={checkAns} selection={selection} option={option} stopSelection={stopSelection}></Options>)
                }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Quiz;