import React from 'react'
import './Navigation.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useSound from 'use-sound'
import pop from './pop.mp3'


const Navigation = () => {

  const [play, {stop}] = useSound(pop);

  return (
    <div className='navigation'>
      <a className='icon' href='https://www.instagram.com/mohammedmudassir__/' target='_blank' onMouseEnter={()=>play()} onMouseLeave={()=>stop()}><InstagramIcon fontSize='large' /></a>
      <a className='icon' href='https://www.linkedin.com/in/mohammed-mudassir-bb604a182/' target='_blank' onMouseEnter={()=>play()} onMouseLeave={()=>stop()}><LinkedInIcon fontSize='large' /></a>
      <a className='icon' href='https://github.com/mohammedmudassir687687' target='_blank' onMouseEnter={()=>play()} onMouseLeave={()=>stop()}><GitHubIcon fontSize='large' /></a>
    </div>
  )
}

export default Navigation