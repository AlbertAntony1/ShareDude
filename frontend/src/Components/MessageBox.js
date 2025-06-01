import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useRef } from "react";

const MessageBox = ({ UpdateMessage, AddtoDB }) => {
  const messageInputElement = useRef();
  function MessageSending(){
    UpdateMessage(messageInputElement.current.value);
    AddtoDB();
  }

  return (
    <div
      className="position-fixed d-flex"
      style={{
        bottom: "25px",
        left: "0px",
        margin: "0px",
        width: "100vw",
        padding: "0px 5vw",
      }}
    >
      <FloatingLabel
        className="w-100"
        controlId="floatingTextarea"
        label="Message"
      >
        <Form.Control
          style={{ maxHeight: "100px" }}
          ref={messageInputElement}
          as="textarea"
          placeholder="Leave a comment here"
        />
      </FloatingLabel>
      <Button onClick={MessageSending} className="Button" style={{ height: "60px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
      </Button>
    </div>
  );
};

export default MessageBox;
