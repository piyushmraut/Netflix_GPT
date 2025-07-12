
import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/languageConstants';

function GptSearchBar() {
  const languageKey = useSelector((store)=> store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className='w-1/2 grid grid-cols-12 bg-black rounded-sm'>
            <input type="text" placeholder={lang[languageKey].gptPlaceholderText} className='rounded-sm p-4 m-4 col-span-10 bg-white' />
            <button className='bg-red-600 text-white col-span-2 my-4 mr-4 cursor-pointer rounded-lg'>{lang[languageKey].name}</button>
        </form>
    </div>
  )
}

export default GptSearchBar