import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover ' src="/rain_weather01_BW.JPG" alt="rainy day in a city" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-100'>Nate Pallace</h1>
          <h2 className='flex sm:text-xl pt-1 text-gray-100'>
            <a href="mailto:nmpallace75@gmail.com">nmpallace75@gmail.com</a>
          </h2>
          <div className='flex justify-around pt-4 max-w-[200px] w-full text-white'>
            <a href="mailto:nmpallace75@gmail.com">
              <FaEnvelope className='cursor-pointer' size={30} />
            </a>
            <a href='https://www.instagram.com/nathan_pallace_photography/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='cursor-pointer' size={30} />
            </a>
            <a href='https://www.linkedin.com/in/nathan-pallace-4a58b817/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn className='cursor-pointer' size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main