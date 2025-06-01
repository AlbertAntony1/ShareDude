import React from 'react'
import NavbarComponent from "../Components/Navbar_component";
import LoginComponent from "../Components/LoginComponent";
import MessageBox from "../Components/MessageBox";
import ChatHistoryComponent from "../Components/ChatHistoryComponent";
import {Col, Row, Container} from "react-bootstrap";
import axios from 'axios';

const PublicChat = () => {
  var SendData ={
      Name: 'untitled',
      Message: '',
      Image: '../images/Profile-picture.jpeg',
      Time: ''
  };
  
  function UpdateMessage(message) {
    SendData.Message = message;
  }
  function UpdateNameAndImage(name, image) {
    SendData.Name = name;
    SendData.Image = image;
  }



  async function AddtoDB() {
    await axios.post('http://localhost:5000/add', SendData)
  }

  return (
    <div>
        <NavbarComponent />
        <Container fluid>
          <Row className='d-flex '>
            <Col xs={12}>
              <LoginComponent UpdateNameAndImage={UpdateNameAndImage}/>
            </Col>
          </Row>
          <Row className='d-flex'>
            <Col xs={12}>
              <ChatHistoryComponent />
            </Col>
          </Row>
          <MessageBox UpdateMessage={UpdateMessage} AddtoDB={AddtoDB}/>
        </Container>
    </div>
  )
}

export default PublicChat