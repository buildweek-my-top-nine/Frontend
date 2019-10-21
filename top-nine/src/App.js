import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">

      <h1 className= "top">Top Nine</h1>

    <ul>

    <li>
      <Link to ="/">Home</Link>
      </li>
      <li>
      <Link to ="/login">Login</Link>
      </li>
      <li>
      <Link to ="/signup">Sign Up</Link>
      </li>

      </ul>

      <Switch>
      <Route exact path ="/login" component = {Login} />
      <Route exact path='/users/SignUp' component={SignUp} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
