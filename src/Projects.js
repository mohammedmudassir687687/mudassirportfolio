import React from 'react'
import './Projects.css'
import Header from './Header';
import Navigation from './Navigation';
import ProjContent from './ProjContent';
import Bio from './Bio';


const Projects = () => {
  return (
  <div className='main__body'>  
        <Navigation />
        <Bio />
        <div className='main__content'>
          <Header />
          <ProjContent />
          
        </div>
    </div>
  )
}

export default Projects