import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <p className='text-3xl font-bold'><span className="loading loading-spinner text-error"></span> Loading...</p>
        </div>
    );
};

export default Loading;