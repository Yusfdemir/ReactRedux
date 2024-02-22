import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCountry } from '../redux/covidSlice'

const SelectCountry = () => {
    const dispatch=useDispatch()
    const {countriesData,stateOfCountriesData,errorOfCountries}=useSelector(state=>state.covid)
  return (
    <div>
        <select className='border border-gray-500 rounded-md p-3 outline-none' onChange={(e)=>dispatch(setSelectedCountry(e.target.value))}>
        <option value={null}>Ülke Seçiniz</option>
        {   
            countriesData?.map((country,i)=>(
                <option key={i} value={country.iso}>{country.name}</option>
            ))
        }
        </select>
    </div>
  )
}

export default SelectCountry