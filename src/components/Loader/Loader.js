import React from 'react';

const Loader = () => {
    return (
        <div className='h-screen flex items-center'>
            <div className=" mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-400"></div>
        </div>
    );
};

export default Loader;