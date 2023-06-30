import React from 'react'
import Navbar from '../navbar/navbar';
import Topsection from '../Top/topsection';
import Middle from '../Middle/middle';
import Carousel from '../carousel/carousel';
import Bottom from '../Bottom/bottom';

const HomePage = () => {
  return (
    <div className='homepage'>


      <div className='Container'>

        <Navbar/>
        <Topsection/>
        <Middle/>
        <Carousel/>
        <Bottom/>

      </div>

      


    </div>
  )
}

export default HomePage;