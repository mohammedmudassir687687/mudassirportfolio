import React from 'react'
import './Home.css'
import profilephoto from './profilephoto.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className='center__element'>
            <div className='image__container'>
                <img className='welcome__image' src={profilephoto} alt='profilephoto'/>
            </div>
            <div className='welcome__text'>
                <h1 className='welcome__heading'>Welcome to my Website</h1>
                <small className='small__tag'>I am a Software Developer</small>
                <Link to='/skills' className='link__button'>Click to Continue</Link>    
            </div>
        </div>
    </div>
  )
}

export default Home