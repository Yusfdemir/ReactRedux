import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contactsSlice';
import {useNavigate} from 'react-router-dom'

const EditForm = ({contact}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const [name,setName]=useState(contact.name)
    const [number,setNumber]=useState(contact.number);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !number) return false;

        dispatch(updateContact({
            id:contact.id,
            changes:{
                name,
                number
            }
        }))
        navigate('/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={name}  placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input value={number}  placeholder='phone number' onChange={(e)=>setNumber(e.target.value)} />
            <div className="btn"><button type='submit'>Update</button></div>
        </form>
    </div>
  )
}

export default EditForm