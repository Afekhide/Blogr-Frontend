import React from 'react';
import {useEffect, useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AppContext} from '../context/Context';
import { BeatLoader } from 'react-spinners';

const SignUp = () => {
  const nav = useNavigate()
  useEffect(() => document.title = 'Sign Up', [])
  const {loadersConfig, setUser, baseURL} = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [waitingResponse, setWaitingResponse] = useState(false)

  async function submit(ev){
    ev.preventDefault();
    setWaitingResponse(true);
    try {
      const response = await fetch(`${baseURL}/users/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*'
        },
        body: JSON.stringify({
          username, email, password
        })
      })
  
      const data = await response.json();
      setWaitingResponse(false);
      if(data.success.user) {
        setUser(data.success.user)
      }
      console.log(data.success.user)
      nav('/')


    } catch (error) {
        setWaitingResponse(false);
    }
  }



  return (
  <div className="w-screen min-h-screen">
      <div className='h-[8vh]'>
        <div className='px-8 py-6 h-full bg-white shadow-sm shadow-slate-300 text-xl font-semibold' >
          <Link to='/'>Blogr.</Link>
        </div>
      </div>
      <div className='h-[92vh] bg-white flex items-center justify-center'>
        <div className='px-8 py-8'>
          <form action="#" onSubmit={ev => submit(ev)} className='w-[80vw] md:w-[60vw] lg:w-[700px] xl:w-[600px]'>
            <div key={1} className='flex flex-col gap-1'>
              <input key={1} className='bg-transparent border text-gray-600 border-gray-300 px-6 py-4 min-w-full outline-0 rounded-md' 
              name='title' type="text"
              onChange = {ev => setUsername(ev.target.value.trim())}
              required placeholder='username' disabled={waitingResponse}/>
            </div>

            <div key={2} className='mt-7 flex flex-col gap-1'>
              <input key={2} className='bg-transparent border text-gray-600 border-gray-300 px-6 py-4 min-w-full outline-0 rounded-md' 
                name='title' type="email"
              onChange = {ev => setEmail(ev.target.value.trim())}
              required placeholder='Email' disabled={waitingResponse}/>
            </div>


            <div key={3} className='mt-7 flex flex-col gap-1'>
              <input key={3} className='bg-transparent border text-gray-600 border-gray-300 px-6 py-4 min-w-full outline-0 rounded-md' 
              name='title' type="password"
              onChange = {ev => setPassword(ev.target.value.trim())}
              required placeholder='password' disabled={waitingResponse}/>
            </div>

            <div className='py-3 flex mt-7'>
              {!waitingResponse ? 
              <div>
                  <button type='submit' className='hover:scale-105 hover:bg-green-500 tracking-widest py-3 px-8 rounded-md bg-green-400 text-lg font-medium text-white'>Register</button>
                  <div className='mt-5'>
                    <p className='text-slate-600 text-lg tracking-wide '>
                          Already registered? <span className='text-green-400 hover:underline'><Link to='/login'>log in</Link></span>
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

export default SignUp;
