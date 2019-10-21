import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';

import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Route exact path='/users/SignUp' component={SignUp} />
    </div>
  );
}

export default App;
