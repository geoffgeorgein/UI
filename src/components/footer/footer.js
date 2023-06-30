import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>

        <div className='leftContainer'>

            <div className='logo'>

                <div className='circ1'></div>
                <div className='circ2'></div>

            </div>

            <p>Copyright © vieweb.co.in All rights reserved.</p>

        </div>

        

        <div className='social'>
            <FacebookIcon className='icon' style={{color:'blue'}}/>
            <YouTubeIcon className='icon' style={{color:'blue'}}/>
            <TwitterIcon className='icon' style={{color:'blue'}}/>
        </div>

        

    </div>
  )
}

export default Footer;