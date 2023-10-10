import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { contactSelectors,removeAllContacs } from '../../redux/contactsSlice'
import Item from './Item'

const List = () => {
    const dispatch=useDispatch()
    const contacts=useSelector(contactSelectors.selectAll)
    const total=useSelector(contactSelectors.selectTotal)

    const handleDeleteAll=()=>{
      if(window.confirm("Are you sure ?")){
        dispatch(removeAllContacs())
      }
    }

  return (
    <div>
      {
        total>0 && <div className='deleteAllBtn' onClick={handleDeleteAll}>Delete All</div>
      }
      <ul className='list'>
        {contacts.map(contact=>(
            <Item key={contact.id} item={contact}/>
        ))}
      </ul>
    </div>
  )
}

export default List