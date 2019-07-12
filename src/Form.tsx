import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import io from "socket.io-client";

const CHAT_MESSAGE = "chat message";
const host = "https://murmuring-meadow-17796.herokuapp.com";
//const host = "http://localhost:4000";
const socket = io(host);

interface Values {
  messageText: string;
}

const ChatForm: React.SFC<{}> = () => {
  const [message, setMessage] = useState("");
  const [placeholderText, setplaceholderText] = useState("last message");

  useEffect(() => {
    socket.on(CHAT_MESSAGE, (payload: string) => {
      const messageText = JSON.parse(payload).messageText;
      setMessage(messageText);
      setplaceholderText(messageText);
    });
  });

  return (
    <div className="container">
      <Formik
        initialValues={{
          messageText: ""
        }}
        onSubmit={(values: Values) => {
          const message = JSON.stringify(values, null, 2);
          setMessage(values.messageText);
          socket.emit(CHAT_MESSAGE, message);
        }}
        render={() => (
          <Form>
            <Field
              id="messageText"
              name="messageText"
              placeholder={placeholderText}
              type="text"
              className="input"
            />
            <button className="button" type="submit">
              <span className=""> Edit Text </span>
            </button>
          </Form>
        )}
      />
      <p className="is-size-3"> Last message</p>
      <p> {message} </p>
    </div>
  );
};

export default ChatForm;
