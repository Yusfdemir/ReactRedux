import { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='flex justify-center align-center gap-5 mx-10'>
      <Editor/>
      <Preview/>
    </div>
    </>
  )
}

export default App
