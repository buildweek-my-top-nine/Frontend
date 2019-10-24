import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import "../Signup.css";



const Login = (props) => {

    const [credentials, setCredentials] = useState({

        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosWithAuth()
        .post('/login', credentials)
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.session_id);
            localStorage.setItem('id', response.data.id);
            console.log(response.data.id);
            props.history.push('/users');
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (

        <>
        <div className="sign-container">
            <div className="sign-up">
                <h1>Please Log In!</h1>

                <form className="field" onSubmit = {handleSubmit}>

                    <input
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        onChange = {handleChange}
                        className = "control"
                        value = {credentials.username}
                    />

                    <input
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        onChange = {handleChange}
                        className = "control"
                        value = {credentials.password}
                    />

                    <button className="signButton">Submit</button>

                </form>
            </div>
        </div>


        </>
    );
};

export default Login;