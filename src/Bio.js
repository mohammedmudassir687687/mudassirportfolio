import React from 'react'
import './Bio.css'
import profilephoto from './profilephoto.png'
import useSound from 'use-sound'
import pop from './pop.mp3'

const Bio = () => {
  const nameStr = 'MOHAMMED MUDASSIR'
  const nameArr = nameStr.split('');

  const [play, {stop}] = useSound(pop);

  return (
    <div className='bio'>
      <div className='bio__fixed__section'>
        <img className='bio__image' src={profilephoto} alt='profilephoto'/>
        <h1>{nameArr.map((i)=>(<span className='animate__name' onMouseEnter={()=>play()} onMouseLeave={()=>stop()}>{i}</span>))}</h1>
        <hh5 className='bio__caption'>Software Developer Intern | Full Stack developer | MERN Stack developer | Teaching Assistant at University of New Haven</hh5>
      </div>
    </div>
  )
}

export default Bio