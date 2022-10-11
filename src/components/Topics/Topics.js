import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>This is Topics {data.length}</h2>
        </div>
    );
};

export default Topics;