import React, {useState, useEffect, useContext} from 'react';
import { BeatLoader } from 'react-spinners';
import AppContext from '../context/Context'
import { useNavigate, useParams, Link } from 'react-router-dom';

const Blog = () => {
    const {id} = useParams()
    const {loadersConfig, baseURL} = useContext(AppContext)
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    useEffect(async () => {
        let url = `${baseURL}/blogs/${id}`;
        const data = await (await fetch(url)).json();
        
        setPost(data.success.post)
        setLoading(false)
        console.log(data.success.post.title)
        
    }, []);

    
  return (
    <div className='w-full min-h-screen'>
        <div className='h-[8vh]'>
        <div className='px-8 py-6 h-full bg-white shadow-sm shadow-slate-300 font-semibold text-xl' >
          <Link to='/' styles={{fontWeight: 'semibold'}}>Blogr.</Link>
        </div>
      </div>
      <div className='min-h-[92vh] bg-white'>
          {loading? 
            <div className='flex h-[92vh] justify-center items-center'>
                <BeatLoader loading={loading} color={loadersConfig.color} size={30}/>
            </div> 
            : 
            <div className='min-h-[92vh] w-full px-[8vw] lg:px-[10vw] xl:px-[25vw] py-[5vh] flex flex-col'>
                <div className='text-center'>
                    <h1 className='font-["Libre_Baskerville"] font-bold text-lg xl:text-5xl md:text-4xl pb-10'>{post.title}</h1>
                </div>
                <div className=''>
                    <p className='text-justify text-gray-600 leading-8'>{post.content}</p>
                </div>
            </div>
            }
      </div>
    </div>
  )
}

export default Blog;