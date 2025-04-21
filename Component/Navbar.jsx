
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-gray-800 flex items-center justify-between px-4'>
      <div className='text-white text-2xl font-bold'>Disease Identifier</div>
      <nav className='space-x-4'>
        <a href="/" className='text-white hover:text-gray-400'>Home</a>
        <a href="/learnmore" className='text-white hover:text-gray-400'>Learn More</a>
        <a href="/demo" className='text-white hover:text-gray-400'>Demo</a>
      </nav>
      
    </div>
  )
}

export default Navbar
