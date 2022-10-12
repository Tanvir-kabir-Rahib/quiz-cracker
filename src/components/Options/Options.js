import React from 'react';

const Options = ({option, checkAns, selection}) => {
    return (
        <div onClick={() => checkAns(option)} className={`p-4 border-2 border-sky-400 rounded-md hover:bg-cyan-100 ${(selection === option) ? "bg-cyan-300" : ""}`}>
            <span className='ml-2 text-clr text-lg text-medium'>{option}</span>
        </div>
    );
};

export default Options;