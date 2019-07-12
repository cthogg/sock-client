import React from "react";
import "./App.css";
import ChatPage from "./ChatPage";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const App: React.FC = () => {
  return (
    <div className="App">
      <ChatPage />
    </div>
  );
};

export default App;
