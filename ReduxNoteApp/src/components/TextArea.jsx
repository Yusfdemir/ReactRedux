import React, { useState } from 'react'
import {Row,Col,InputGroup,Form, Button, } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {AiOutlineCheck} from "react-icons/ai"
import {selectColor,addNote} from "../redux/Note/noteSlice"
 
const TextArea = () => {
    const dispatch =useDispatch();
    const notes=useSelector((state)=>state.noteApp.notes)
    const selectedColor=useSelector((state)=>state.noteApp.color)
    const colors=['primary','danger','warning','success','secondary']
    const [note,setNote]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!note) return;
        dispatch(addNote({note}))
        setNote("")
    }
  return (
    <>
    <h2 className='text-center text-secondary'>Notes App</h2>
    <Row className='justify-content-center p-3'>
        <Col xs={12} md={8}  className='d-flex justify-content-center'>
            <InputGroup  className="mb-3 w-75">
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                placeholder="..."
                aria-label="Search"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Col>
    </Row>  
    <Row>
        <Row className='justify-content-center p-2 '>
            <Col xs={12} md={8}  className='bg-white pb-2 rounded'>
                <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Control as="textarea" aria-label="With textarea" placeholder='Enter Your Note...' className='border border-0 w-100' rows={5}
                    onChange={(e)=>setNote(e.target.value)}
                    value={note}
                    />   
                </Row>
                <Row className='d-flex align-items-center mt-3'>
                    <Col xs={10} className='d-flex'>
                        {
                            colors?.map((color,index)=>(
                                <Button key={index}
                                        value={color} 
                                        className={`rounded-circle bg-${color} border-0 mx-1  ` }
                                        style={{width:"25px",height:"25px"}}
                                        onClick={()=>dispatch(selectColor(color))}
                                        >
                                    {
                                        color===selectedColor && <AiOutlineCheck color='black' className='d-flex' /> 
                                    }
                                </Button>
                            ))
                        }    
                    </Col>
                    <Col xs={2}>
                        <Button variant='success' type='submit'>Add</Button>
                    </Col>
                </Row> 

                </Form>
                                
            </Col>

            <Col xs={12} md={8} className='mt-4' >
                <Row>
                {
                    notes?.map((note,index)=>(
                        <Col key={index} xs={12} md={6} lg={4} className='my-2'>
                            <div className={`w-90 d-flex justify-content-center bg-${note.color}`}>{note.note}</div>    
                        </Col>
                    ))
                }
                </Row>
            </Col>
        </Row>    
    </Row>
  </> 
  )
}

export default TextArea