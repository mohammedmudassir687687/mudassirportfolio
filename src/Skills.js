import React from 'react'
import './Skills.css'
import Content from './Content';
import Bio from './Bio';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Skills = () => {
  return (
      <div className='main__body'>  
        <Navigation />
        <Bio />
        <div className='main__content'>
          <Header />
          <Content />
          {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Skills