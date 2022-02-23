import React from 'react'

function TrackSearchResults({track}) {
  return (
    <div className='bg-gray-900 h-96 overflow-hidden'>
      <div className='flex w-[12rem] h-[15rem] relative  text-white/80 hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto cursor-pointer' >
        <img src={track.albumUrl} alt="" className='h-full w-full absolute inset-0 object-contain opacity-80 group-hover:opacity-100' />
        <div className='mt-56 p-2'>
          <div className='text-white text-lg'>{track.title}</div>
          <div className='text-gray-500 mt-0.5'>{track.artist}</div>
        </div>
      </div>
    </div>
  )
}

export default TrackSearchResults