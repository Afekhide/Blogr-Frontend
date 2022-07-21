import React from 'react';
import {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../context/Context';
import { BeatLoader } from 'react-spinners';

const SignIn = () => {
  useEffect(() => document.title = 'Sign In', [])
  const {user, loadersConfig, setUser} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [waitingResponse, setWaitingResponse] = useState(false)
  async function submit(ev){
    ev.preventDefault();
    setWaitingResponse(true);
    const response = await fetch('https://blogr-heroku.herokuapp.com/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*'
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = await response.json();
    if(data.user) setUser(data.user)
    setWaitingResponse(false);
    console.log(data)
  }


  return (
  <div className="w-screen min-h-screen">
      <div className='h-[8vh]'>
        <div className='px-8 py-6 h-full bg-white shadow-sm shadow-slate-300 font-semibold text-xl' >
          <Link to='/'>Blogr.</Link>
        </div>
      </div>
      <div className='h-[92vh] bg-white flex items-center justify-center'>
        <div className='px-8 py-8'>
          <form action="#" onSubmit={ev => submit(ev)} className='w-[80vw] md:w-[60vw] lg:w-[700px] xl:w-[600px]'>

            <div className='mt-7 flex flex-col gap-1'>
              <input className='bg-transparent border text-gray-600 border-gray-300 px-6 py-4 min-w-full outline-0 rounded-md' 
               name='title' type="email"
              onChange = {ev => setEmail(ev.target.value.trim())}
              required placeholder='Email' disabled={waitingResponse}/>
            </div>


            <div className='mt-7 flex flex-col gap-1'>
              <input className='bg-transparent border text-gray-600 border-gray-300 px-6 py-4 min-w-full outline-0 rounded-md' 
               name='title' type="password"
              onChange = {ev => setPassword(ev.target.value.trim())}
              required placeholder='password' disabled={waitingResponse}/>
            </div>

            <div className='py-3 flex mt-7'>
              {!waitingResponse ? 
                <div>
                  <button type='submit' className='hover:scale-105 hover:bg-green-500 tracking-widest py-3 px-8 rounded-md bg-green-400 text-lg font-medium text-white'>Login</button>
                  <div className='mt-5'>
                    <p className='text-slate-600 text-lg tracking-wide '>
                          Not yet registered? <span className='text-green-400 hover:underline'><Link to='/signup'>Register</Link></span>
                    </p>
                  </div>
              </div>
              :
              <div className='flex items-center gap-5 cursor-pointer border-2 rounded-md bg-green-400 text-lg tracking-wider font-medium border-green-200 py-3 px-8'>
                 <BeatLoader color={loadersConfig.altColor} loading={waitingResponse} cssOverride={loadersConfig} size='0.8rem' />
              </div>
            }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
