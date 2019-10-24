import React, { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import "../Signup.css";

function SignUp() {
  
    return (
            <div className="sign-container">
                <div className="sign-up">
                    <h1>Top 9 Sign Up</h1>
                </div>
              <Form className="field">
                <Field className="control" type="text" name="username" placeholder="Username"/>
                <Field className="control" type="text" name="email" placeholder="Email"/>
                <Field className="control" type="text" name="first_name" placeholder="First Name"/>
                <Field className="control" type="text" name="last_name" placeholder="Last Name" />
                <Field className="control" type="text" name="password" placeholder="Password"/>
                <button type="submit" className="signButton">Submit!</button>
              </Form>
            </div>
    );
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ username, email, first_name, last_name, password}) {
        return {
            username: username || "",
            email: email || "",
            first_name: first_name || "",
            last_name: last_name || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            // .username()
            .required("Username is required"),
        email: Yup.string()
          .email()
          .required("Email is required"),
        first_name: Yup.string()
            // .name()
            .required("First name is required"),
        last_name: Yup.string()
            // .name()
            .required("Last name is required"),
        password: Yup.string()
          .min(6, "Password must be 6 chararcters or longer")
          .required("Password is required")
      }),
    handleSubmit(values, formikBag) {
        console.log(values);
        
          axiosWithAuth()
            .post("/user", values)
            .then(res => {
              console.log(res);
              formikBag.props.history.push("/login");
            });
      }
    })(SignUp);

export default FormikSignUpForm;