import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>

      <Switch>
      <Route exact path ="/login" component = {Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/myprofile' component={Profile} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
