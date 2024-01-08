import React from 'react'

const Input = ({value,type,id,name,onChange,placeholder}) => {
  return (
    <div>
        <input className='h-10 w-full border rounded-md p-2 outline-none mt-3' value={value} type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default Input