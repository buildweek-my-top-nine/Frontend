import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">

      <h1>Top Nine</h1>

    <ul>

      <li>
      <Link to ="/login">Login</Link>
      </li>
      <li>
      <Link to ="/signup">Sign Up</Link>
      </li>

      </ul>

      <Switch>
      <Route exact path ="/login" component = {Login} />


      </Switch>
    </div>
    </Router>
  );
}

export default App;
