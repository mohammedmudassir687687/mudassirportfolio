import React from 'react'
import './Hobbies.css'
import Header from './Header';
import Navigation from './Navigation';
import Bio from './Bio';
import HobbiesContent from './HobbiesContent';

const Hobbies = () => {
  return (
    <div className='main__body'>  
        <Navigation />
        <Bio />
        <div className='main__content'>
          <Header />  
          {/* <img src={collage} alt='collage' height={400} width={650}/>         */}
          <HobbiesContent />
          
    
        </div>
    </div>
  )
}

export default Hobbies