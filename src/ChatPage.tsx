import React from "react";
import "./App.css";
import ChatForm from "./Form";

const ChatPage: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <h3> Chat Page </h3>
        <ChatForm />
      </div>
    </React.Fragment>
  );
};

export default ChatPage;
