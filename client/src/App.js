import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
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

