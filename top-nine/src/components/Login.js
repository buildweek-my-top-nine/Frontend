import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



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
        <h1>Please Sign In!</h1>

        <form onSubmit = {handleSubmit}>

            <input
                type = "text"
                name = "username"
                placeholder = "Username"
                onChange = {handleChange}
                value = {credentials.username}
            />

            <input
                type = "password"
                name = "password"
                placeholder = "Password"
                onChange = {handleChange}
                value = {credentials.password}
            />

            <button>Submit</button>

        </form>


        </>
    );
};

export default Login;