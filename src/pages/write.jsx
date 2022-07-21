import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";


const WritePage = () => {
  useEffect(() => document.title = 'Write Post', []);
  const [waitingResponse, setWaitingResponse] = useState(false)
  const loaderConfig = {
      color: '#4ade80',
      altColor: '#ffffff'
    }
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    async function postData(data){
      setWaitingResponse(true);
      console.log(data)
      let requestOptions = {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'cors',
        headers:{
          'Content-Type': 'application/json',
        }
      }

      const response = await fetch('https://blogr-heroku.herokuapp.com/', requestOptions)
      const results = await response.json()
      console.log(results)
      setWaitingResponse(false)
    }

    const submit = (ev) => {
      ev.preventDefault()
      postData({title, content, authorId:1})
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
          {/*<h2 className='p-5 mb-5 text-5xl text-gray-600 font-medium'>Write Your Post</h2>*/}
          <form action="#" onSubmit={ev => submit(ev)} className='w-[80vw] md:w-[550px] lg:w-[500px] xl:w-[800px]'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="title" className='text-xl font-semibold text-gray-600 py-2'>Title</label>
              <input className='bg-transparent border text-gray-600 border-gray-300 px-6 py-4 min-w-full outline-0 rounded-md' 
              id='title' name='title' type="text"
              onChange = {ev => setTitle(ev.target.value.trim())}
              required placeholder='Once upon a time' disabled={waitingResponse}/>
            </div>

            {/*Start of Tetxt Area*/}
            <div className='flex flex-col gap-1 mt-7'>
              <label htmlFor="content" className="font-semibold text-xl text-gray-600 py-2">Content</label>
              <textarea className='bg-transparent outline-0 rounded-md border border-slate-100 px-6 py-6 text-gray-600' 
              name="content" id="content" rows="10" required disabled={waitingResponse}
              onChange = {ev => setContent(ev.target.value.trim())}
              ></textarea>
            </div>
            <div className='py-3 flex mt-7'>
              {!waitingResponse ? 
              <button type='submit' className='hover:scale-105 hover:bg-green-500 tracking-widest py-3 px-8 rounded-md bg-green-400 text-lg font-medium text-white'>Post</button>
              :
              <div className='flex items-center gap-5 cursor-pointer border-2 rounded-md bg-green-400 text-lg tracking-wider font-medium border-green-200 py-4 px-8'>
                 <BeatLoader color={loaderConfig.altColor} loading={waitingResponse} cssOverride={loaderConfig} size='0.8rem' />
              </div>
            }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WritePage;