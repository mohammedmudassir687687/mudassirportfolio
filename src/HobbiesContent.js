import cp from './cp.gif'
import React, { useEffect, useState } from 'react'
import './HobbiesContent.css'
import HobbiesSelection from './HobbiesSelection'
import lcw from './lcw.gif'
import gwr from './gwr.jpg'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';
import click from './click.gif'

const HobbiesContent = () => {

    const [selection, setSelection] = useState(0);

    function changeSelection(value) {
        setSelection(value);
    }

  return (
    <div className='main__hobbies'>
        <div className='hobbies__left'>
            <div style={{color: "white"}} onClick={()=>changeSelection(1)}>
                <PsychologyIcon />
                <HobbiesSelection 
                    name='Chess'
                /> 
            </div>
            <div style={{color: "white"}} onClick={()=>changeSelection(2)}>
                <ViewInArIcon/>
                <HobbiesSelection 
                    name='Cubing'
                /> 
            </div>
            <div style={{color: "white"}} onClick={()=>changeSelection(3)}>
                <TerminalIcon />
                <HobbiesSelection 
                    name='Competitive Programming'
                /> 
            </div>
            <div style={{color: "white"}} onClick={()=>changeSelection(4)}>
                <SportsScoreIcon />
                <HobbiesSelection 
                    name='Badminton'
                /> 
            </div>
        </div>
        <div className='hobbies__right'>
            {selection == 1 && 
                (
                    <div>
                        <iframe className="lichess" width={750} height={550} src="https://lichess.org/study/embed/1YpRlT9W/Z903xB5S" frameborder={0}></iframe>
                        <p><small className='lichess__text'>Source: https://www.lichess.org</small></p>
                        <p className='navigate__text'>Click on the options to the left to navigate</p>)
                    </div>
                )
            }
            {selection == 2 &&
                (<div style={{textAlign: "center"}}>
                    <h5 style={{color: "white", marginBottom: "15px"}}>Guinness World Record - Most contributions to a Rubiks cube mosiac</h5>
                    <img style={{marginBottom: "15px"}} src={gwr} height={400} width="auto"/>
                    <p><a target="_blank" href="https://timesofindia.indiatimes.com/city/mangaluru/293-cubers-from-karnataka-all-set-to-enter-guinness-record/articleshow/69293464.cms">More about the Record</a></p>
                    <p className='navigate__text'>Click on the options to the left to navigate</p>)
                </div>)
            }
            {selection == 3 &&
                (<div>
                    <img src={cp} height={425} width="auto"/>
                    <p className='navigate__text'>Click on the options to the left to navigate</p>)
                </div>)
            }
            {selection == 4 &&
                (<div>
                    <img src={lcw} width={700} height="auto"/>
                    <p className='navigate__text'>Click on the options to the left to navigate</p>)
                </div>)
            }
            {selection==0 && (
                <div>
                    <img src={click} width={500} heigth="auto"/>
                    <p className='navigate__text'>Click on the options to the left to navigate</p>
                </div>
                )}
        </div>
    </div>
  )
}

export default HobbiesContent