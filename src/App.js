import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Map from './components/Map'
import Signup from './components/Signup'
import Home from './components/Home'
import { Redirect, Route, Switch , Link } from "react-router-dom";

const App = () => {
  return (
     <>
     <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Map" component={Map} />   
    </Switch> 
    <Redirect to="/Home"/>
    </>
  )
}

export default App;
