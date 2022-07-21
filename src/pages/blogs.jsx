import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import NavBar from '../components/Nav';
import Empty from './empty';
import AppContext from '../context/Context';
import { BeatLoader} from 'react-spinners';

const Blogs = () => {
  const nav = useNavigate();
    const [postsLoading, setPostsLoading] = useState(true);
    const [posts, setPosts] = useState([])
    const {searchQuery, setSearchQuery, loadersConfig, baseURL} = useContext(AppContext);
    useEffect(() => document.title = 'Blogs', [])
    useEffect(async function pullPosts(){

      setPostsLoading(true)
      try {
        const response = await fetch(`${baseURL}/blogs/`);
        const data = await response.json();
        
        setPosts(data.blogs)
        setPostsLoading(false)
      } catch (error) {
        setPostsLoading(false);
        return;
      }

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
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-6 py-10
                        md:px-10 xl:px-[10vw] sm:px-[5vw]
        '>
          {posts.map(post => 
              <div key={post.id} className='px-10 mb-5 md:px-0'>
                <div onClick={ev => nav(`/blog/${post.id}`)} className='duration-500 bg-green-400 hover:bg-white hover:text-green-400 text-white cursor-pointer px-5 py-5 border border-green-400 rounded-md'>
                  <h1 className='text-2xl mb-[50px] font-bold'>{post.title.substring(0, 20)}</h1>
                  <p className='text-lg'>{post.content.substring(0, 200)}</p>
                </div>
              </div>)}
        </div>}
        
      </div>
    </div>
  )
}

export default Blogs;