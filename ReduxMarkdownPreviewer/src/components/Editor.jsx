import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleUserText } from '../redux/markdownSlice'

const Editor = () => {
  const dispatch=useDispatch()
  const {clickHelp,helperText,userText}=useSelector(state=>state.markdown)
  return (
    <div className='w-1/2 p-10  bg-indigo-100 rounded-xl'>
      <textarea className='inline-block w-full h-full bg-transparent outline-none resize-none no-scrollbar' readOnly={clickHelp} value={clickHelp ? helperText:userText} onChange={(e)=> dispatch(handleUserText(e.target.value))}></textarea>
    </div>
  )
}

export default Editor