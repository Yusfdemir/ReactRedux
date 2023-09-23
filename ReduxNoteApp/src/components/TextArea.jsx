import React, { useEffect, useState } from 'react'
import {Row,Col,InputGroup,Form, Button, } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {AiOutlineCheck,AiOutlineDelete} from "react-icons/ai"
import {addNote,deleteNote} from "../redux/Note/noteSlice"
 
const TextArea = () => {
    const dispatch =useDispatch();
    const notes=useSelector((state)=>state.noteApp.notes)
    const colors=['primary','danger','warning','success','secondary']
    const [note,setNote]=useState("")
    const [selectedColor,setSelectedColor]=useState(localStorage.getItem("selectedColor")||"white")
    const [search,setSearch]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!note) return;
        dispatch(addNote({note,selectedColor}))
        setNote("")
    }
    useEffect(()=>{
        localStorage.setItem("selectedColor",selectedColor)
    },[selectedColor])
    let filteredNotes=notes.filter(note=>note.note.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <h2 className='text-center text-secondary'>Notes App</h2>
    <Row className='justify-content-center p-3'>
        <Col xs={12} md={8}  className='d-flex justify-content-center'>
            <InputGroup  className="mb-3 w-75" >
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                placeholder="..."
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
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
                                        className={`rounded-circle bg-${color} border-0 mx-1 d-flex justify-content-center align-items-center` }
                                        style={{width:"35px",height:"35px"}}
                                        onClick={()=>setSelectedColor(color)}
                                        >
                                    {
                                        color===selectedColor && <AiOutlineCheck color='black'/> 
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
                {   filteredNotes.length>0 ?
                    filteredNotes.map((note,index)=>(
                        <Col key={index} xs={12} md={6} lg={4} className='my-2'>
                            <div className={`w-90 d-flex justify-content-between bg-${note.color}`}>
                                <p className='p-1 fw-semibold'>{note.note}</p>
                                <button className='bg-transparent border-0' onClick={()=>dispatch(deleteNote(note.id))}><AiOutlineDelete/></button>
                            </div>    
                        </Col>
                    ))
                    :
                    <div className='text-center fw-bold'>Sonuç bulunamadı</div>
                }
                </Row>
            </Col>
        </Row>    
    </Row>
  </> 
  )
}

export default TextArea