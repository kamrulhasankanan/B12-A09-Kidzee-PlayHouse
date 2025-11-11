import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-8xl text-indigo-900 font-extrabold'>404 Not Found</h2>
            <p>The requested page or resource doesn't exist on the server</p>
        </div>
    );
};

export default ErrorPage;