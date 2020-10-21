import React from 'react';
import Navbar from './Component/Navbar/Navbar.jsx'
import NewsCard from './Component/NewsCard/NewsCard'
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'; 
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
              <div id = "contentStyle">
                <NewsCard id={"cardStyle"}/>
                <NewsCard id={"cardStyle"}/>
                <NewsCard id={"cardStyle"}/>
                <NewsCard id={"cardStyle"}/>
                <NewsCard id={"cardStyle"}/>
              </div>
            </Route>


             {/* Route for Sports Section */ }
            <Route path="/sports">
              <Navbar/>
              <div id = "contentStyle">
                <h1>Sports</h1>
              </div>
            </Route>

             {/*Route for technology section */ }
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
