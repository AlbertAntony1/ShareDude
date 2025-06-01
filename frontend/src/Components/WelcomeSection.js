import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
const WelcomeSection = () => {
  return (
    <div>
      <Container style={{ marginTop: "70px" }} fluid>
        <Row className="m-1">
          <Col className="m-4">
            <h1 className="pt-sans-bold-italic text-white">SHARE FILES, </h1>
            <h1 className="pt-sans-bold-italic text-white">CHAT FREE,</h1>
            <h1 className="pt-sans-bold-italic text-white">
              ALL IN ONE PLACE!
            </h1>
            <p className="playfair-display text-white mt-4">
              ShareDude is a simple and free platform built by me, Albert
              Antony, for quick and easy file sharing and chatting. With just a
              single code, you can send files to others — no sign-up or payment
              needed.
            </p>
            <Button className='Button'>
              <a href="/public-chat">Public Chat</a>{" "}
            </Button>
            <Button className='Button'>
              <a href="/file-share">File Share</a>{" "}
            </Button>
          </Col>
          <Col className="m-0 p-0 d-none d-md-flex justify-content-end align-items-center">
            <img
              className="img-fluid m-0 object-fit-cover"
              src="../images/welcome_image.jpg"
              alt="Welcome"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeSection;
