import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Addition from './components/Addition';
import Multiplication from './components/Multiplication';
import Subtraction from './components/Subtraction';
import Division from './components/Division';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" render={routeProps => <Home {...routeProps}/>}/>
        <Route exact path="/addition" render={routeProps => <Addition {...routeProps}/>}/>
        <Route exact path="/subtraction" render={routeProps => <Subtraction {...routeProps}/>}/>
        <Route exact path="/multiplication" render={routeProps => <Multiplication {...routeProps}/>}/>
        <Route exact path="/division" render={routeProps => <Division {...routeProps}/>}/>
      </Switch>
    </div>
  );
}

export default App;
