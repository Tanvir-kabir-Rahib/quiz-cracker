import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Topic from '../Topic/Topic';
import "./Topics.css"

const Topics = () => {
    const quizCategories = useLoaderData();
    const categories = quizCategories.data;
    const navigate = useNavigate();
    const showQuizs = (id) => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='grid lg:grid-cols-2 gap-12 container mx-auto'>
            {
                categories.map(category => <Topic key={category.id} showQuizs={showQuizs} category={category}></Topic>)
            }
        </div>
    );
};

export default Topics;