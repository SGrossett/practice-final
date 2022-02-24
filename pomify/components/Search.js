import React from 'react';
import { useState } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';

function Search({ search, setSearch }) {
  const reset = () => {
    search = '';
  }
  return (
    <div className='absolute top-5 ml-7 bg-white sm:w-64 md:w-80 lg:w-96 rounded-full overflow-hidden border-2 border-gray-300 p-2 px-5 pr-3 flex items-center'>
      <div>
        <IoSearchOutline size='1.3em'/>
      </div>
      <input 
        type='text'
        defaultValue={search}
        placeholder='Artist, song, or podcast'
        className='bg-white text-black border-none lg:w-full focus:ring-0 outline-none placeholder-[#7a7a7a] ml-2'
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button className='hover:scale-105 cursor-pointer'>
        <IoCloseOutline size='1.3em'/>
      </button>
    </div>
  )
}

export default Search;