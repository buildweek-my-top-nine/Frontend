// import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import "../Signup.css";



// const Login = (props) => {

//     const [credentials, setCredentials] = useState({

//         username: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         setCredentials({
//             ...credentials,
//             [e.target.name] : e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axiosWithAuth()
//         .post('/login', credentials)
//         .then(response => {
//             console.log(response);
//             localStorage.setItem('token', response.data.session_id);
//             localStorage.setItem('id', response.data.id);
//             console.log(response.data.id);
//             props.history.push('/users');
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }

//     return (

//         <>
//         <div className="sign-container">
//             <div className="sign-up">
//                 <h1>Please Log In!</h1>

//                 <form className="field" onSubmit = {handleSubmit}>

//                     <input
//                         type = "text"
//                         name = "username"
//                         placeholder = "Username"
//                         onChange = {handleChange}
//                         className = "control"
//                         value = {credentials.username}
//                     />

//                     <input
//                         type = "password"
//                         name = "password"
//                         placeholder = "Password"
//                         onChange = {handleChange}
//                         className = "control"
//                         value = {credentials.password}
//                     />

//                     <button className="signButton">Submit</button>

//                 </form>
//             </div>
//         </div>


//         </>
//     );
// };


import React from 'react';
const axios = require('axios');
const oauth = require('axios-oauth-client');

export default class Login extends React.Component {

  state = {

    username: '',
    password: ''

  }

  constructor() {

    super();

  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });

  }

  handleSubmit = e => {

    axios.post('https://cameron-mytopnine.herokuapp.com/login', `grant_type=password&username=${this.state.username}&password=${this.state.password}`, {

      headers: {

        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'

      }

    })
      .then(res => {

        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/dashboard');

      })
      .catch(err => console.dir(err));

    e.preventDefault();

  }

  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
        <button>Submit</button>

      </form>

    );

  }

}
// export default Login;