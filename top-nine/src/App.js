import React, { useState, useEffect } from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Header from './components/Header';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>

      <Switch>
      <Route exact path ="/login" component = {Login} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/myprofile' component={Profile} />

      <PrivateRoute exact path = 'homepage/dashboard' component = {Dashboard} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
