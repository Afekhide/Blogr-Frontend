import React from 'react';
import { useEffect, useState, useContext } from 'react';
import NavBar from '../components/Nav';
import Empty from './empty';
import AppContext from '../context/Context';
import { BeatLoader} from 'react-spinners';

const Blogs = () => {
    const [postsLoading, setPostsLoading] = useState(true);
    const [posts, setPosts] = useState([])
    const {searchQuery, setSearchQuery, loadersConfig} = useContext(AppContext);
    useEffect(() => document.title = 'Blogs', [])
    useEffect(async function pullPosts(){

      setPostsLoading(true)
      const response = await fetch('http://localhost:9999/blogs/');
      const data = await response.json();
      console.log((data.blogs))
      setPosts(data.blogs)
      setPostsLoading(false)

    }, [searchQuery])

  return (
    <div className="min-h-screen">
      <div className='h-[11vh]'><NavBar/></div>
      <div className='h-[89vh]'>
        {postsLoading && 
        <div className='h-[80vh] items-center justify-center flex bg-white'>
          <BeatLoader color={loadersConfig.color} loading={postsLoading} cssOverride={loadersConfig} size={40} />
        </div>
        }
        {(!postsLoading && posts.length<1) && <Empty/>}
        {(!postsLoading && posts?.length > 1) && 
        <div className='flex flex-wrap flex-col justify-center md:flex-row gap-3 md:gap-6 px-5 py-8'>
          {posts.map(post => 
              <div key={post.id} className='hover:bg-green-400 hover:text-white text-gray-500 cursor-pointer w-flex-1 px-5 py-5 border border-green-400 rounded-md sm:max-w-[80vw]'>
                <h1 className='text-2xl'>{post.title.substring(0, 20)}</h1>
                <p className='text-lg'>{post.content.substring(0, 30)}</p>
              </div>)}
        </div>}
        
      </div>
    </div>
  )
}

export default Blogs;