import React from 'react'
import Forms from '../components/Forms'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Header/>
        <Forms/>
    </div>
  )
}

export default Home