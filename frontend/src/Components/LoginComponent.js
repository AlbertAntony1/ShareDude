import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Container, Form, Image, Accordion, Button } from "react-bootstrap";
import axios from "axios";

const LoginComponent = ({ UpdateNameAndImage }) => {
  const [ImageSrc, SetImage] = useState("../images/Profile-picture.jpeg");
  const [ImageFile, SetImageFile] = useState("../images/Profile-picture.jpeg");
  const NameInputElement = useRef();
  const ImageElement = useRef();

  async function UpdateProfile() {
    if (ImageFile !== "../images/Profile-picture.jpeg") {
      var formData = new FormData();
      formData.append("profile-picture", ImageFile);
      await axios
        .post("http://localhost:5000/profile-picture", formData)
        .then((res) => SetImage(`../images/profile-picture/${res.data}`))
        .catch((error) => console.error(error));
    }
    UpdateNameAndImage(NameInputElement.current.value, ImageSrc);
  }
  function ChangeImage(e) {
    let file = e.target.files[0];
    SetImageFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => SetImage(fileReader.result);
  }

  return (
    <div style={{ marginTop: "70px", background: `url(https://chatgpt.com/s/m_6839ababb01c81918ca0e4e8d107ffaa)` }}>
      <Container
        className="d-flex flex-column p-2 justify-content-center align-items-center"
        fluid
      >
        <Accordion className="w-75 ">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Change Profile</Accordion.Header>
            <Accordion.Body className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <Container
                className="d-flex justify-content-center align-items-center"
                fluid
              >
                <Image
                  src={ImageSrc}
                  ref={ImageElement}
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Container>
              <Container
                className="d-flex flex-column justify-content-center align-items-center"
                fluid
              >
                <Form.Control
                  className="my-2"
                  type="text"
                  placeholder="Enter Your Name"
                  ref={NameInputElement}
                />
                <Form.Control
                  onChange={ChangeImage}
                  accept="image/*"
                  className="my-2"
                  type="file"
                />
                <Button onClick={UpdateProfile} className="Button">
                  Update
                </Button>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default LoginComponent;
