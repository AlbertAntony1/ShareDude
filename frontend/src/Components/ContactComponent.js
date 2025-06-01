import React from 'react'
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useRef } from 'react'


const ContactComponent = () => {
  const NameInputElement = useRef();
  const MessageInputElement = useRef();


  async function sendFeedBack(){
    var data = { Name: NameInputElement.current.value, Message: MessageInputElement.current.value}
    await axios.post("http://localhost:5000/add-feedback",{data: data}).catch((err)=>console.log(err))
  }

  return (
        <Container className='mb-5' style={{marginTop: '70px'}}>
            <h1 className='m-5 text-center fw-bold text-white'>Contact Us</h1>
          <Row>
            <Col className="d-none d-sm-flex p-3 justify-content-center align-items-center">
              <Image
                src="../images/contact-us.avif" 
                style={{width: '500px'}} />
            </Col>
            <Col className="d-flex d-sm-none p-3 justify-content-center align-items-center">
              <Image
                src="../images/contact-us.avif" 
                style={{width: '300px'}} />
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-white"><b>Name</b></Form.Label>
                  <Form.Control type="name" ref={NameInputElement} placeholder="Example: Albert Antony" />
                </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-white"><b>Message</b></Form.Label>
                <Form.Control as="textarea" ref={MessageInputElement} placeholder="Enter Your Message Here" rows={3} />
                <Button className='Button w-100 mx-0 my-2' onClick={sendFeedBack}>Submit</Button>
              </Form.Group>
            </Form>
            </Col>
          </Row>
        </Container>
  )
}

export default ContactComponent