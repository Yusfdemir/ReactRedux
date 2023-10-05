import React, { useEffect } from 'react'
import billGates from "../assets/billgates.jpg"
import './style.css'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts,productsSelector,statusSelector,wealthSelector,errorSelector,ordersSelector,numberWithCommas} from '../redux/productsSlice'
import Product from './Product'
import Receipt from './Receipt'
const Content = () => {
  const dispatch=useDispatch();

  const products=useSelector(productsSelector);
  const status=useSelector(statusSelector)
  const wealth=useSelector(wealthSelector)
  const error=useSelector(errorSelector)
  const orders=useSelector(ordersSelector)

  useEffect(()=>{
    if(status==='idle'){
      dispatch(getProducts())
    }
  },[dispatch,status])

  if(error){
    return <div>Error:{error}</div>
  }

  return (
    <>
      <div className='row mt-3 d-flex justify-content-center '>
        <div className="col-lg-10 bg-white py-5">
          <div className='d-flex flex-column align-items-center'>
          <div className='col-1 mb-3'><img src={billGates} className='rounded-circle img-fluid ' /></div>
          <div className='fs-2 fw-bolder'>Spend Bill Gates's Money</div>
          </div>
        </div>
      </div>

      <div className='row my-2 d-flex justify-content-center position-sticky top-0 '>
        <div className='col-lg-10 money-bg py-3 '> <span className='fs-3 fw-bold text-white align-middle'>{`$${numberWithCommas(wealth)}`}</span></div>
      </div>

      <div className="row  d-flex justify-content-center ">
        <div className="col-lg-10 d-flex flex-wrap px-0">
          {products?.map(product=>(
            <Product key={product.id} data={product}/>
          ))}
        </div>
      </div>
      <Receipt/>
    </>
  )
}

export default Content