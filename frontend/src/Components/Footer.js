import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Container fluid className='bg-secondary text-light text-center py-3'>
            <Row className='mb-4'>
              <Col>
                <Image src="../images/logo_white.png" alt="Logo" className='mb-2' height={'45px'}/>
              </Col>
            </Row>
            <Row className='mx-3'>
              <Col className='border-end border-start border-light mb-4 p-0'>
                <h4>Service</h4>
                <a href="/file-share" className='text-light  text-decoration-none'>File Share</a>
                <br />
                <a href="/public-chat" className='text-light text-decoration-none'>Public Chat</a>
              </Col>

              <Col className='border-end border-start  mb-4 border-light p-0'>
                <h4>Account</h4>
                <a href="/public-chat" className='text-light text-decoration-none'>Login</a>
              </Col>

              <Col className='border-end border-start  mb-4 border-light p-0'>
                <h4>Information</h4>
                <a href="/about#about" className='text-light text-decoration-none'>About Us</a>
                <br />
                <a href="/about#story" className='text-light text-decoration-none'>Our Story</a>
              </Col>

              <Col className='border-end border-start  mb-4 border-light p-0'>
                <h4>Connect</h4>
                <a href="/contact" className='text-light text-decoration-none'>Contact</a>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer