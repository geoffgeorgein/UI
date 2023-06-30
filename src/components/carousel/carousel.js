import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';


const Carousel = () => {
  return (
    <div className='carousel'>

        <div className='imgContainer'>
            <div className='img1'>
                <h3>Sick Leave for Indie Founders?</h3>
                <p>Indie Stories · Jan 24 · Episode 234</p>
                <PlayCircleFilledWhiteRoundedIcon/>
            
            </div>

        </div>
        <div className='imgContainer'>
            <div className='img2'>
                <h3>When Should You Let People Pay You?</h3>
                <p>Indie Stories · Jan 24 · Episode 234</p>
                <PlayCircleFilledWhiteRoundedIcon/>
            
            </div>
        </div>
        <div className='imgContainer'>
            <div className='img3'>

                <h3>Super Pumped (aka The Saturday Edition)</h3>
                <p>Indie Stories · Jan 24 · Episode 234</p>
                <PlayCircleFilledWhiteRoundedIcon/>
            
            </div>
        </div>
        <div className='imgContainer'>
            <div className='img4'>

                <h3>Getting Into Public Speaking as a Developer</h3>
                <p>Indie Stories · Jan 24 · Episode 234</p>
                <PlayCircleFilledWhiteRoundedIcon/>
                
            </div>

        </div>

        <div className='arrows'>
            <div className='arrowContainer1'>
        

                <ArrowForwardRoundedIcon style={{color:"blue"}}/>

            </div>

            <div className='arrowContainer2'>
            
                <ArrowBackRoundedIcon style={{color:"blue"}} />
                

            </div>

        </div>

       

        

    </div>
  )
}

export default Carousel