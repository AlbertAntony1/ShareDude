import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutComponent = () => {
  return (
    <div>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <h1 id="about" className="my-3 text-center text-light">
            About Us
          </h1>
        </Row>
        <Row>
          <Col className=" d-none d-lg-block">
            <Image
              src="../images/About-Us.jpg"
              alt="Logo"
              className="mb-2 mx-auto w-100"
            ></Image>
          </Col>
          <Col>
            <h6 className="my-1 text-light">
              ShareDude is a simple, user-friendly platform created to make file
              sharing and public chatting effortless for everyone. We believe
              that technology should be easy, fast, and free — that's why
              ShareDude requires no complicated logins or payments. With just
              your name and a photo, you can start sharing files using a unique
              code and join our open public chat. Whether you're sending
              documents to a friend or chatting with people around the world,
              ShareDude keeps it quick and fun.
            </h6>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
          <h1 id="about" className="my-3 text-center text-light">
            Our Story
          </h1>
        </Row>
        <Row>
          <Col className=" d-none d-lg-block">
            <Image
              src="../images/Our-Story.webp"
              alt="Logo"
              className="mb-2 mx-auto w-100"
            ></Image>
          </Col>
          <Col>
            <h6 className="my-1 text-light">
              The idea of ShareDude came from a simple thought: "Why isn’t there
              an easy way to share files and chat without any hassle?" I’m
              Albert Antony, a young developer who wanted to make a tool that
              anyone could use — fast, free, and without complexity. This
              project wouldn’t have been possible without the constant support
              of my family, especially my elder brother, Steve Antony. His
              encouragement, feedback, and belief in my ideas gave me the
              motivation to turn this project into a real platform. From
              late-night coding sessions to testing every small feature,
              ShareDude is built not just with code — but with heart, support,
              and family spirit.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComponent;
