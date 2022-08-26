
import React from 'react';
import {  BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
     <Router >
       <Header />
      <Home />
     
     <Switch >
       <Route path='/' />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
