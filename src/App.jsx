import React from 'react';
import Blogs from './pages/blogs';
import SignIn from './pages/signIn';
import WritePage from './pages/write';
import Notfound from './pages/notfound';
import {ContextProvider} from './context/Context';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import SignUp from './pages/signup';
import Blog from './pages/blog';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Blogs/>}/>
        <Route exact path='/blogs' element={<Blogs/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/login' element={<SignIn/>}/>
        <Route exact path='/write' element={<WritePage/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/register' element={<SignUp/>}/>
        <Route exact path='*' element={<Notfound/>}/>
        <Route exact path='/blog/:id' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </ContextProvider>
    
  )
}

export default App;