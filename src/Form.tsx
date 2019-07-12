import React, { useState } from "react";
import { Formik, Field, Form, FormikActions } from "formik";

interface Values {
  firstName: string;
}

const ChatForm: React.SFC<{}> = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <Formik
        initialValues={{
          firstName: ""
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikActions<Values>
        ) => {
          setMessage(JSON.stringify(values, null, 2));
        }}
        render={() => (
          <Form>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Message"
              type="text"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      />
      <p> {message} </p>
    </div>
  );
};

export default ChatForm;
