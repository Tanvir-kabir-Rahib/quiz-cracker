import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import "./Topics.css"

const Topics = () => {
    const quizCategories = useLoaderData();
    const categories = quizCategories.data;
    return (
        <div className='grid lg:grid-cols-2 gap-12 container mx-auto'>
            {
                categories.map(category => <Topic key={category.id} category={category}></Topic>)
            }
        </div>
    );
};

export default Topics;