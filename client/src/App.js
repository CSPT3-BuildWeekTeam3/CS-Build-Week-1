import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import World from './components/World'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/world' component={World} />
    </div>
  );
}

export default App;
