import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from "../Quiz/Quiz"

const Quizs = () => {
    const data = useLoaderData()
    const quizs = data.data.questions
    return (
        <div className='text-center'>
            <p className='text-4xl font-bold text-clr mb-16'>Quiz About {data.data.name}</p>
            <div>
            {
                quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
            </div>
        </div>
    );
};

export default Quizs;