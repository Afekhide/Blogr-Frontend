import React from 'react';
import { useLocation } from 'react-router-dom';

const Notfound = () => {
    const URL = useLocation().pathname;
    return (
        <div className='flex justify-center items-center w-full h-screen bg-slate-500 text-white text-center'>
            <div>
                <h1 className='text-8xl font-medium'>404, Not found</h1>
                <p className='text-3xl font-medium'>{URL} represents an invalid url.</p>
            </div>
        </div>
    )
}

export default Notfound;