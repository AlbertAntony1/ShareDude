import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from "../pages/css/ChatHistoryComponent.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ChatHistoryComponent = () => {
  const [chatHistory, SetChatHistory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/get-data")
    .then((response) => {SetChatHistory(response.data);})
    .catch((error) => {console.error("Error fetching chat history:", error);});
  });

  
  

  return (
    <Container styles={{padding: '0px 8px', marginTop: '70px'}} fluid >
      <ul className="d-flex flex-column align-items-center p-0" style={{height: '480px', overflowY: "scroll"}}>
        {chatHistory.map((chat, index) => (
          <li className={styles.listitem} key={index}>
            <Image
                src={chat.Image}
                className={styles.listitemimage}
            />
            <div className={styles.listitemname_message}>
                <h6 className="fw-bold">{chat.Name}</h6>
                <p>{chat.Message}</p>
            </div>
            <div>
                <p className={styles.listitemtime}>{chat.Time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ChatHistoryComponent;
