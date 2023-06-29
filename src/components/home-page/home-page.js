import React from 'react'
import Navbar from '../navbar/navbar';
import Topsection from '../Top/topsection';
import Middle from '../Middle/middle';

const HomePage = () => {
  return (
    <div className='homepage'>


      <div className='Container'>

        <Navbar/>
        <Topsection/>
        <Middle/>

      </div>

      


    </div>
  )
}

export default HomePage;