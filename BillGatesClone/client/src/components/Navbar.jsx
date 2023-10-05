import React from 'react'
import logo from "../assets/nealFun.svg"
const Navbar = () => {
  return (
    <div className="row d-flex justify-content-center bg-white py-4">
        <div className='col-lg-10 d-flex justify-content-start fw-bolder'>
            <div className="col-2">
                <img src={logo} className='w-100'/>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar