import React from 'react';
import Illustration from '../assets/empty3x.svg';

const Empty = () => {
  return (
    <div className='w-100 h-full flex justify-center items-center'>
      <div className='flex flex-col gap-5 py-5'>
        <div className='w-100 flex justify-center object-contain'>
          <img className=' h-[60vh]' src={Illustration} alt="illustration file" />
        </div>
        <div>
          <p className='sm:-mt-[10vh] md:mt-[0vh] font-semibold sm:text-lg md:text-4xl lg:text-4xl text-center text-green-400'>No blogs found</p>
        </div>
      </div>
    </div>
  )
}

export default Empty;