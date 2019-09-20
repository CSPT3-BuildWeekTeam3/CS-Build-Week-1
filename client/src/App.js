import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default App;
