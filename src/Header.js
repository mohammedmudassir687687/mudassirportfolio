import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import useSound from 'use-sound'
import pop from './pop.mp3'

const Header = () => {

  const [playS, {stopS}] = useSound(pop);
  const [playP, {stopP}] = useSound(pop);
  const [playH, {stopH}] = useSound(pop);
  const [playC, {stopC}] = useSound(pop);

  return (
    <div className='header__container'>
        <Link to='/skills' onMouseEnter={()=>playS()} onMouseLeave={()=>stopS()}>Skills</Link>
        <Link to='/projects' onMouseEnter={()=>playP()} onMouseLeave={()=>stopP()}>Projects</Link>
        <Link to='/hobbies' onMouseEnter={()=>playH()} onMouseLeave={()=>stopH()}>Hobbies</Link>
        <Link to='/contact' onMouseEnter={()=>playC()} onMouseLeave={()=>stopC()}>Contact</Link>
    </div>
  )
}

export default Header