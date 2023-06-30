import React from 'react'
import Navbar from '../navbar/navbar';
import Topsection from '../Top/topsection';
import Middle from '../Middle/middle';
import Carousel from '../carousel/carousel';

const HomePage = () => {
  return (
    <div className='homepage'>


      <div className='Container'>

        <Navbar/>
        <Topsection/>
        <Middle/>
        <Carousel/>

      </div>

      


    </div>
  )
}

export default HomePage;