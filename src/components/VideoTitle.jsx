import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-[15%] px-12 pl-24 w-full h-screen absolute aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-1/4 mt-8'>{overview}</p>
      <div className='mt-4'>
        <button className='px-10 py-2 text-black bg-white text-xl rounded-lg hover:opacity-80 cursor-pointer'>▶️Play</button>
        <button className='ml-2 bg-gray-500 opacity-70 px-10 py-2 text-white text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle