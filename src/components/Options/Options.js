import React from 'react';

const Options = ({option}) => {
    return (
        <div className='p-4 border-2 border-sky-400 rounded-md'>
            <span className='ml-2 text-clr text-lg text-medium'>{option}</span>
        </div>
    );
};

export default Options;