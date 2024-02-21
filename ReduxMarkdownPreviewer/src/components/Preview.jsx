import React from 'react'
import { marked } from 'marked'
import { useSelector } from 'react-redux'
const Preview = () => {
  const {clickHelp,helperText,userText}=useSelector(state=>state.markdown)
  const createMarkUp=(text)=>{
      return {__html:marked(text)}
  }
  return (
    <div className='w-1/2 p-10 bg-gray-100 rounded-xl'>
      <div dangerouslySetInnerHTML={createMarkUp(clickHelp ? helperText:userText)}>

      </div>
    </div>
  )
}

export default Preview