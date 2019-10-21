import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import '../Signup.css';

function SignUp({touched, errors}) {

    return (
        <div className="sign-container">
            <div className='sign-up'>
                <h1>Top 9 Sign Up</h1>

                <Form className="field">
                    <div>
                        <label>Username</label>
                        <Field
                            className="control"
                            name="username"
                            typer="username"
                            autoComplete="off"
                        />
                        <br/>
                        <h3>{touched.username && errors.username}</h3>
                    </div>

                    <div>
                        <label>Full Name</label>
                        <Field
                            className="control"
                            name="full_name"
                            typer="text"
                            autoComplete="off"
                        />
                        <br/>
                        <h3>{touched.full_name && errors.full_name}</h3>
                    </div>

                    <div>
                        <label>Email</label>
                        <Field
                            className="control"
                            name="email"
                            type="email"
                            autoComplete="off"
                        />
                        <br/>
                        <h3>{touched.email && errors.email}</h3>
                    </div>

                    <div>
                        <label>Password</label>
                        <Field
                            className="control"
                            name="password"
                            type="password"
                            autoComplete="off"
                        />
                        <br/>
                        <h3>{touched.password && errors.password}</h3>
                    </div>
                    <button type="submit" className="signButton">Join!</button>
                </Form>
            </div>
        </div>
    )
}

export default withFormik({

    mapPropsToValues() {
        return {
            username: '',
            email: '',
            password: '',
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(3)
            .required(),
        full_name: Yup.string()
            .email()
            .required(),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(6)
            .required()  
    }),

    handleSubmit(values, formikBag){
        
        const url = '#'

        axios
            .post(url, values)
            .then(response => {
                console.log(response)
                formikBag.props.history.push("/users/login");
            })
            .catch(e => {
                console.log(e)
            });
    }
})(SignUp)