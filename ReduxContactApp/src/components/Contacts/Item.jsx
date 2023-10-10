import {useDispatch} from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  const dispatch=useDispatch();

  const handleDelete=(id)=>{
    if(window.confirm("Are you sure ?")){
        dispatch(deleteContact(id))
    }
  }
  return (
    <li>
        <span>{item.name}</span>
        <span>{item.number}</span>
        <div className='edit'>
          <span><Link to={`/edit/${item.id}`}>Edit</Link></span>
          <span className='deleteBtn' onClick={()=>handleDelete(item.id)}>x</span>
        </div>
    </li>
  )
}

export default Item