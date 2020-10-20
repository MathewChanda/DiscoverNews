import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'; 
import Navbar from './Component/Navbar/Navbar.jsx'


function App() {
  return (
    <div>
      <Router>
          <Switch>

            <Route exact path="/"> 
              <Redirect to="/entertainment"/>
            </Route>

            <Route path="/entertainment">
              <Navbar/>
              <div id = "contentStyle">
                <h1>Entertainment</h1>
              </div>
            </Route>

            <Route path="/sports">
              <Navbar/>
              <div id = "contentStyle">
                <h1>Sports</h1>
              </div>
            </Route>

            <Route path="/technology">
              <Navbar/>
              <div id = "contentStyle">
                <h1>Technology</h1>
              </div>
            </Route>  

        </Switch>
      </Router>
    </div>
  );
}

export default App;
