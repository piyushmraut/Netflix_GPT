import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-[10%] px-12 md:pl-24 w-full h-screen absolute aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold pt-20 md:pt-0 text-2xl md:text-6xl'>{title}</h1>
      <p className='w-1/4 mt-8 hidden md:block'>{overview}</p>
      <div className='mt-4'>
        <button className='px-4 py-2 md:px-10 md:py-2 text-black bg-white text-lg md:text-xl rounded-lg hover:opacity-70 cursor-pointer'>▶️Play</button>
        <button className='ml-2 hidden md:inline bg-gray-500 opacity-70 px-10 py-2 text-white text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle