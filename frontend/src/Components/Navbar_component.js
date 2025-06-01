import React from "react";
import { Navbar, Nav, Container, Offcanvas, Image, Button } from "react-bootstrap";
import styles from "../pages/css/Navbar_component.module.css";
import { useState } from "react";
const Navbar_component = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className={styles.Navbar}>
        <Container>
          <Navbar.Brand href="/home">
            <Image
              className={styles.navbarimaglogo}
              src="../images/Logo.png"
              fluid
            />
          </Navbar.Brand>
          <Nav className="me-auto navbarlinks d-none d-md-flex">
            <Nav.Link className={styles.NavbarLinks} href="/home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/file-share">
              File Share
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/public-chat">
              Public Chat
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="d-flex d-md-none w-25">

          </Nav>
          <Nav className="ml-auto d-md-flex justify-content-right">
            <Button className='Button'><a href="/public-chat">Get Started</a> </Button>
          </Nav>
          <Nav className="d-flex d-md-none m-3">
            <span className="material-symbols-outlined text-white" onClick={handleShow}>menu</span>
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas className="bg-dark" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-center align-items-center flex-column text-center">
          <Image
            className={styles.navbarimaglogo + "position-fixed top-0"}
            src="../images/Logo.png"
            fluid />
          <Nav.Link className={styles.NavbarLinks} href="/home">
              <h2>Home</h2>
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} styles="padding: 50px;" href="/file-share">
              <h2>File Share</h2>
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/public-chat">
              <h2>Public Chat</h2>
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/about">
              <h2>About Us</h2>
            </Nav.Link>
            <Nav.Link className={styles.NavbarLinks} href="/contact">
              <h2>Contact Us</h2>
            </Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Navbar_component;
