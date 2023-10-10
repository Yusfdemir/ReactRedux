import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addContact,addContacts } from '../../redux/contactsSlice'
import {nanoid} from "nanoid"
const Form = () => {
    const[name,setName]=useState("")
    const [number,setNumber]=useState("")
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!name || !number){
            return false
        }
        // name kısmına tek isim girersek
        //dispatch(addContact({id:nanoid(),name}))

        // name kısmına ali,veli,ayşe gibi çoklu isim girersek
        const names=name.split(',');
        const data=names.map(name => ({id:nanoid(),name,number}))
        dispatch(addContacts(data))
        setName("")
        setNumber("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/>
            <input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='phone number' />
            <div className="btn"><button type='submit'>Add</button></div>
        </form>
    </div>
  )
}

export default Form