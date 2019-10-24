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
        .post('https://buildweek--top-nine.herokuapp.com/api/login', credentials)
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.payload);
            props.history.push('/myprofile');
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