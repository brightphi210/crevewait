import React from 'react'
import logo from '../Images/Creve1.png'

const Navbar = () => {
  return (
    <div className='lg:w-full flex z-50 fixed w-full border border-slate-200 bg-white left-0 right-0 gap-5 items-center m-auto py-3 lg:px-10 px-3 backdrop-filter backdrop-blur-3xl bg-opacity-80'>
        <div className='lg:w-10 lg:h-10 w-8 h-8'>
            <img src={logo} alt="" />
        </div>
        <ul className='flex ml-auto gap-3 items-center'>
            <a href="#why"><li className='text-sm'>Why Creve</li></a>
            <a href="#about"><li className='text-sm'>About</li></a>
            <button className='text-sm bg-white border border-neutral-400 text-black px-5 py-2 rounded-full'>Join</button>
        </ul>
    </div>
  )
}

export default Navbar
