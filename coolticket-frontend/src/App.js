import React from 'react';
import {  BrowserRouter as Router, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'
import Coolticket from './components/Coolticket';
import CreateTicket from './components/CreateTicket';

function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/" exact component={Coolticket}/>
      <Route path="/api/v1/user" component={CreateUser}/>
      <Route path="/api/v1/auth/login" component={LoginUser}/>
      <Route path="/api/v1/ticket" component={CreateTicket}/>
    </Router>
  );
}

export default App;
