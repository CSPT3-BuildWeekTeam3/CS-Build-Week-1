import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
