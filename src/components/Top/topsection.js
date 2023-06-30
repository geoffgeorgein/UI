import React from 'react'
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import Replay10RoundedIcon from '@mui/icons-material/Replay10Rounded';
import Forward10RoundedIcon from '@mui/icons-material/Forward10Rounded';


const Topsection = () => {
  return (
    <div className='top_section'>
        <div className='left_container'>
        <p className='song_title'>Super Excited (aka The Saturday Edition)</p>
        
        <p className='song_description'>Indie Stories · Jan 24 · Episode 234</p>

        <div className='music_player'>
            <PauseCircleFilledRoundedIcon/>
            <Replay10RoundedIcon/>
            <Forward10RoundedIcon/>
            <div className='speed'>1x</div>
            <div className='seek'>
                <div className='time_elapsed'></div>
            </div>
            <div className='time'>04:34 | 44:05</div>


        </div>

        </div>
        <div className='right_container'>
            {/* <img src='/soundtrap-B2fNlHHI7dI-unsplash@2x.png'></img> */}
        </div>
    </div> 
  )
}

export default Topsection;