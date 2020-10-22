import React from 'react';
import Navbar from './Component/Navbar/Navbar.jsx'
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'; 
import SportPage from "./Component/SportPage/SportPage.jsx"
import TechnologyPage from "./Component/TechnologyPage/TechnologyPage.jsx"
import EntertainmentPage from "./Component/EntertainmentPage/EntertainmentPage.jsx"
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
              <EntertainmentPage/>
            </Route>


             {/* Route for Sports Section */ }
            <Route path="/sports">
              <Navbar/>
              <SportPage/>
            </Route>

             {/*Route for technology section */ }
            <Route path="/technology">
              <Navbar/>
              <TechnologyPage/>
            </Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
