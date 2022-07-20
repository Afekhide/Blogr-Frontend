import React from 'react';
import Illustration from '../assets/empty.svg';

const Empty = () => {
  return (
    <div className='w-100 h-full flex justify-center items-center'>
      <div className='flex flex-col gap-5 py-5'>
        <div className='w-100 flex justify-center'>
          <img className='object-cover w-[80%]' src={Illustration} alt="illustration file" />
        </div>
        <div>
          <p className='font-semibold text-4xl text-center text-gray-400'>No blogs found</p>
        </div>
      </div>
    </div>
  )
}

export default Empty;