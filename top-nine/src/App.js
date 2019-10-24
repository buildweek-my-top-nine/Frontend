import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth'

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import SignUp from "./components/SignUp";

import Login from './components/Login';
import Links from './components/Links';
import {HomePage} from './components/HomePage';
import Profile from './components/Profile';
import { TopNineContext, UserContext } from "./context/TopNineContext";

import './App.css';

function App() {

  const [nine, setNine] = useState([])
  const [user, setUser] = useState([])

  const getNine = () => {
    axiosWithAuth()
      .get("https://cameron-mytopnine.herokuapp.com/getuserinfo")
      .then(response => {
        setNine(response.data)
      })
      .catch(err => console.log(err))
  }

  const getUser = () => {
    axiosWithAuth().get("https://cameron-mytopnine.herokuapp.com/getuserinfo")
    .then(res => {
      setUser(res.data[0])
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getNine()
    getUser()
  },[])

  console.log(nine)



  return (
    <div className="App">
      <TopNineContext.Provider value={{nine}}>
        <UserContext.Provider value={{user}}>
          <Route exact path ="/" component={Links} />
          <Route exact path ="/login" component = {Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/myprofile' component={Profile} />
          {/* <Route exact path='/dashboard' component={Dashboard} /> */}

          <Route exact path='/homepage' render={props => {
            const token = localStorage.getItem("token")
            if(!token){
              return <Redirect to='/login'/>
            } else {
              return <HomePage {...props} getNine={getNine} />
            }
          }} />

          <Route exact path='/dashboard' render={props => {
            const token = localStorage.getItem("token")
            if(!token) {
              return <Redirect to='/login'/>
            } else {
              return <HomePage {...props} getNine={getNine} />
            }
          }} />

        </UserContext.Provider>
      </TopNineContext.Provider>
    </div>

  );
}

export default App;
