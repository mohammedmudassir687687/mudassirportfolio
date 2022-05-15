import React from 'react'
import './HobbiesSelection.css'

const HobbiesSelection = ({name}) => {
  return (
    <div className='hobbies__name__box'>
        <small>{name}</small>
    </div>
  )
}

export default HobbiesSelection