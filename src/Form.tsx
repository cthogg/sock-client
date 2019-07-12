import React, { useState, useEffect } from "react";
import { Formik, Field, Form, FormikActions } from "formik";
import io from "socket.io-client";

const CHAT_MESSAGE = "chat message";

const socket = io("http://localhost:4000");

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
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikActions<Values>
        ) => {
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
            />
            <button type="submit">Edit Text</button>
          </Form>
        )}
      />
      <p> {message} </p>
    </div>
  );
};

export default ChatForm;
