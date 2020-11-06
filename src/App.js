import React from 'react';
import Navbar from './Component/Navbar/Navbar.jsx'
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx"
import MissingURLPage from "./Component/MissingURLPage/MissingURLPage.jsx"
import ContentPage from './Component/ContentPage/ContentPage.jsx';
import {Switch,Route,BrowserRouter as Router,Redirect} from 'react-router-dom'; 
import NoPageFound from './Component/NoPageFound/NoPageFound.jsx';

/* 
  Component that contains the routes to the correct page of the DiscoverNews
*/ 

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
              <ContentPage category={"Entertainment"}/>
            </Route>

             {/* Route for Sports Section */ }
            <Route path="/sports">
              <Navbar/>
              <ContentPage category={"Sports"}/>
            </Route>

             {/*Route for technology section */ }
            <Route path="/technology">
              <Navbar/>
              <ContentPage category={"Technology"}/>
            </Route>  

             {/*Route for missing url page */ }
             <Route path="/missingurl">
              <Navbar/>
              <MissingURLPage/>
            </Route>  

            {/*Route for error */ }
            <Route path="/error" render={(props) => 
              <div>
                <Navbar/> 
                <ErrorPage {...props}/>
              </div>
            } />

            {/*Route that don't exist  */ }
            <Route path="*">
              <Navbar/>
              <NoPageFound/>
            </Route>  

        </Switch>
      </Router>
    </div>
  );
}

export default App;
