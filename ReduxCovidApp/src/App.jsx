import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCountriesData, getTotalData } from './redux/covidSlice'
import Header from './components/Header'
import SelectCountry from './components/SelectCountry'
import Carts from './components/Carts'
import Grafik from './components/Grafik'

function App() {
  const dispatch = useDispatch()
  const {selectedCountry,totalData,stateOfTotatData,errorOfCountries}=useSelector(state=>state.covid)
  useEffect(()=>{
    dispatch(getCountriesData())
  },[])
  useEffect(() => {
    dispatch(getTotalData(selectedCountry))
  }, [dispatch,selectedCountry])
  

  return (
    <div className='container mx-auto py-6 px-4 max-w-[1200px] h-screen text-center'>
     <Header/>
     <Carts/>
     <SelectCountry/>
     <div className='my-8'> <Grafik/></div>
    </div>
  )
}

export default App
