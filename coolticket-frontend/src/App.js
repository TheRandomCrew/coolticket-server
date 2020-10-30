import React from 'react';
import {  BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'

function App() {
  return (
    <Router>
      <Navigation/>
    
      <Route path="/api/v1/user"component={CreateUser}/>
      <Route path="/api/v1/auth/login"component={LoginUser}/>
    </Router>
  );
}

export default App;
