import * as React from "react";
import { Formik, Field, Form, FormikActions } from "formik";

interface Values {
  firstName: string;
}

const ChatForm: React.SFC<{}> = () => (
  <div className="container">
    <Formik
      initialValues={{
        firstName: ""
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 10);
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
  </div>
);

export default ChatForm;
