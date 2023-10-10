import React from 'react'
import Form from './Form'
import List from './List'
import { UseSelector, useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contactsSlice'

const Contacts = () => {
  const total=useSelector(contactSelectors.selectTotal)
  return (
    <>
      <h1>Contacts ({total})</h1>
      <List/>
      <Form/>
    </>
  )
}

export default Contacts