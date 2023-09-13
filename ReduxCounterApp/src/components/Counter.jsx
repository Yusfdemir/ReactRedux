import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount} from '../redux/counter/counterSlice'
const Counter = () => {
    
    const countValue=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    const [amount,setAmount]=useState(1)
  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <br /><br />
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(amount))}>İnputa girilen değer kadar arttır</button>
        
    </div>
  )
}

export default Counter