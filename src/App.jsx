import React from 'react';

import About from'./about'
import Contact from './Contact'
import Home from './home'
import Project from './project'
import ParticlesComponent from './ParticlesComponent';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <div className='text-3xl'>
     
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>

      
      
      
     
    </div>
  );
}

export default App;
