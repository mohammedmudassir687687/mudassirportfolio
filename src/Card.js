import React, { useState } from 'react'
import './Card.css'

const Card = ({title, paragraph}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='toggle' onClick={()=>setToggle(!toggle)}>
        <h1 className='title'>{title}</h1>
        {toggle && (
            <p className='paragraph'>{paragraph}</p>
        )}
    </div>
  )
}

export default Card