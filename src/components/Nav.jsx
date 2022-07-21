import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/Context';


const NavBar = () => {
  const {user} = useContext(AppContext);
  return (
    <div className='flex justify-between items-center py-4 md:px-10 px-3 bg-white shadow-sm shadow-slate-300 text-slate-600'>
        <Search/>
        {user ? 
          <div className='cursor-pointer'>
            <div className='md:mr-5 py-2 px-4 rounded-md bg-green-400 hover:bg-green-500 hover:scale-105 shadow-md shadow-green-200 text-white'>
              <Link to='/write'>Write</Link>
            </div>
          </div> 
          : 
          <div className='cursor-pointer'>
          <div className='md:mr-5 py-2 px-4 rounded-md bg-green-400 hover:bg-green-500 hover:scale-105 shadow-md shadow-green-200 text-white'>
            <Link to='/login'>Sign Up</Link>
          </div>
        </div>}
    </div>
  )
}

export default NavBar;

//Tailwind animations = [animation-spin, animation-ping, animation-pulse]