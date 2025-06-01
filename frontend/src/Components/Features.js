import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Features = () => {
  return (
    <div>
      <Container>
        <Row>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "18rem", margin: "0.5rem" }}>
            <Card.Body style={{ margin: "1rem" }}>
              <Card.Title className="text-center">
                1. Instant File Sharing
              </Card.Title>
              <Card.Img
                variant="top"
                className="d-none d-sm-flex"
                styles={{ width: "12rem", margin: "2rem"}}
                src="../images/Instant-File-Sharing.png"
              />
              <Card.Text>
                Send files quickly using a simple code. No need for email or
                registration — just upload and share.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card style={{ width: "18rem", margin: "0.5rem" }}>
            <Card.Body style={{ margin: "1rem" }}>
              <Card.Title className="text-center">
                2. Public Chat Room
              </Card.Title>
              <Card.Img
                variant="top"
                className="d-none d-sm-flex"
                styles={{ width: "12rem", margin: "2rem"}}
                src="../images/Public-Chat.svg"
              />
              <Card.Text>
                Join a live chat with other users around the world. It’s open, fun, and completely free to use.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card style={{ width: "18rem", margin: "0.5rem" }}>
            <Card.Body style={{ margin: "1rem" }}>
              <Card.Title className="text-center">
                3. Login with Name & Photo
              </Card.Title>
              <Card.Img
                variant="top"
                className="d-none d-sm-flex"
                styles={{ width: "12rem", margin: "2rem"}}
                src="../images/simple-login.webp"
              />
              <Card.Text>
                Start using ShareDude by just entering your name and uploading a photo. No passwords, no sign-ups — just you.
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card style={{ width: "18rem", margin: "0.5rem" }}>
            <Card.Body style={{ margin: "1rem" }}>
              <Card.Title className="text-center">
                4. 100% Free Forever
              </Card.Title>
              <Card.Img
                variant="top"
                className="d-none d-sm-flex"
                styles={{ width: "12rem", margin: "2rem"}}
                src="../images/no-cost.png"
              />
              <Card.Text>
                All features on ShareDude are totally free. Share and chat without any hidden charges or limits.
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card style={{ width: "18rem", margin: "0.5rem" }}>
            <Card.Body style={{ margin: "1rem" }}>
              <Card.Title className="text-center">
                5. Clean and Simple Interface
              </Card.Title>
              <Card.Img
                variant="top"
                className="d-none d-sm-flex"
                styles={{ width: "12rem", margin: "2rem"}}
                src="../images/simple-interface.svg"
              />
              <Card.Text>
                Enjoy a smooth, user-friendly design. Everything is easy to use, even on your first visit.
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>        



        </Row>
      </Container>
      

    </div>
  );
};

export default Features;
