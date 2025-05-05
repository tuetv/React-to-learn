import React, { useState } from 'react'
import PropTypes from 'prop-types'



const Header = ({ onSearch }) => {

  const [textSearch, setTextSearch] = useState('')

  return (
    <div className='p-4 bg-black flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <div className='text-[30px] uppercase font-bold text-red-400 cursor-pointer'>
          <a href="/">Movie hihi</a>
        </div>
        <nav className='flex items-center space-x-4'>
          <a href="/" className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-500">
            Home
          </a>
          <a href="/" className='text-white text-2xl'>About</a>
          <a href="/" className='text-white text-2xl'>Contact</a>
        </nav>

      </div>
      <div className='flex items-center space-x-4'>
        <input type="text" placeholder='Tìm kiếm' className='p-3 bg-white rounded-2xl'
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button className='p-3 text-white bg-red-500 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-500' onClick={() => onSearch(textSearch)}>Tìm kiếm</button>
      </div>
    </div>
  )
}

Header.propTypes = {
  onSearch: PropTypes.func,
}

export default Header
