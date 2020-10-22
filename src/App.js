import React from 'react';
import Navbar from './Component/Navbar/Navbar.jsx'
import NewsCard from './Component/NewsCard/NewsCard'
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'; 
import SetCards from "./Component/SetCards/SetCards"
import './App.css';



function App() {
  return (
    <div>
      <Router>
          <Switch>

             {/* Redirect users to entertainment*/ }
            <Route exact path="/"> 
              <Redirect to="/entertainment"/>
            </Route>

             {/* Route for entertainment section*/ }
            <Route path="/entertainment">
              <Navbar id= "navBarStyle"/>
              <SetCards category={"entertainment"}/>
            </Route>


             {/* Route for Sports Section */ }
            <Route path="/sports">
              <Navbar/>
              <SetCards category={"sports"}/>
            </Route>

             {/*Route for technology section */ }
            <Route path="/technology">
              <Navbar/>
              <SetCards category={"technology"}/>
            </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
