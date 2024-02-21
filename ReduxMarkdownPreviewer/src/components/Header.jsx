import React from 'react'
import { useDispatch } from 'react-redux'
import { handleHelpButton } from '../redux/markdownSlice';

const Header = () => {
    const dispatch=useDispatch();
  return (
    <div className='relative mb-2'>
        <h1 className='text-center p-8 font-bold text-2xl'>Markdown Previewer</h1>
        <button className=' absolute bottom-0 right-4 px-5 py-3 bg-amber-500 rounded-lg hover:bg-white hover:text-amber-600 hover:border border-amber-500 transition-color' onClick={()=>dispatch(handleHelpButton())}>Help</button>
        
    </div>
  )
}

export default Header