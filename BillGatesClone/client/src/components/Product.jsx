import {useState} from 'react'
import './style.css'
import {useDispatch} from 'react-redux'
import { buyWealth,sellWealth,numberWithCommas} from '../redux/productsSlice'

const Product = ({data}) => {
    const dispatch=useDispatch();
    const [value,setValue]=useState(0)
    
  return (
    <div className=" col-12 col-sm-6 col-lg-4 p-1">
        <div className='p-3 d-flex flex-column align-items-center bg-white'>
            <div className='col-6'>
                <img src= {data.img} className='img-fluid' style={{height:"150px"}}/>
            </div>
            <div className='fw-bold fs-5 mt-1'>{data.name}</div>
            <div className='text-success fw-bold fs-4 mb-2'>{`$${numberWithCommas(data.price)}`}</div>
            <div className='d-flex justify-content-between align-items-center'>
                <div className="col-4">
                    <button className={`w-75 fw-bold btn ${value<=0 ? "btn-light":"btn-danger" }`}
                            type='button'
                            disabled={value<=0}
                            onClick={()=>{setValue(value-1);dispatch(sellWealth({amount:value-1,data:data}))}}
                        >Sell
                    </button>
                </div>
                <div className="col-4">
                    <input  type="number" value={value} 
                            className='w-100 text-center'
                            disabled={true} />
                </div>
                <div className="col-4">
                    <button className='btn btn-success w-75 fw-bold' 
                            onClick={()=>{setValue(value+1);dispatch(buyWealth({amount:value+1,data:data}))}}
                        >Buy
                    </button>
                </div>
                
                
                
            </div>
        </div>
    </div>
    
    
  )
}

export default Product