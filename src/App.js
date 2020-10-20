import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'; 

function App() {
  return (
    <div>
      <Router>
          <Switch>
            
            <Route exact path="/">
              <h1>Home</h1>
            </Route>

            <Route path="/about">
              <h1>about</h1>
            </Route>

            <Route path="/dashboard">
              <h1>dashboard</h1>
            </Route>  

        </Switch>
      </Router>
    </div>
  );
}

export default App;
