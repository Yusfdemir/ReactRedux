import React, { useEffect, useState } from 'react'
import { ordersSelector,numberWithCommas } from '../redux/productsSlice'
import { useSelector } from 'react-redux'
const Receipt = () => {
    const orders=useSelector(ordersSelector)
    const [total,setTotal]=useState(0)
    let tempTotal=0;
    useEffect(()=>{
        tempTotal=0;
        orders.forEach(el => {
            tempTotal+=el.amount*el.data.price
            setTotal(tempTotal)
        })  
    },[orders])
  return (
    <div className='row d-flex justify-content-center mt-3'>
        <div className="col-lg-10 bg-white d-flex flex-column align-items-center">
            <h4 className='p-3'>Your Receipt</h4>
            <div>{orders.map((order,index)=>(
                <div className='d-flex justify-content-between' key={index}>
                    <div className='mx-2'>{order.data.name}</div>
                    <div className='mx-2'>X{order.amount}</div>
                    <div className='mx-2'>{`$${numberWithCommas(order.data.price)}`}</div>
                </div>
            ))}</div>
            <div className='d-flex justify-content-between border-top border-3 border-dark'>
                    <div className='mx-2'>Total</div>
                    <div className='mx-2'>$:</div>
                    <div className='mx-2'>{`${numberWithCommas(total)}`}</div>
                </div>
        </div>
    </div>
  )
}

export default Receipt